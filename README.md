# Personal Portfolio Website

A minimalist, sleek personal portfolio website built with React and Vite. Features modern typography, smooth animations, and a refined aesthetic.

## ✨ Features

- **Minimalist Design**: Clean, uncluttered layout with plenty of whitespace
- **Modern Typography**: Carefully selected fonts (Playfair Display, Inter, Space Grotesk)
- **Smooth Animations**: Subtle microinteractions using Framer Motion
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support

## 🚀 Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Name, title, and description
- `src/components/About.jsx` - About text, skills, and statistics
- `src/components/Projects.jsx` - Your projects and portfolio items
- `src/components/Contact.jsx` - Contact information and social links
- `src/components/Footer.jsx` - Footer content and links

### Colors and Styling

- `src/index.css` - CSS custom properties for colors and spacing
- Component-specific CSS files for detailed styling adjustments

### Typography

Fonts are loaded from Google Fonts in `index.html`. Current fonts:

- **Playfair Display** - Headings and display text
- **Inter** - Body text and paragraphs
- **Space Grotesk** - UI elements and buttons

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx/css    # Fixed navigation bar
│   ├── Hero.jsx/css         # Hero section with intro
│   ├── About.jsx/css        # About section with skills
│   ├── Projects.jsx/css     # Portfolio/projects showcase
│   ├── Contact.jsx/css      # Contact form and info
│   └── Footer.jsx/css       # Footer with links
├── App.jsx/css              # Main app component
├── main.jsx                 # React entry point
└── index.css                # Global styles and design system
```

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with custom properties
- **Google Fonts** - Typography

## 📱 Responsive Breakpoints

- Mobile: `< 480px`
- Tablet: `480px - 768px`
- Desktop: `> 768px`
- Large Desktop: `> 1200px`

## 🎯 Performance Features

- Preloaded fonts for faster rendering
- Optimized animations with `will-change`
- Responsive images and lazy loading
- Minimized bundle size with tree shaking
- Reduced motion support for accessibility

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
