# LUXE Barber Shop - Nairobi

A modern, responsive barber shop website built with HTML5, CSS3, and vanilla JavaScript. Features a complete booking system, dark mode support, and smooth animations.

## Project Overview

This project is a professional barber shop website for LUXE Barber Shop located in Westlands, Nairobi. It showcases services, client testimonials, and provides an interactive booking system.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Interactive Booking System**: Complete appointment booking with Google Calendar integration
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Service Showcase**: Detailed service listings with pricing and durations
- **Client Gallery**: Before/after transformations with hover effects
- **Testimonials**: Client reviews with star ratings
- **Contact Information**: Location, hours, and contact details with embedded map
- **Newsletter Signup**: Email subscription for exclusive offers

## Project Structure

```
Barber Shop/
├── barber_salon.html          # Main HTML file
├── README.md                  # This file
├── CSS/
│   └── style.css             # Complete styling with dark mode support
├── JS/
│   └── script.js             # Interactive functionality
└── IMG/
    └── luxe.png              # Logo/favicon
```

## Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Font Awesome**: Icon library
- **Google Fonts**: Playfair Display and Plus Jakarta Sans

## Key Features Explained

### 1. Booking System
- Complete form with validation
- Google Calendar integration
- SMS/email confirmation (demo)
- Date picker with minimum date restriction

### 2. Dark Mode
- Toggle button in top navigation
- Theme persistence via localStorage
- Smooth transitions between themes

### 3. Animations
- Scroll-triggered animations using Intersection Observer
- Staggered entrance animations
- Smooth scrolling for anchor links

### 4. Responsive Design
- Mobile-first approach
- Breakpoints at 900px
- Touch-friendly interactions

## Setup Instructions

1. **Clone or download** the project files
2. **Open** `barber_salon.html` in your web browser
3. **No additional setup required** - the project is self-contained

### Running Locally

The project can be run directly from the file system or served via a local web server:

```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js with http-server
npx http-server -p 8000
```

Then open `http://localhost:8000/barber_salon.html` in your browser.

## Customization

### Colors
The color scheme is defined in CSS custom properties in `CSS/style.css`:

```css
:root {
    --rich-red: #8b2e2e;
    --deep-brown: #4a2c1d;
    --warm-gold: #c9a13b;
    --soft-gold: #e4c580;
    --cream: #fdf7f0;
    --off-white: #fff9f2;
    --charcoal: #2b2b2b;
    --taupe: #a68a73;
}
```

### Services
To modify services, edit the HTML in the services section of `barber_salon.html` and update the booking form options in the JavaScript.

### Contact Information
Update the contact details in the HTML header and footer sections.

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support

## Performance Optimizations

- CSS Grid and Flexbox for efficient layouts
- Lazy loading for images
- Optimized animations with GPU acceleration
- Minified CSS (can be further optimized)

## Future Enhancements

- Backend integration for real bookings
- Payment processing
- Appointment management dashboard
- Social media integration
- Multi-language support
- Advanced analytics

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Support

For support or questions, please refer to the project documentation or open an issue in the repository.