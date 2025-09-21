# TechieCyber404 Hardware Store

A modern cybersecurity hardware e-commerce website with mobile-responsive design and cross-browser compatibility.

## Features

- 🛒 Shopping cart functionality with localStorage persistence
- 📱 Mobile-first responsive design
- 🔒 Secure order processing with EmailJS integration
- 💰 Cash on Delivery (COD) payment system
- 📧 Email notifications for order confirmations
- 🌐 Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- 📱 Mobile browser optimizations (iOS Safari, Android Chrome)

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Email Service**: EmailJS
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Unicode emojis for consistent display
- **Fonts**: Google Fonts (Orbitron, Audiowide)

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's a static website

## Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main/master branch

### Manual Deployment

You can also deploy to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Surge.sh

## File Structure

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── app.js              # JavaScript application logic
├── images/             # Product images
│   └── esp8266.jpeg
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment workflow
```

## Mobile Compatibility

- ✅ iOS Safari (viewport fixes, zoom prevention)
- ✅ Android Chrome (keyboard handling)
- ✅ Mobile responsive design
- ✅ Touch-friendly interface
- ✅ Cross-browser form validation

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Order Processing

Orders are processed using:
- EmailJS for email notifications
- LocalStorage for cart persistence
- Form validation for user input
- COD (Cash on Delivery) payment method

## Configuration

### EmailJS Setup

The website uses EmailJS for sending order confirmations. Configuration is in `index.html`:

```javascript
emailjs.init({
    publicKey: "9yqDcWHUqGlPw4mlH"
});
```

Service ID: `service_rqlka6t`
Template ID: `template_v825r0j`

## License

This project is for educational purposes.