# Dr. Serena Blake - Clinical Psychologist Website

A professional, responsive website for Dr. Serena Blake, a licensed clinical psychologist based in Los Angeles, CA. Built with Next.js 14 and Tailwind CSS following modern web standards and therapist website design best practices.

## 🌟 Features

- **Professional Design**: Clean, calming design suitable for mental health professionals
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Hero Section**: Compelling introduction with "Book a Free Consult" button
- **About Section**: Dr. Blake's background, experience, and office hours
- **Services Section**: Three main specialties with detailed descriptions
- **Session Fees**: Transparent pricing for individual and couples sessions
- **FAQ Section**: Common questions and answers about therapy services
- **Contact Form**: Complete contact form with all required fields
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Professional Typography**: Custom fonts (Inter + Crimson Text) for readability
- **Accessibility**: Focus states, proper ARIA labels, and keyboard navigation

## 🏥 Therapist Information

**Dr. Serena Blake, PsyD**
- **Profession**: Licensed Clinical Psychologist
- **Experience**: 8 years, 500+ sessions
- **Location**: 1287 Maplewood Drive, Los Angeles, CA 90026
- **Phone**: (323) 555-0192
- **Email**: serena@blakepsychology.com

### Office Hours
- **In-person**: Tuesday & Thursday, 10 AM–6 PM
- **Virtual (Zoom)**: Monday, Wednesday & Friday, 1 PM–5 PM

### Specialties
1. Anxiety & Stress Management
2. Relationship Counseling
3. Trauma Recovery

### Session Fees
- Individual sessions: $200
- Couples sessions: $240

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Crimson Text)
- **Icons**: Heroicons (via SVG)
- **Deployment**: Vercel-ready

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dr-serena-blake-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import your repository to Vercel
   - Vercel will automatically detect Next.js and configure build settings

2. **Environment Variables** (if needed)
   - No environment variables required for this static site

3. **Deploy**
   - Push to main branch for automatic deployment
   - Custom domain can be configured in Vercel dashboard

### Other Platforms

The website is a static Next.js application and can be deployed to:
- Netlify
- Vercel
- AWS Amplify
- GitHub Pages (with static export)

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger navigation menu for mobile devices
- Responsive grid layouts
- Touch-friendly button sizes
- Optimized font sizes for all screen sizes

## 🎨 Design Features

### Color Scheme
- **Primary Green**: Professional, calming therapy theme
- **Accent Amber**: Warm, welcoming secondary color
- **Neutral Grays**: Clean, readable text colors
- **Background**: Light, airy feel with subtle gradients

### Typography
- **Headings**: Crimson Text (serif) for professional authority
- **Body Text**: Inter (sans-serif) for excellent readability
- **Proper hierarchy**: Clear visual distinction between content levels

### Components
- Custom button styles (`btn-primary`, `btn-secondary`)
- Card shadows for visual depth
- Consistent spacing with utility classes
- Smooth hover transitions

## 🔗 Important Links

- **Free Consultation Form**: Links to Google Form as specified
- **Contact Information**: All contact details prominently displayed
- **Navigation**: Smooth scrolling to all sections
- **External Links**: Proper `target="_blank"` and `rel="noopener noreferrer"`

## 📋 Content Sections

1. **Navigation**: Sticky header with logo and menu
2. **Hero**: Main introduction with call-to-action buttons
3. **About**: Dr. Blake's background and office information
4. **Services**: Three main therapy specialties
5. **Fees**: Transparent pricing information
6. **FAQ**: Three common questions with answers
7. **Contact**: Contact form and information
8. **Footer**: Professional footer with copyright

## 🛠️ Customization

### Changing Colors
Edit the CSS variables in `globals.css`:
```css
:root {
  --primary: #4a6741;
  --accent: #d4a574;
  /* etc. */
}
```

### Updating Content
All content is in `src/app/page.tsx` and can be easily modified.

### Adding New Sections
Follow the existing pattern with:
- Semantic HTML structure
- Consistent CSS classes
- Responsive design principles

## 📞 Contact Form

The contact form includes all required fields:
- Name (required)
- Phone
- Email (required)
- Preferred Contact Time (dropdown)
- Message (required)

**Note**: Form submission needs backend integration or service like Formspree, Netlify Forms, or similar.

## 🔒 Privacy & Security

- No user tracking or analytics included
- HTTPS ready for secure connections
- Professional therapist website standards followed
- Contact information properly displayed

## 📝 License

This website is created specifically for Dr. Serena Blake's psychology practice. All content and design elements are proprietary.

## 🤝 Support

For technical support or modifications, please contact the development team.

---

**Built with ❤️ using Next.js 14 and Tailwind CSS**
