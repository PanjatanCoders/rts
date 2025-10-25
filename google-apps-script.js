// ================================
// GOOGLE APPS SCRIPT - BACKEND
// ================================
//
// INSTRUCTIONS:
// 1. Go to https://sheets.google.com and create a new spreadsheet
// 2. Name it "RTS Callback Requests" (or any name you prefer)
// 3. Add headers in the first row: Name | Phone | Email | Service | Time | Message | Timestamp
// 4. Go to Extensions > Apps Script
// 5. Delete any default code and paste the code below
// 6. Click "Deploy" > "New deployment"
// 7. Select type: "Web app"
// 8. Execute as: "Me"
// 9. Who has access: "Anyone"
// 10. Click "Deploy" and copy the Web App URL
// 11. Paste that URL in your script.js file (replace 'YOUR_GOOGLE_APPS_SCRIPT_URL')
// ================================

function doPost(e) {
  try {
    // Log incoming request for debugging
    Logger.log('Received POST request');
    Logger.log('Request data: ' + e.postData.contents);

    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Check if postData exists
    if (!e.postData || !e.postData.contents) {
      throw new Error('No data received');
    }

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.name || !data.phone || !data.service || !data.time) {
      throw new Error('Missing required fields');
    }

    // Add a new row with the callback request data
    sheet.appendRow([
      data.name,
      data.phone,
      data.email || 'Not provided',
      data.service,
      data.time,
      data.message || 'None',
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    ]);

    Logger.log('Data saved successfully');

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Callback request saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());

    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle GET requests (for testing)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Apps Script is running! Use POST method to submit data.'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Optional: Function to test the script
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        phone: '+91 12345 67890',
        email: 'test@example.com',
        service: 'Mobile App Development',
        time: 'Morning (9 AM - 12 PM)',
        message: 'This is a test message'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
