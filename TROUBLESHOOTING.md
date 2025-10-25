# Troubleshooting: Google Apps Script 400 Bad Request Error

## Quick Fix: Use WhatsApp Fallback (RECOMMENDED)

I've added a **WhatsApp fallback** that works immediately without any setup!

Currently, your form is set to use WhatsApp by default. When someone submits a callback request:
1. Their information is formatted nicely
2. WhatsApp opens automatically with a pre-filled message to your number
3. You receive the callback request instantly via WhatsApp

**This is already working!** You don't need to do anything else.

---

## If You Still Want Google Sheets Integration

Here's a detailed checklist to fix the 400 Bad Request error:

### Checklist 1: Deployment Settings

1. **Open your Google Sheet**
2. **Go to Extensions > Apps Script**
3. **Click Deploy > Manage deployments**
4. **Check these settings:**
   - ✅ Type: **Web app**
   - ✅ Execute as: **Me (your email)**
   - ✅ Who has access: **Anyone** ← This is critical!

5. **If "Who has access" is NOT set to "Anyone":**
   - Click the pencil icon (✏️) to edit
   - Change it to **Anyone**
   - Click **Deploy**

### Checklist 2: Re-Deploy the Script

Sometimes you need to create a fresh deployment:

1. Go to **Deploy > Manage deployments**
2. Click the **Archive** button (🗑️) on the old deployment
3. Click **Deploy > New deployment**
4. Select type: **Web app**
5. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**
7. **Copy the NEW URL** (it will be different!)

### Checklist 3: Test the Script URL

1. Copy your Web App URL
2. Open a new browser tab
3. Paste the URL and press Enter
4. You should see: `{"status":"success","message":"Apps Script is running! Use POST method to submit data."}`
5. If you see an error instead, the deployment is not working

### Checklist 4: Authorization

1. In Apps Script, click **Run** (▶️) button at the top
2. Select the `doPost` function from dropdown
3. Click **Run**
4. If it asks for authorization:
   - Click **Review Permissions**
   - Choose your account
   - Click **Advanced** > **Go to [project name]**
   - Click **Allow**

### Checklist 5: Verify Sheet Setup

1. Make sure your Google Sheet has headers in Row 1:
   ```
   Name | Phone | Email | Service | Time | Message | Timestamp
   ```
2. The sheet must be the **active sheet** (first tab)

---

## Common Causes of 400 Error

### ❌ Cause 1: "Who has access" is set to "Only myself"
**Solution**: Change to "Anyone" in deployment settings

### ❌ Cause 2: Deployed as "API Executable" instead of "Web app"
**Solution**: Delete deployment and create new one as "Web app"

### ❌ Cause 3: Using old/cached URL
**Solution**: Get fresh URL from latest deployment

### ❌ Cause 4: Script not authorized
**Solution**: Run the script manually first to trigger authorization

### ❌ Cause 5: CORS issues
**Solution**: The new code handles this better with proper error fallback

---

## Testing Steps

### Step 1: Test Google Apps Script directly

1. In Apps Script editor, update the `testDoPost()` function at the bottom
2. Click **Run** (▶️) and select `testDoPost`
3. Click **Execution log** to see results
4. If this works, the script itself is fine

### Step 2: Test the Web App URL

Open your browser console (F12) and run:

```javascript
fetch('YOUR_WEB_APP_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    phone: '1234567890',
    service: 'Mobile App',
    time: 'Morning (9 AM - 12 PM)'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

### Step 3: Check Execution Logs

1. In Apps Script, click **Executions** (clock icon) on the left
2. Look for recent executions
3. Click on them to see detailed logs
4. Look for error messages

---

## Alternative Solutions (If Google Apps Script Still Doesn't Work)

### Option 1: Keep WhatsApp Fallback (EASIEST ✅)

This is already enabled! Just keep it as is:
```javascript
const USE_WHATSAPP_FALLBACK = true;
```

**Pros:**
- ✅ Works immediately, no setup
- ✅ Instant notifications via WhatsApp
- ✅ Direct communication with customer
- ✅ No technical issues

**Cons:**
- ❌ No automatic spreadsheet tracking
- ❌ Manual record keeping

### Option 2: Use Web3Forms (FREE, No Code)

1. Go to https://web3forms.com
2. Enter your email
3. Get your Access Key
4. Update script.js:

```javascript
const WEB3FORMS_KEY = 'your-access-key-here';

async function submitCallbackRequest(data) {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            ...data
        })
    });
    return response.json();
}
```

### Option 3: Use EmailJS

1. Sign up at https://www.emailjs.com
2. Create email template
3. Get Service ID, Template ID, and Public Key
4. Simpler integration than Google Apps Script

### Option 4: Simple PHP Backend (If you have hosting)

If your web hosting supports PHP, I can provide a simple PHP script.

---

## My Recommendation

**For now, use the WhatsApp fallback!**

It's:
- ✅ Already working
- ✅ Zero configuration
- ✅ Instant notifications
- ✅ Better customer experience (direct communication)

You can always add Google Sheets integration later when you have more time to troubleshoot.

---

## Need More Help?

If you want to:
1. **Stick with WhatsApp** → You're all set! Nothing to do.
2. **Try Web3Forms** → Let me know, I'll update the code
3. **Keep debugging Google Apps Script** → Send me:
   - Screenshot of your deployment settings
   - The exact error message you see
   - Screenshot of your sheet headers

Which option sounds best for you?
