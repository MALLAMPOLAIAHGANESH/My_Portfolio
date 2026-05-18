# 🌌 Premium 3D Neon Portfolio Dashboard

A stunning, premium 3D interactive portfolio landing page built using HTML, CSS, and modern JavaScript with GPU-accelerated **Three.js WebGL** visual effects.

🔗 **Live Deployment Link:** https://my-portfolio-mu-six-36.vercel.app/

---

## ✨ Features

- **🛸 GPU-Accelerated 3D Neon Cursor**: Powered by a custom `threejs-components` module. Renders vibrant neon ribbon/tube trails that follow mouse movements with custom inertia and smooth lag physics.
- **🎨 Interactive Color Swapping**: Click anywhere on the screen to dynamically rotate through vibrant, randomized HSL colors for both the neon tube meshes and reactive point lights.
- **📱 Responsive & Fluid Mobile Layout**: Automatic screen-size prediction. Smooth native scrolling on smaller screens (iPhone, Android, and tablets) with optimized grid stacking (Projects and Skills) to prevent horizontal overflow.
- **🎛️ Multi-Slide Navigation**: Elegant snapping desktop navigation system with reactive sidebar indicator dots, mobile touch-swipe support, and keyboard arrows (`Up` / `Down`) support.
- **💎 Premium Glassmorphism UI**: Beautiful semi-transparent frosted-glass content sections with subtle neon box shadows and interactive zoom transitions.
- **🔄 Auto-Deployment Pipeline**: Built-in GitHub Actions CI/CD pipeline (`.github/workflows/deploy.yml`) that automatically builds and deploys your site to GitHub Pages on every single push.

---

## 🛠️ Built With

- **HTML5** & **CSS3** (with Custom Variables & Flexbox/Grid systems)
- **JavaScript (ES6 Modules)**
- **Three.js** (WebGL 3D Rendering Framework via CDN)
- **Threejs-Components** (`TubesCursor` dynamic interactive cursor)
- **GitHub Actions** (CI/CD Automated Deployment)

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml     # Automated GitHub Pages CI/CD workflow
├── index.html             # Main portfolio layout (HTML5 Structure)
├── style.css              # Premium responsive Glassmorphism styling
├── script.js              # Three.js cursor & slide navigation logic
├── m1.jpg                 # Profile headshot image
├── push.bat               # Easy one-click git staging, committing & force-push script
└── README.md              # Documentation (This file!)
```

---

## 💻 Local Setup & Development

To run the project locally and bypass standard browser security rules for ES6 Modules:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MALLAMPOLAIAHGANESH/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Start a local HTTP server:**
   - **Using Python:**
     ```bash
     python -m http.server 8000
     ```
   - **Using Node.js:**
     ```bash
     npx http-server -p 8000
     ```

3. Open **`http://localhost:8000`** in your browser!

---

## 🚀 One-Click Deployment to GitHub

When you make changes to your codebase locally, simply double-click the **`push.bat`** file in your project directory. 

The script will automatically:
1. Stage all changes (`git add .`)
2. Commit them under the message `"pushed"`
3. Force-push to GitHub (`git push -u origin main --force`)
4. Trigger the GitHub Actions deployment pipeline to update the live site instantly!

---

License: CC BY-NC-SA 4.0 (Attribution - Non-Commercial - ShareAlike)
Created by **[Mallam Polaiah Ganesh](https://github.com/MALLAMPOLAIAHGANESH)**.
