# 🚀 3D Developer Portfolio

> An immersive 3D portfolio website built with React, Three.js, and Tailwind CSS.

## 🌟 Overview

Welcome to the next generation of portfolio websites. This project leverages the power of **Three.js** and **React Fiber** to create a stunning, interactive 3D experience. It showcases skills, projects, and experience in a way that engages visitors and demonstrates technical prowess.

## ✨ Key Features

*   **3D Interactivity**: Explore a 3D environment with interactive elements.
*   **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices.
*   **Modern UI/UX**: Clean, futuristic interface powered by Tailwind CSS.
*   **Performance Optimized**: Smooth animations and fast loading times using Vite.
*   **Contact Integration**: Functional contact form using EmailJS.

## 🛠️ Tech Stack

*   **Core**: [React 18](https://react.dev/)
*   **3D Engine**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v16 or higher)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd reactjs18-3d-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_ACCESS_TOKEN=your_public_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code quality |

## 📂 Project Structure

```
src/
├── assets/        # Static assets (images, icons)
├── components/    # Reusable React components
│   ├── canvas/    # 3D scenes and models
│   └── ...
├── constants/     # Configuration and static data
├── hoc/           # Higher-Order Components
└── utils/         # Helper functions
```

## 📄 License

This project is licensed under the MIT License.
