# Deployment & Security Guide

## 🔐 Keeping Your API Keys Safe

### The Problem
Your Web3Forms access key is sensitive data that should **NOT** be publicly visible on GitHub.

### The Solution
We've implemented a secure configuration system that keeps your secrets safe.

---

## 📁 File Structure

### Files You COMMIT to GitHub ✅
- `index.html`
- `style.css`
- `script.js`
- `config.example.js` ⭐ (Template with no real data)
- `.gitignore` ⭐ (Protects your secrets)
- All `.md` documentation files

### Files You DON'T COMMIT ❌
- `config.js` ⭐ (Contains your real API keys)
- Any backup files
- System files (.DS_Store, etc.)

---

## 🚀 How to Deploy

### Step 1: Push to GitHub

When you push to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

**What happens:**
- ✅ `.gitignore` prevents `config.js` from being uploaded
- ✅ Your API key stays private
- ✅ `config.example.js` is uploaded (safe template)
- ✅ All other files are uploaded

### Step 2: Deploy to Netlify/Vercel

#### Option A: Netlify

1. **Go to**: [netlify.com](https://netlify.com)
2. **Connect** your GitHub repository
3. **Add Environment Variables**:
   - Go to Site Settings → Environment Variables
   - Add these variables:
     ```
     WEB3FORMS_ACCESS_KEY=30259849-42ca-496f-859e-fb01429c5a39
     YOUR_EMAIL=razatechnologyservices@gmail.com
     WHATSAPP_NUMBER=917030400093
     USE_WHATSAPP_FOR_TESTING=false
     ```
4. **Deploy** the site

**Note:** For static HTML sites, environment variables work differently. See "Alternative Approach" below.

#### Option B: Direct File Upload

If you're uploading files directly to a server:

1. **Upload ALL files** including `config.js`
2. Make sure `config.js` is NOT publicly accessible
3. Most web servers keep `.js` files private by default

---

## 🎯 Best Practice for Static Sites

Since this is a static HTML/JS site, here's the **recommended approach**:

### For GitHub (Public Repository)

**Option 1: Keep Repository Private** (Recommended)
- Make your GitHub repository private
- Upload everything including `config.js`
- Only you can see the code
- Deploy from private repo to Netlify

**Option 2: Use Public Repository + Manual Config**
- Push everything EXCEPT `config.js` to GitHub
- Anyone cloning must create their own `config.js`
- Provide instructions in `config.example.js`
- When deploying, manually add `config.js` to server

---

## 📝 Instructions for Team Members

If someone clones your repository:

### Step 1: Clone the Repo
```bash
git clone https://github.com/yourusername/rts.git
cd rts
```

### Step 2: Create Config File
```bash
# Copy the example file
cp config.example.js config.js
```

### Step 3: Add Your Credentials
Edit `config.js` and replace placeholders:
```javascript
const CONFIG = {
    WEB3FORMS_ACCESS_KEY: 'your-actual-key-here',
    YOUR_EMAIL: 'your-email@example.com',
    WHATSAPP_NUMBER: '917030400093',
    USE_WHATSAPP_FOR_TESTING: true
};
```

### Step 4: Test Locally
Open `index.html` in browser and test the callback form.

---

## 🔍 Verify It's Working

### Test 1: Check .gitignore is Working
```bash
git status
```

You should **NOT** see `config.js` in the list of files to commit.

### Test 2: Check GitHub
After pushing, visit your GitHub repository and verify:
- ❌ `config.js` is NOT visible
- ✅ `config.example.js` IS visible
- ✅ `.gitignore` IS visible

### Test 3: Local Testing
1. Open `index.html` in browser
2. Open browser console (F12)
3. Submit callback form
4. Check if it's using your real access key

---

## 🌐 Deployment Options

### 1. Private GitHub + Netlify (Best for Production)

**Steps:**
1. Make GitHub repo private
2. Push all files (including `config.js`)
3. Connect to Netlify
4. Deploy automatically

**Pros:**
- ✅ Simplest workflow
- ✅ Automatic deploys on push
- ✅ Free SSL certificate
- ✅ Custom domain support

### 2. Public GitHub + Manual Server Upload

**Steps:**
1. Keep GitHub repo public (without `config.js`)
2. Upload files to web server via FTP
3. Manually create `config.js` on server

**Pros:**
- ✅ Code visible to everyone
- ✅ Good for portfolio
- ✅ API key stays private

### 3. GitHub Pages (With Fallback to WhatsApp)

**Note:** GitHub Pages doesn't support server-side secrets well.

**Solution:**
- Set `USE_WHATSAPP_FOR_TESTING = true`
- Use WhatsApp as primary method
- No email integration on GitHub Pages

---

## 🛡️ Security Best Practices

### DO ✅
- Keep `config.js` in `.gitignore`
- Use private repositories for production
- Rotate API keys if exposed
- Use environment variables when possible

### DON'T ❌
- Commit API keys to GitHub
- Share access keys publicly
- Hard-code secrets in `script.js`
- Push `config.js` to public repos

---

## 🔄 What If API Key Gets Exposed?

If your API key accidentally gets pushed to GitHub:

### Immediate Steps:

1. **Revoke the Key**
   - Go to [Web3Forms Dashboard](https://web3forms.com/dashboard)
   - Delete or regenerate access key

2. **Remove from GitHub**
   ```bash
   # Remove from current commit
   git rm --cached config.js
   git commit -m "Remove sensitive data"
   git push origin main
   ```

3. **Clean Git History** (if in old commits)
   - Use tools like BFG Repo-Cleaner
   - Or create new repository (easiest)

4. **Update Your Local Config**
   - Add new access key to `config.js`
   - Test locally

---

## 📊 Current Configuration Status

### Your Current Setup:
- ✅ `.gitignore` created (protects secrets)
- ✅ `config.js` created (contains real keys)
- ✅ `config.example.js` created (safe template)
- ✅ `script.js` updated (uses config)
- ✅ `index.html` updated (loads config)

### What's Protected:
- 🔐 Web3Forms Access Key: `30259849-42ca-496f-859e-fb01429c5a39`
- 🔐 Email: `razatechnologyservices@gmail.com`
- 🔐 WhatsApp: `917030400093`

---

## 🎯 Recommended Deployment Flow

### For Production:

1. **Create Private GitHub Repo**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - RTS website"
   git remote add origin https://github.com/yourusername/rts.git
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Connect private repo
   - Auto-deploy on push
   - Add custom domain

3. **Switch to Production Mode**
   - Edit `config.js`
   - Set `USE_WHATSAPP_FOR_TESTING: false`
   - Commit and push

### For Public Portfolio:

1. **Remove Sensitive Config**
   - Don't commit `config.js`
   - Keep only `config.example.js`

2. **Use WhatsApp Mode**
   - Set fallback to WhatsApp
   - No email integration needed

3. **Deploy to GitHub Pages**
   - Free hosting
   - Good for demo/portfolio
   - No backend secrets needed

---

## 📞 Support

If you need help with deployment:
- Check [QUICK_START.md](QUICK_START.md)
- Check [README.md](README.md)
- Email: razatechnologyservices@gmail.com

---

**Remember:** Your `config.js` file should NEVER appear on GitHub! ✅
