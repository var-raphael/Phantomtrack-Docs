# 📊 PhantomTrack

**Instant Analytics. No Friction.**

![No Signup](https://img.shields.io/badge/No%20Signup-Required-success?style=for-the-badge)
![Privacy First](https://img.shields.io/badge/Privacy-Focused-blue?style=for-the-badge)
![GDPR Compliant](https://img.shields.io/badge/GDPR-Compliant-green?style=for-the-badge)

Track your website traffic in 30 seconds. No signup. No cookies. No BS.

🌐 **Live Site**: [phantomtrack-docs.vercel.app](https://phantomtrack-docs.vercel.app/)  
📚 **Documentation**: [phantomtrack-docs.vercel.app/docs](https://phantomtrack-docs.vercel.app/docs)

---

## 🚀 Features

### ⚡ Instant Setup
Generate your tracking ID instantly. No account, no email (optional), no friction. Start tracking in 30 seconds.

### 🔒 Privacy-Focused
- **No cookies** - Cookieless tracking technology
- **No personal data** - We don't collect PII
- **GDPR compliant** - Respects user privacy
- **Anonymous analytics** - Track trends, not people

### 🌍 Country Tier Analysis
See traffic from tier 1, 2, or 3 countries. Track browsers, devices, and geographic distribution intelligently.

### 📊 Three Ways to View
1. **Web Dashboard** - Beautiful, intuitive interface
2. **Iframe Embed** - Embed anywhere on your site
3. **JSON API** - Programmatic access to your data

### 🤖 AI Weekly Review
Get intelligent insights on what's working and what to improve with weekly AI-powered analysis of your traffic patterns.

### 📤 Export Anywhere
Export data in **7+ formats**:
- CSV
- JSON
- XML
- Excel
- PHP Array
- HTML
- Plain Text

Your data, your way.

---

## 💪 Why Choose PhantomTrack?

| Feature | PhantomTrack | Google Analytics | Plausible | Fathom |
|---------|--------------|------------------|-----------|--------|
| No signup required | ✓ | ✗ | ✗ | ✗ |
| Setup time | 30 seconds | 15-30 minutes | 5-10 minutes | 5-10 minutes |
| Lifetime deal available | ✓ | ✗ | ✗ | ✗ |
| Suspicious traffic filtering | ✓ | ✓ | ✗ | ✗ |
| Country tier analysis | ✓ | ✗ | ✗ | ✗ |
| AI weekly insights | ✓ | ✗ | ✗ | ✗ |
| Custom events | ✓ | ✓ | ✓ | ✓ |
| API access | ✓ | ✓ | ✓ | ✓ |
| Iframe embed | ✓ | ✗ | ✗ | ✗ |
| Export formats | 7+ formats | Limited | CSV only | CSV only |
| DDoS protection | ✓ | ✓ | ✗ | ✗ |
| Free plan | 10k req/month | Unlimited* | Trial only | Trial only |
| Starting price | $3/month | Free* | $9/month | $14/month |
| UI complexity | Simple | Complex | Simple | Simple |
| Data ownership | ✓ | ✗ | ✓ | ✓ |

*Google Analytics is free but uses your data for ad targeting

---

## 🎯 Everything You Need

All plans include **every feature**. No gates, no limits on functionality.

### 👥 Unique Visitors
Track unique visitors and distinguish them from repeat visitors with intelligent fingerprinting.

### 📈 Page Views
Monitor total page views and time spent on your site with detailed metrics.

### 📅 Flexible Date Ranges
View data for today, last 7 days, last month, or last 3 months with beautiful graphs and pie charts.

### 🎯 Custom Events
Track custom events and button clicks with detailed counts and analytics. Perfect for conversions and user behavior.

### 🛡️ Attack Protection
Strong security against DDoS and basic attacks. Suspicious activity is blocked automatically to keep your data clean.

### 📊 Multi-Format Export
Export in CSV, JSON, XML, Excel, PHP array, HTML, or text format. Integrate with any tool.

---

## 💰 Simple, Transparent Pricing

All features included. 7-day money-back guarantee. Cancel anytime.

### Free - $0/month
Perfect for side projects
- 10,000 requests/month
- All features included
- Dashboard + iframe + API
- Country tier analysis
- Custom events tracking
- AI weekly review
- Export in all formats

### Pro - $3/month ⭐ MOST POPULAR
For growing projects
- 30,000 requests/month
- All features included
- Dashboard + iframe + API
- Country tier analysis
- Custom events tracking
- AI weekly review
- Export in all formats
- Priority support

### Premium - $5/month
For established sites
- 60,000 requests/month
- All features included
- Dashboard + iframe + API
- Country tier analysis
- Custom events tracking
- AI weekly review
- Export in all formats
- Priority support

### Enterprise - $8/month
For high-traffic sites
- 100,000 requests/month
- All features included
- Dashboard + iframe + API
- Country tier analysis
- Custom events tracking
- AI weekly review
- Export in all formats
- Priority support
- Dedicated assistance

### Lifetime - $20 one-time 🔥 LAUNCH SPECIAL
Limited time offer - Early adopter pricing
- **300,000 requests/month unlimited**
- All features included forever
- Dashboard + iframe + API
- Country tier analysis
- Custom events tracking
- AI weekly review
- Export in all formats
- Lifetime updates
- Priority support forever

> ⚠️ Price increases to $50 for 500k req/month after launch period

---

## ⚡ Quick Start

### 1. Generate Your Tracking ID
No signup required! Visit the website and instantly generate your unique tracking ID.

### 2. Add the Tracking Script
```html
<!-- Add this before closing </head> tag -->
<script src="https://phantomtrack.xyz/track.js?id=YOUR_TRACKING_ID"></script>
```

### 3. Start Tracking!
That's it! Your analytics are now live. View your dashboard at your unique URL.

---

## 🔧 Integration Examples

### HTML/Static Sites
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <!-- PhantomTrack -->
    <script src="https://phantomtrack.xyz/track.js?id=YOUR_TRACKING_ID"></script>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

### React/Next.js
```javascript
// _app.js or _document.js
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script 
          src="https://phantomtrack.xyz/track.js?id=YOUR_TRACKING_ID"
          async
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

### WordPress
```php
// Add to functions.php or use a plugin like "Insert Headers and Footers"
function add_phantomtrack() {
    ?>
    <script src="https://phantomtrack.xyz/track.js?id=YOUR_TRACKING_ID"></script>
    <?php
}
add_action('wp_head', 'add_phantomtrack');
```

### Vue.js
```javascript
// main.js or App.vue
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://phantomtrack.xyz/track.js?id=YOUR_TRACKING_ID';
    script.async = true;
    document.head.appendChild(script);
  }
}
```

### Angular
```typescript
// index.html
<head>
  <script src="https://phantomtrack.xyz/track.js?id=YOUR_TRACKING_ID"></script>
</head>
```

---

## 🎯 Custom Events Tracking

Track specific user actions like button clicks, form submissions, or any custom interaction.

### JavaScript
```javascript
// Track a custom event
window.phantomTrack('event', 'button_click', {
  button_name: 'signup_button',
  page: 'homepage'
});

// Track conversion
window.phantomTrack('event', 'purchase', {
  amount: 99.99,
  product: 'pro_plan'
});
```

### Button Click Example
```html
<button onclick="phantomTrack('event', 'cta_clicked', {location: 'header'})">
  Sign Up Now
</button>
```

### Form Submission
```javascript
document.getElementById('myForm').addEventListener('submit', function(e) {
  phantomTrack('event', 'form_submit', {
    form_name: 'contact_form'
  });
});
```

---

## 📊 API Access

Access your analytics data programmatically with the PhantomTrack API.

### Authentication
```bash
# Include your tracking ID in requests
curl "https://phantomtrack.xyz/analytics?id=YOUR_API_KEY"
```

### Get Analytics Data
```javascript
// Fetch analytics via API
const response = await fetch('https://phantomtrack.xyz/analytics?id=YOUR_API_KEY');
const data = await response.json();

console.log(data);
// {
//   "page_views": 1234,
//   "unique_visitors": 567,
//   "countries": {...},
//   "browsers": {...}
// }
```

### Python Example
```python
import requests

tracking_id = "YOUR_API_KEY"
url = f"https://phantomtrack.xyz/analytics?id={tracking_id}"

response = requests.get(url)
data = response.json()

print(f"Page Views: {data['page_views']}")
print(f"Unique Visitors: {data['unique_visitors']}")
```

### PHP Example
```php
<?php
$tracking_id = "YOUR_API_KEY";
$url = "https://phantomtrack.xyz/analytics?id=" . $tracking_id;

$response = file_get_contents($url);
$data = json_decode($response, true);

echo "Page Views: " . $data['page_views'];
echo "Unique Visitors: " . $data['unique_visitors'];
?>
```

---

## 🖼️ Embed Iframe

Display your analytics dashboard anywhere with a simple iframe.

```html
<iframe 
  src="https://phantomtrack.xyz/embed/YOUR_TRACKING_ID" 
  width="100%" 
  height="600" 
  frameborder="0"
  style="border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
></iframe>
```

### Responsive Iframe
```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="https://phantomtrack.xyz/embed/YOUR_TRACKING_ID"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
  ></iframe>
</div>
```

---

## 📤 Export Options

Export your data in multiple formats for analysis or reporting.

### Available Formats
- **CSV** - For Excel and spreadsheet tools
- **JSON** - For developers and APIs
- **XML** - For enterprise systems
- **Excel** - Direct .xlsx format
- **PHP Array** - For PHP applications
- **HTML** - For reports and presentations
- **Plain Text** - For simple viewing


---

## 🛡️ Security & Privacy

### What We Track
- ✅ Page views
- ✅ Unique visitors (fingerprint-based)
- ✅ Referrer sources
- ✅ Country/region
- ✅ Browser type
- ✅ Device type
- ✅ Custom events

### What We DON'T Track
- ❌ Personal information
- ❌ IP addresses (we hash them)
- ❌ Cookies
- ❌ Cross-site tracking
- ❌ User behavior across sites

### GDPR Compliance
PhantomTrack is fully GDPR compliant:
- No cookies = no cookie consent needed
- Anonymous tracking
- Data export available
- Easy data deletion
- Privacy by design

---

## 🤔 FAQ

### Do I need to create an account?
No! Generate a tracking ID instantly without any signup.

### Is it really free?
Yes! The free plan includes 10,000 requests/month with all features.

### How long is data retained?
Data is retained for 12 months on all plans.

### Can I use it on multiple sites?
Yes! Each site needs its own tracking ID, but you can generate unlimited IDs.

### What about bot traffic?
PhantomTrack automatically filters suspicious and bot traffic to keep your data clean.

### Can I upgrade/downgrade anytime?
Yes! Change your plan anytime with immediate effect.

### What happens if I exceed my limit?
Tracking stops until next billing cycle. Upgrade for continued tracking.

---

## 🚀 Tech Stack

- **Backend**: PHP
- **Database**: MySQL
- **Frontend**: HTML5, CSS3, JavaScript/HTMX
- **Charts**: Chart.js
- **API**: RESTful JSON API
- **Hosting**: High-performance servers
- **CDN**: Global content delivery
- **Security**: DDoS protection, rate limiting

---

## 📚 Documentation

### Getting Started
- [Overview](https://phantomtrack-docs.vercel.app/docs/index.html)
- [Quick Start Guide](https://phantomtrack-docs.vercel.app/docs/quickstart.html)

### Features
- [Custom Events](https://phantomtrack-docs.vercel.app/docs/custom-events.html)
- [Export Options](https://phantomtrack-docs.vercel.app/docs/export.html)
- [API Access](https://phantomtrack-docs.vercel.app/docs/api.html)
- [Embed Iframe](https://phantomtrack-docs.vercel.app/docs/iframe.html)

### API Documentation
- [Authentication](https://phantomtrack-docs.vercel.app/docs/authentication.html)
- [Endpoints](https://phantomtrack-docs.vercel.app/docs/endpoints.html)

### Help & Support
- [Get Support](https://phantomtrack-docs.vercel.app/docs/support.html)
- [Hire Me](https://phantomtrack-docs.vercel.app/docs/hire-me.html)

---

## 💼 Work With The Developer

**CodePhantom** - Full Stack Developer based in Nigeria 🇳🇬

### Services Offered
- **Web Development** - Full-stack applications with modern frameworks
- **Data Analysis** - Turn raw data into actionable insights
- **Backend Systems** - Robust APIs and scalable infrastructure

### Tech Stack
- PHP
- Python
- Golang

### Fun Fact
PhantomTrack was coded entirely on mobile! 📱 Yes, a mobile phone 😅 It's a long but interesting story.

📧 [Email](mailto: phantomdev17@gmail.com)  
🐦 [Twitter/X](https://x.com/PhantomDev001?t=v2Kv0JB4iERQJhh3aIw9Kg&s=09)  
💻 [GitHub](https://github.com/var-raphael)  
🌐 [Portfolio](https://phantom-portfolio.vercel.app/)

---


## 📄 License

Proprietary - All rights reserved

---

## 🙏 Support the Project

If PhantomTrack helps you understand your audience better:
- ⭐ Share with your developer friends
- 🐦 Tweet about it
- 💰 Grab the lifetime deal
- ☕ [Hire the developer](https://phantomtrack-docs.vercel.app/docs/hire-me.html)

---

**Built by CodePhantom | Coded entirely on mobile in Nigeria 🇳🇬**

*Track smarter, not harder.*
```

Sources:
- [PhantomTrack](https://phantomtrack-docs.vercel.app/)
- [Quick Start](https://phantomtrack-docs.vercel.app/docs)