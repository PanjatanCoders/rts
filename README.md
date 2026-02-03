# RTS - Raza Technology Services Website

A professional website for Raza Technology Services with a fully functional callback request system.

## ✅ Project Status: Complete & Ready

**Stack:** HTML, CSS, JavaScript (Vanilla)
**Hosting:** Ready for Netlify or any web server
**Current Mode:** Testing (WhatsApp)
**Production Ready:** Yes (just flip one switch)

---

## 🧭 Overall Layout
A **multi-section single-page website** with a clear company identity and product highlight.  
Smooth navigation between sections using a sticky top navbar.

### Sections Overview:
1. Hero / Header  
2. About RTS  
3. Our Services  
4. Featured Product (Flat/PG Management App Offer)  
5. Portfolio (Future-ready section)  
6. Testimonials  
7. Contact / CTA  
8. Footer  

---

## 🏠 1. Hero / Header Section
**Purpose:** Brand introduction + call to action  
**Includes:**
- Logo (top-left)
- Navbar links: *Home | About | Services | Product | Contact*
- Headline:  
  > *“Empowering Local Businesses Through Smart Technology”*  
- Subheadline:  
  > *Mobile Apps, Web Development, Automation & Custom Software Solutions for Real-World Problems.*  
- Button(s):
  - “Get a Free Quote”
  - “Explore Our App” (anchors to product section)
- Background: abstract tech graphic or subtle gradient (#FF6B00 to #1E1E1E blend)

---

## 💡 2. About RTS
**Purpose:** Tell your story, local roots, and mission.  
**Content:**
- Heading: *“About Raza Technology Services”*
- Short description (2–3 lines):  
  > *RTS is a Pune-based technology company focused on creating meaningful software solutions — from mobile apps to automation tools — that make everyday tasks easier and smarter.*  
- Add 3 quick highlights (with small icons):  
  - 💻 *Custom Development*  
  - ⚙️ *Automation & Efficiency*  
  - 🌍 *Local to Global Mindset*

---

## ⚙️ 3. Our Services
**Purpose:** Showcase what RTS offers.  
**Layout:** 2 or 3-column cards with icons.  
**Services List:**
- 📱 Mobile App Development  
- 💻 Website Development  
- 🖥️ Desktop Application Development  
- 🤖 Automating Repetitive Tasks (RPA-like solutions)  
- 🧪 Test Framework / Tool Development  
- ☁️ Deployment & Hosting Support *(optional)*

Each card:
- Title
- 1-liner description
- Hover glow or border accent

---

## 📱 4. Featured Product: Flat/PG Management App (Launch Offer)
**Purpose:** Promote the free offer for early customers.  
**Design:** Eye-catching section with glowing border or background highlight.  
**Content Example:**

> 🎉 **Now Launching in Pune!**  
> Introducing our *Flat/PG Management App* — designed for local housing managers, landlords, and societies.  
> Simplify rent tracking, maintenance, and reports — all in your local language.

- Button: “Claim Free Access” → WhatsApp or Google Form  
- Tagline: *“Helping Pune’s housing go digital — one society at a time.”*  
- Mention Offer:  
  > Free setup & access for **first 15 customers only.**

---

## 🧾 5. Portfolio *(for later expansion)*
**Purpose:** Future-proofing the site.  
**Placeholder Cards:**
- Project thumbnails (e.g., “Automation Framework Tool”, “Custom CRM for Local Shop”, etc.)  
- Each with short text and “Coming Soon” badge.

---

## 💬 6. Testimonials
**Purpose:** Build trust.  
**Layout:** Slider or grid with 2–3 testimonials (real or placeholder).  
Examples:
- “RTS made our PG management completely digital.” — *Flat Owner, Kothrud*  
- “Super reliable local tech team!” — *Society Manager, Baner*  

---

## 📞 7. Contact / CTA Section ✅ Implemented
**Status:** Complete with dual submission system
**Features:**
- Heading: *"Let's Build Something Great Together"*
- Buttons:
  - "Contact on WhatsApp" ✅
  - "Request Callback" ✅ (Opens professional modal)
- Contact Form ✅ (Name, Email, Message)
- Email: connect@razatechservices.in

### Callback Request Modal Features:
- ✅ Name (required)
- ✅ Phone Number (required)
- ✅ Email (optional)
- ✅ Service Selection (dropdown)
- ✅ Preferred Callback Time (dropdown)
- ✅ Additional Message (optional)
- ✅ Form validation
- ✅ Dual submission (Web3Forms + WhatsApp fallback)
- ✅ Testing/Production mode toggle

---

## ⚓ 8. Footer ✅ Implemented
**Status:** Complete
**Includes:**
- © 2025 Raza Technology Services
- Social links (LinkedIn, Instagram, WhatsApp)
- Tagline: *"Made with ❤️ in Pune, for the world."*

---

## 🎨 Design Theme ✅ Implemented
| Element | Implementation |
|----------|-------------|
| **Primary Color** | `#FF6B00` (Orange) ✅ |
| **Secondary Color** | `#1E1E1E` (Dark Gray) ✅ |
| **Accent** | `#FFFFFF` (White) ✅ |
| **Font (Headings)** | Poppins ✅ |
| **Font (Body)** | Open Sans ✅ |
| **Button Style** | Rounded corners, shadow, hover effects ✅ |
| **Animations** | Smooth transitions, fade-in on scroll ✅ |

---

## 📋 Project Files

```
rts/
├── index.html                 # Main website ✅
├── style.css                  # Responsive styles ✅
├── script.js                  # Interactive features ✅
├── google-apps-script.js      # Google Sheets backend (optional)
├── WEB3FORMS_SETUP.md        # Email setup guide ✅
├── CALLBACK_SETUP_GUIDE.md    # Google Sheets guide
├── TROUBLESHOOTING.md         # Problem solving guide ✅
└── README.md                  # This file ✅
```

---

## 🚀 Callback Request System

### Current Configuration

**Mode**: Testing (WhatsApp) 📱
- File: `script.js` Line 417
- Setting: `const USE_WHATSAPP_FOR_TESTING = true;`

**What happens:**
- User fills callback form
- WhatsApp opens with pre-filled message
- Sent to: +91 70304 00093

### Production Configuration

**Mode**: Email via Web3Forms 📧
- File: `script.js` Line 417
- Change to: `const USE_WHATSAPP_FOR_TESTING = false;`

**What happens:**
- User fills callback form
- Email sent to: connect@razatechservices.in
- WhatsApp used only as fallback

### Configuration Details

```javascript
// Web3Forms Access Key (Configured ✅)
const WEB3FORMS_ACCESS_KEY = '30259849-42ca-496f-859e-fb01429c5a39';

// Your Email
const YOUR_EMAIL = 'connect@razatechservices.in';

// WhatsApp Number
const WHATSAPP_NUMBER = '917030400093';

// Testing Mode Toggle (Change this to go live)
const USE_WHATSAPP_FOR_TESTING = true;  // false for production
```

---

## 📖 Documentation

### Setup Guides
- **[WEB3FORMS_SETUP.md](WEB3FORMS_SETUP.md)** - How to switch between testing and production modes
- **[CALLBACK_SETUP_GUIDE.md](CALLBACK_SETUP_GUIDE.md)** - Alternative: Google Sheets integration
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common issues and solutions

### Quick Start

1. **For Testing:**
   - Open `index.html` in browser
   - Click "Request Callback"
   - Submit form → WhatsApp opens

2. **For Production:**
   - Edit `script.js` line 417: `USE_WHATSAPP_FOR_TESTING = false;`
   - Upload to server
   - Submit form → Email sent

---

## 🎯 Features Implemented

### Website Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with active link tracking
- ✅ Smooth scroll between sections
- ✅ Animated elements on scroll
- ✅ Professional color scheme
- ✅ Google Fonts integration
- ✅ Lucide Icons library

### Callback System Features
- ✅ Professional modal design
- ✅ Form validation (required fields, phone, email)
- ✅ Web3Forms email integration
- ✅ WhatsApp fallback system
- ✅ Testing/Production mode toggle
- ✅ Loading states & user feedback
- ✅ Error handling
- ✅ Mobile responsive modal

### Form Fields
- ✅ Name (required, validated)
- ✅ Phone (required, format validated)
- ✅ Email (optional, format validated)
- ✅ Service dropdown (8 options)
- ✅ Time preference (4 options)
- ✅ Message textarea (optional)

---

## 🌐 Deployment

### Option 1: Netlify (Recommended for Testing)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your `rts` folder
3. Site goes live instantly
4. Free subdomain: `yoursite.netlify.app`

### Option 2: GitHub Pages (Free Forever)

1. Create GitHub repository
2. Upload all files
3. Settings → Pages → Deploy
4. Access at: `yourusername.github.io/rts`

### Option 3: Any Web Server

Upload via FTP:
- `index.html`
- `style.css`
- `script.js`

That's it! No build process needed.

---

## ⚙️ Configuration Before Going Live

### Step 1: Switch to Production Mode

**File**: `script.js` line 417

Change:
```javascript
const USE_WHATSAPP_FOR_TESTING = false;
```

### Step 2: Update Contact Details (if needed)

**File**: `script.js` lines 411-414
```javascript
const YOUR_EMAIL = 'connect@razatechservices.in';
const WHATSAPP_NUMBER = '917030400093';
```

**File**: `index.html` lines 256-265
- Update email, phone, location if needed

### Step 3: Test Everything

1. Test callback form (should send email)
2. Check email inbox
3. Test WhatsApp button
4. Test contact form
5. Test on mobile devices

---

## 📊 Free Tier Limits

### Web3Forms
- ✅ 250 submissions/month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ No credit card required

### Netlify Hosting
- ✅ 100 GB bandwidth/month
- ✅ Unlimited sites
- ✅ Free SSL certificate
- ✅ Custom domain support

---

## 🛠️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

---

## 📞 Support & Contact

- **Email**: connect@razatechservices.in
- **Phone**: +91 70304 00093
- **Location**: Pune, Maharashtra, India

---

## 📝 License

© 2025 Raza Technology Services. All rights reserved.

---

**Made with ❤️ in Pune**
