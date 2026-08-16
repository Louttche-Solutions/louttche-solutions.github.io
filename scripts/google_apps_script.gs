/**
 * Sample Google Apps Script Web App to receive contact form POSTs and forward to Gmail.
 *
 * Deploy as a Web App (Execute as: Me, Who has access: Anyone) and use the provided URL
 * as `VITE_CONTACT_ENDPOINT` in your .env.
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    // Honeypot check
    if (data.website) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, reason: 'bot' }))
        .setMimeType(ContentService.MimeType.JSON)
    }

    const recipient = 'you@gmail.com' // change to your address
    const subject = 'Website contact: ' + (data.name || 'No name')
    const body = 'From: ' + (data.email || 'no-email') + '\n\n' + (data.message || '')

    GmailApp.sendEmail(recipient, subject, body)

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
