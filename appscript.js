/**
 * JK FORGE - GOOGLE APPS SCRIPT BACKEND
 * 
 * Features:
 * 1. Single File Upload with File Rename to User Email Address & Save to Google Drive folder.
 * 2. Sheet Recording: Appends form submissions into Google Sheet (auto-creates header if not present).
 * 3. Branded Email: Sends HTML emails formatted with JK Forge brand theme (#0c2b5e, #1363a6, #c0c5ce).
 * 
 * Setup Instructions:
 * 1. Open Google Sheets -> Extensions -> Apps Script.
 * 2. Paste this code into Code.gs.
 * 3. Deploy as Web App (Execute as: Me, Access: Anyone).
 * 4. Copy the Web App URL and paste it into APPS_SCRIPT_URL in templates/contact.js.
 */

// Configuration Constants
var NOTIFY_EMAIL = "yash.minibee@gmail.com";
var FOLDER_NAME = "JK_Forge_Drawings_Uploads";

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var action = data.action || 'submit_inquiry';

    if (action === 'upload_file') {
      var result = uploadFileToDrive(data);
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    } 
    else if (action === 'submit_inquiry') {
      var result = processInquiry(data);
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }
    else {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Unknown action specified' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'active', message: 'JK Forge Apps Script API operational.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Single File Upload to Google Drive with automatic file renaming to user Email Address
 */
function uploadFileToDrive(data) {
  if (!data.base64Data || !data.filename) {
    return { status: 'error', message: 'Missing file data or filename' };
  }

  // Get or Create Target Google Drive Folder
  var folder;
  var folders = DriveApp.getFoldersByName(FOLDER_NAME);
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder(FOLDER_NAME);
    folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }

  // Extract file extension
  var originalName = data.filename || "document";
  var fileExt = "";
  if (originalName.lastIndexOf(".") !== -1) {
    fileExt = originalName.substring(originalName.lastIndexOf("."));
  }

  // Construct new File Name renamed to User Email Address
  var userEmail = (data.email || "").trim().toLowerCase();
  var newFileName = originalName;

  if (userEmail) {
    var sanitizedEmail = userEmail.replace(/[^a-zA-Z0-9@._-]/g, "_");
    var timestampStr = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd_HHmmss");
    newFileName = sanitizedEmail + "_" + timestampStr + fileExt;
  }

  // Decode Base64 Data
  var contentType = data.mimeType || 'application/octet-stream';
  var bytes = Utilities.base64Decode(data.base64Data);
  var blob = Utilities.newBlob(bytes, contentType, newFileName);

  // Save File in Drive Folder
  var file = folder.createFile(blob);
  file.setName(newFileName);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  return {
    status: 'success',
    fileName: file.getName(),
    fileUrl: file.getUrl(),
    fileId: file.getId()
  };
}

/**
 * Records inquiry into Google Sheet and sends branded email
 */
function processInquiry(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Headers Definition
  var headers = [
    "Timestamp", 
    "Operator Designation (Name)", 
    "Return Vector (Email)", 
    "Comm Frequency (Phone)", 
    "Company / Division", 
    "Transmission Payload (Message)", 
    "Document Link", 
    "Document Name",
    "Status"
  ];

  // Auto Header Creation if sheet row 1 is empty or missing headers
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    
    // Format Header Row with JK Forge Brand Theme (#0c2b5e Deep Navy)
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0c2b5e");
    headerRange.setFontColor("#ffffff");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Roboto Mono");
    headerRange.setHorizontalAlignment("center");
    sheet.setRowHeight(1, 35);
  }

  var timestamp = data.timestamp || new Date().toLocaleString();
  var name = data.name || "N/A";
  var email = data.email || "N/A";
  var phone = data.phone || "N/A";
  var company = data.company || "N/A";
  var message = data.message || "N/A";
  var documentUrl = data.documentUrl || "No Document Attached";
  var documentName = data.documentName || "None";
  var status = "New Inquiry Received";

  // Append Row to Google Sheet
  sheet.appendRow([
    timestamp,
    name,
    email,
    phone,
    company,
    message,
    documentUrl,
    documentName,
    status
  ]);

  // Auto-fit column widths
  try {
    for (var col = 1; col <= headers.length; col++) {
      sheet.autoResizeColumn(col);
    }
  } catch (e) {}

  // Send Branded HTML Email Notifications
  sendBrandedEmail(data);

  return {
    status: 'success',
    message: 'Inquiry and document recorded successfully in Google Sheet.',
    documentUrl: documentUrl
  };
}

/**
 * Sends HTML emails formatted with JK Forge Brand Theme (#0c2b5e & #1363a6)
 */
function sendBrandedEmail(data) {
  var name = data.name || "N/A";
  var email = data.email || "N/A";
  var phone = data.phone || "N/A";
  var company = data.company || "N/A";
  var message = data.message || "N/A";
  var documentUrl = data.documentUrl || "";
  var documentName = data.documentName || "Blueprint Document";
  var timestamp = data.timestamp || new Date().toLocaleString();

  var documentButtonHtml = "";
  if (documentUrl && documentUrl !== "No Document Attached") {
    documentButtonHtml = `
      <div style="margin: 25px 0; text-align: center;">
        <a href="${documentUrl}" target="_blank" style="background: linear-gradient(135deg, #1363a6 0%, #0c2b5e 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block; font-size: 14px; letter-spacing: 1px; box-shadow: 0 4px 15px rgba(19,99,166,0.3);">
          📄 VIEW / DOWNLOAD DRAWING BLUEPRINT (${documentName})
        </a>
      </div>
    `;
  }

  var htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 0; color: #1e293b; }
        .container { max-width: 650px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
        .header { background-color: #0c2b5e; padding: 35px 30px; text-align: center; border-bottom: 4px solid #1363a6; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; }
        .header p { color: #c0c5ce; margin: 6px 0 0 0; font-size: 12px; font-family: monospace; letter-spacing: 2px; }
        .content { padding: 35px 30px; }
        .badge { display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: bold; font-family: monospace; text-transform: uppercase; margin-bottom: 20px; }
        .table-data { width: 100%; border-collapse: collapse; margin-top: 15px; }
        .table-data td { padding: 12px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
        .table-data td.label { font-weight: bold; color: #0c2b5e; width: 38%; font-family: monospace; font-size: 12px; text-transform: uppercase; }
        .table-data td.value { color: #334155; }
        .message-box { background-color: #f8fafc; border-left: 4px solid #1363a6; padding: 18px; border-radius: 0 8px 8px 0; margin-top: 10px; font-size: 14px; line-height: 1.6; color: #334155; }
        .footer { background-color: #050914; padding: 25px; text-align: center; color: #94a3b8; font-size: 12px; }
        .footer p { margin: 4px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>JK FORGE PVT. LTD.</h1>
          <p>ENGINEERING TRANSMISSION RECEIPT</p>
        </div>
        
        <div class="content">
          <div class="badge">New Inquiry & Blueprint Document</div>
          <h2 style="color: #0c2b5e; margin-top: 0; font-size: 20px;">Technical Blueprint & Engineering Inquiry</h2>
          <p style="color: #64748b; font-size: 14px;">A new manufacturing inquiry has been transmitted from the website Inquiry Terminal.</p>
          
          <table class="table-data">
            <tr>
              <td class="label">Date & Time</td>
              <td class="value">${timestamp}</td>
            </tr>
            <tr>
              <td class="label">Operator Designation</td>
              <td class="value"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td class="label">Return Vector (Email)</td>
              <td class="value"><a href="mailto:${email}" style="color: #1363a6; text-decoration: none; font-weight: bold;">${email}</a></td>
            </tr>
            <tr>
              <td class="label">Comm Frequency (Phone)</td>
              <td class="value">${phone}</td>
            </tr>
            <tr>
              <td class="label">Company / Division</td>
              <td class="value">${company}</td>
            </tr>
          </table>

          <div style="margin-top: 25px;">
            <div style="font-weight: bold; color: #0c2b5e; font-family: monospace; font-size: 12px; text-transform: uppercase;">Transmission Payload (Message):</div>
            <div class="message-box">${message}</div>
          </div>

          ${documentButtonHtml}
        </div>

        <div class="footer">
          <p><strong>JK FORGE PVT. LTD.</strong></p>
          <p>Plot No: 11, Chaitanya Industrial Area, Ganga Gate, Shapar (Veraval), Rajkot, Gujarat</p>
          <p>Phone: +91 7600066117 | Email: info@jkforgeindia.com</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send Email to Company Inbox
  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "⚡ NEW INQUIRY & BLUEPRINT: " + name + " (" + company + ")",
      htmlBody: htmlBody
    });
  } catch (e) {}

  // Send Confirmation Email to Submitter
  if (email && email.indexOf('@') !== -1) {
    try {
      MailApp.sendEmail({
        to: email,
        subject: "Transmission Confirmed - JK Forge Industries",
        htmlBody: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #0c2b5e; color: #ffffff; padding: 25px; text-align: center; border-bottom: 3px solid #1363a6;">
              <h2 style="margin: 0; font-size: 20px;">JK FORGE PVT. LTD.</h2>
              <p style="margin: 5px 0 0 0; color: #c0c5ce; font-size: 12px; font-family: monospace;">TRANSMISSION CONFIRMATION</p>
            </div>
            <div style="padding: 30px; color: #334155; font-size: 14px; line-height: 1.6;">
              <p>Dear <strong>${name}</strong>,</p>
              <p>Your engineering inquiry and blueprint transmission have been successfully received by JK Forge's engineering team.</p>
              <p>An application engineer is reviewing your drawing specifications and will respond with engineering feedback and commercial terms within 24 hours.</p>
              ${documentUrl ? `<p><strong>Attached Blueprint:</strong> <a href="${documentUrl}" style="color: #1363a6;">${documentName}</a></p>` : ''}
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;">
              <p style="font-size: 12px; color: #64748b;">If you have urgent questions, call our engineering team directly at <strong>+91 7600066117</strong>.</p>
            </div>
          </div>
        `
      });
    } catch (e) {}
  }
}
