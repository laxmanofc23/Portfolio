# 🚀 3D Developer Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.161-black?logo=threedotjs)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)]()

**An immersive 3D portfolio website showcasing modern web development with React, Three.js, and WebGL**

[View Demo](#-demo) • [Installation](#-getting-started) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 🌟 Overview

A next-generation portfolio website that leverages **Three.js** and **React Fiber** to create a stunning, interactive 3D experience. This project demonstrates modern web development practices with interactive 3D scenes, smooth animations, and responsive design that works seamlessly across all devices.

Perfect for developers looking to showcase their technical skills in an engaging, memorable way.

## ✨ Key Features

- **🎮 3D Interactivity**: Immersive 3D environments with interactive models and animations
- **📱 Responsive Design**: Mobile-first approach that adapts beautifully to all screen sizes
- **✨ Smooth Animations**: Fluid motion using Framer Motion and Three.js
- **⚡ Performance Optimized**: Fast loading and smooth 60fps animations with Vite
- **📧 Contact Integration**: Fully functional contact form powered by EmailJS
- **🎨 Modern UI/UX**: Clean, futuristic design with Tailwind CSS
- **📘 TypeScript Support**: Full type safety for better code quality
- **🔍 SEO Ready**: Optimized for search engines and social sharing

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **3D Rendering** | [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [Drei](https://github.com/pmndrs/drei) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Email Service** | [EmailJS](https://www.emailjs.com/) |
| **Code Quality** | [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (v7+) or **yarn** (v1.22+) - Comes with Node.js

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/reactjs18-3d-portfolio.git
cd reactjs18-3d-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (use `.env.example` as a template):

```bash
cp .env.example .env
```

Then add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_ACCESS_TOKEN=your_public_key_here
```

**Getting EmailJS Credentials:**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with hot reload |
| `npm run build` | Compile TypeScript and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run ts:check` | Run TypeScript compiler checks |

## 📂 Project Structure

```
reactjs18-3d-portfolio/
├── public/                 # Static assets (3D models, images)
│   ├── desktop_pc/        # 3D model files
│   ├── planet/            # 3D model files
│   └── logo.*             # Logo files
├── src/
│   ├── assets/            # Images, icons, and other media
│   ├── components/        # React components
│   │   ├── canvas/        # Three.js 3D scene components
│   │   ├── Contact.tsx    # Contact form component
│   │   ├── Navbar.tsx     # Navigation bar
│   │   └── ...            # Other reusable components
│   ├── constants/         # Static data and configuration
│   │   ├── index.ts       # App constants
│   │   └── ...
│   ├── hoc/               # Higher-Order Components
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions and utilities
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # React DOM render entry point
│   ├── globals.css        # Global styles
│   └── vite-env.d.ts      # Vite environment types
├── .env.example           # Environment variables template
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc.cjs        # Prettier configuration
├── eslintignore           # Files to ignore for linting
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── tailwind.config.cjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization

### Update Portfolio Content

Edit the content in `src/constants/index.ts` to add your own:
- Personal information
- Projects
- Skills
- Experience
- Social links

### Modify 3D Models

Replace 3D model files in the `public/` directory:
- Desktop PC model: `public/desktop_pc/`
- Planet model: `public/planet/`

### Customize Styling

Tailwind CSS configuration is in `tailwind.config.cjs`. Modify to match your brand:
- Colors
- Fonts
- Breakpoints

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/your-repo-name/',
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy"
   git push origin main
   ```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Fails with TypeScript Errors
```bash
npm run ts:check  # Check for type errors
npm run lint      # Check for linting issues
```

### 3D Models Not Loading
- Ensure model files exist in `public/desktop_pc/` and `public/planet/`
- Check browser console for loading errors
- Verify file paths in component imports

### EmailJS Not Working
- Verify `.env` variables are correctly set
- Check EmailJS account and service configuration
- Ensure email template ID matches your setup
- Test with browser console open to catch errors

## 📊 Performance

- **Lighthouse Score**: Optimized for Core Web Vitals
- **Bundle Size**: ~250KB (gzipped)
- **3D Performance**: 60 FPS on modern devices
- **Mobile**: Fully responsive and touch-enabled

## 📚 Documentation

### Useful Resources
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

### Learning Resources
- [Three.js Journey](https://threejs-journey.com/) - Comprehensive Three.js course
- [React Documentation](https://react.dev/) - Official React docs
- [WebGL Fundamentals](https://webglfundamentals.org/) - WebGL basics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the existing code structure
- Use TypeScript for type safety
- Run `npm run lint` before committing
- Use Prettier for code formatting

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D JavaScript library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer for Three.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- Community contributors and inspiration

## 📞 Support

If you have any questions or need help:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/yourusername/reactjs18-3d-portfolio/issues)
3. Create a new [GitHub Issue](https://github.com/yourusername/reactjs18-3d-portfolio/issues/new)

---

<div align="center">

**Made with ❤️ by [Your Name]**

[⬆ back to top](#-3d-developer-portfolio)

</div>
