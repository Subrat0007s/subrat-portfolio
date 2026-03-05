# Subrat Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and professional experience with advanced animations and mobile-optimized design.

## 🚀 Live Demo

**View the live portfolio:** [https://subrat-portfollio.vercel.app/](https://subrat-portfollio.vercel.app/)

## 📸 Preview

[![Portfolio Preview](/screenshots/homepage-1.jpeg)](https://subrat-portfollio.vercel.app/)

## ✨ Features

### 🎨 **Design & User Experience**

- **Fully Responsive**: Perfectly optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with React Bootstrap and custom styling
- **Dark Theme**: Elegant dark color scheme with purple accent colors
- **Consistent Typography**: Unified font sizes across all pages for professional appearance
- **Smooth Animations**: Fade-in transitions and micro-interactions throughout

### 🌟 **Interactive Elements**

- **Dynamic Sky Background**: Animated day/night cycle with sun, moon, and custom GIF clouds
- **Particle Effects**: Beautiful particle animations using tsparticles
- **3D Parallax Tilt**: Interactive card hover effects with depth perception
- **Typewriter Effect**: Dynamic text animation for engaging introductions
- **GitHub Calendar**: Interactive contribution graph showcasing coding activity

### 📱 **Mobile Optimization**

- **Custom Mobile CSS**: Dedicated mobile-responsive stylesheet
- **Touch-Friendly Navigation**: Optimized hamburger menu with smooth cross animation
- **Readable Mobile UI**: White text on dark backgrounds for perfect contrast
- **No Horizontal Overflow**: Content fits perfectly within viewport on all devices
- **Proper Menu Positioning**: Dropdown menus fully visible without scrolling

### 🧭 **Navigation & Routing**

- **Single URL**: Clean URL structure that stays at root (`/`) for all pages
- **State-Based Navigation**: Smooth page transitions without URL changes
- **Active State Indicators**: Clear visual feedback for current page
- **Sticky Navigation**: Navbar with dynamic color changes on scroll

### 📄 **Content Sections**

- **Home**: Hero section with animated introduction
- **About**: Professional background and skills overview
- **Projects**: Showcase of portfolio projects with detailed descriptions
- **Resume**: Interactive resume with PDF viewing capability
- **Contact**: Contact form and social media links
- **Blog**: Personal blog section (if applicable)

## 🛠️ Tech Stack

### Frontend Framework

- **React 18** - Modern UI framework with hooks
- **Vite** - Lightning-fast build tool and development server
- **JavaScript ES6+** - Modern JavaScript features

### UI & Styling

- **React Bootstrap 5** - Responsive UI component library
- **Custom CSS** - Tailored styling with mobile-first approach
- **CSS Animations** - Custom keyframe animations and transitions
- **Google Fonts** - Custom typography (Cutive Mono, Monoton)

### Routing & State Management

- **Custom State Routing** - URL-agnostic navigation system
- **React Hooks** - useState, useEffect for state management
- **Browser History API** - Smooth navigation without URL changes

### Animations & Effects

- **React TSParticles** - Interactive particle background
- **React Parallax Tilt** - 3D hover effects on cards
- **Typewriter Effect** - Dynamic text animation
- **React GitHub Calendar** - Contribution graph visualization
- **Custom GIF Animations** - Animated cloud elements

### Icons & Assets

- **React Icons** - Comprehensive icon library
- **Custom GIF Clouds** - Animated weather elements
- **Optimized Images** - Compressed assets for performance

## 📱 Mobile Features

### Responsive Breakpoints

- **Desktop**: 769px and above
- **Tablet**: 576px - 768px
- **Mobile**: Below 576px
- **Extra Small**: Below 380px

### Mobile Optimizations

- **Hamburger Menu**: Animated three-bar menu with smooth cross transition
- **Touch Targets**: Larger tap areas for better mobile interaction
- **Readable Text**: High contrast white text on dark backgrounds
- **Smooth Scrolling**: Optimized scroll behavior and performance
- **No Zoom Required**: Content fits perfectly without manual zooming

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/Subrat0007s/subrat-portfolio.git
cd subrat-portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm run dev
```

4. **Build for production:**

```bash
npm run build
```

5. **Preview production build:**

```bash
npm run preview
```

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy your site

### Manual Deployment

1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure server for single-page application routing

## 📁 Project Structure

```
subrat-portfolio/
├── public/                 # Static assets
│   ├── cloud.gif          # Custom animated cloud
│   ├── screenshots/       # Project screenshots
│   └── Subrat_Resume.pdf   # Resume PDF
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── StarrySky.jsx  # Animated background
│   │   ├── Home/          # Home page components
│   │   ├── About/         # About page components
│   │   ├── Projects/      # Project components
│   │   ├── Resume/        # Resume components
│   │   └── Contact/       # Contact components
│   ├── style.css          # Main stylesheet
│   ├── mobile-responsive.css # Mobile-specific styles
│   ├── fixes.css          # Bug fixes and improvements
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── dist/                  # Build output
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Customization Guide

### Adding New Projects

1. Navigate to `src/components/Projects/`
2. Add your project data to the projects array
3. Include project images in `public/assets/`
4. Update project descriptions and technologies

### Modifying Colors

- **Primary Purple**: `#be50f4` (accent color)
- **Background Dark**: `#181a27` (main background)
- **Text White**: `#ffffff` (primary text)
- Update colors in `src/style.css` and `src/mobile-responsive.css`

### Custom Animations

- Modify keyframes in `src/style.css`
- Adjust animation durations and delays
- Add new animations to `src/components/StarrySky.jsx`

### Mobile Customization

- Edit `src/mobile-responsive.css` for mobile-specific styles
- Adjust breakpoints and responsive behaviors
- Modify hamburger menu animations

## 🔧 Recent Improvements

### ✅ **Bug Fixes & Optimizations**

- **Navbar Color**: Fixed text color to white when scrolling
- **Font Consistency**: Standardized font sizes across all pages
- **URL Management**: Implemented single URL routing (stays at `/`)
- **Mobile Menu**: Enhanced hamburger menu with smooth animations
- **Content Overflow**: Fixed horizontal scrolling issues on mobile

### 🎨 **Visual Enhancements**

- **Custom Clouds**: Replaced emoji clouds with animated GIF
- **Smooth Transitions**: Added fade-in animations for page changes
- **Active States**: Improved navigation highlighting
- **Responsive Design**: Perfect mobile layout without zooming

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Test mobile responsiveness for new features
- Update documentation for significant changes
- Ensure all animations work smoothly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Portfolio**: https://subrat-portfollio.vercel.app/
- **Email**: subratmantry2@gmail.com
- **GitHub**: https://github.com/Subrat0007s

---

⭐ **If you find this portfolio template helpful, please consider giving it a star!**

🚀 **Built with ❤️ using React, Vite, and modern web technologies**
