# Callback Request Setup Guide

## Google Sheets Backend Setup

Follow these steps to connect your "Request Callback" form to Google Sheets:

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it **"RTS Callback Requests"**

### Step 2: Add Column Headers

In the first row, add these headers:

| A    | B     | C     | D       | E    | F       | G         |
|------|-------|-------|---------|------|---------|-----------|
| Name | Phone | Email | Service | Time | Message | Timestamp |

### Step 3: Open Apps Script Editor

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. This will open the Apps Script editor in a new tab

### Step 4: Add the Backend Code

1. Delete any default code in the editor
2. Copy **ALL** the code from the `google-apps-script.js` file in your project
3. Paste it into the Apps Script editor
4. Click the **Save** icon (💾) or press `Ctrl+S`
5. Name your project (e.g., "RTS Callback Handler")

### Step 5: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Fill in the deployment settings:
   - **Description**: "Callback Form Handler" (optional)
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**

### Step 6: Authorize the Script

1. You'll see a warning: "Authorization required"
2. Click **Authorize access**
3. Choose your Google account
4. Click **Advanced** (if you see a warning)
5. Click **Go to [Your Project Name] (unsafe)**
6. Click **Allow**

### Step 7: Copy the Web App URL

1. After authorization, you'll see a "Deployment" dialog
2. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXX/exec
   ```
3. Keep this URL safe!

### Step 8: Update Your Website Code

1. Open the file: `script.js`
2. Find line 408 with:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL'` with your actual URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/XXXXXXXXXXXXX/exec';
   ```
4. Save the file

### Step 9: Test Your Form

1. Open your website (`index.html`)
2. Click the **"Request Callback"** button
3. Fill in the form and submit
4. Check your Google Sheet - a new row should appear!

---

## Troubleshooting

### Issue: "Error 404 - The script completed but did not return anything"
**Solution**: This is normal with `no-cors` mode. Check your Google Sheet - the data should still be saved.

### Issue: Form submits but no data in Google Sheet
**Solution**:
1. Make sure you deployed as **Web app** (not API executable)
2. Check that "Who has access" is set to **"Anyone"**
3. Re-deploy the script (Deploy > Manage deployments > Edit > Deploy)

### Issue: "Authorization required" error
**Solution**:
1. Go back to Apps Script
2. Click **Deploy** > **Test deployments**
3. Re-authorize the script

### Issue: Want to update the script later
**Solution**:
1. Make changes in Apps Script editor
2. Click **Deploy** > **Manage deployments**
3. Click the pencil icon (✏️) next to your deployment
4. Change version to **New version**
5. Click **Deploy**
6. The URL stays the same - no need to update your website!

---

## What Happens When Someone Requests a Callback?

1. User fills the callback form on your website
2. Data is sent to your Google Apps Script
3. A new row is added to your Google Sheet with:
   - Name
   - Phone number
   - Email (if provided)
   - Service they're interested in
   - Preferred callback time
   - Additional message (if provided)
   - Timestamp (in Indian timezone)

4. You receive the success message on the website
5. You can check your Google Sheet anytime to see all callback requests

---

## Tips

### Email Notifications
Want to get email notifications for each callback request? Add this to your Apps Script:

```javascript
// Add this inside the doPost function, after sheet.appendRow([...])

MailApp.sendEmail({
  to: 'razatechnologyservices@gmail.com',
  subject: 'New Callback Request - ' + data.name,
  body: 'New callback request received:\n\n' +
        'Name: ' + data.name + '\n' +
        'Phone: ' + data.phone + '\n' +
        'Email: ' + (data.email || 'Not provided') + '\n' +
        'Service: ' + data.service + '\n' +
        'Preferred Time: ' + data.time + '\n' +
        'Message: ' + (data.message || 'None')
});
```

### Limit Daily Submissions
To prevent spam, add this at the beginning of doPost:

```javascript
// Check if more than 100 submissions today
const today = new Date().toDateString();
const values = sheet.getDataRange().getValues();
const todayCount = values.filter(row =>
  new Date(row[6]).toDateString() === today
).length;

if (todayCount > 100) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'error',
    message: 'Daily limit reached'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

---

## Need Help?

If you're still having trouble with the Google Apps Script setup, you can:

1. **Use WhatsApp Direct Link** (Simpler alternative - no backend needed)
2. **Use Web3Forms** (Simple API, no coding needed)
3. Contact me for assistance

Would you like me to switch to a simpler solution without Google Apps Script?
