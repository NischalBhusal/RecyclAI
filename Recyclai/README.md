# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# RecyclAI 🌱♻️

A modern, eco-friendly mobile-first web application that helps users identify recyclable items using AI image recognition. Built with React, TypeScript, and a beautiful nature-themed design that appeals to Gen Z and environmentally conscious users.

## ✨ Features

### 🔍 AI-Powered Scanner
- **Smart Recognition**: Point your camera or upload photos to identify recyclable items
- **Instant Results**: Get immediate feedback on recyclability with confidence scores
- **Detailed Instructions**: Learn exactly how to properly recycle each item
- **Points System**: Earn points for every scan and successful recycling action

### 🗺️ Interactive Map
- **Find Centers**: Locate nearby recycling centers and drop-off points
- **Live Filtering**: Filter by material type (plastic, glass, metal, electronics, etc.)
- **Detailed Info**: View hours, contact info, accepted materials, and ratings
- **Navigation**: Get directions to recycling facilities

### 🏆 Gamified Experience
- **Achievement System**: Unlock badges for milestones and consistent recycling
- **Global Leaderboard**: Compete with users worldwide
- **Reward Store**: Redeem points for eco-friendly products and experiences
- **Progress Tracking**: Monitor your environmental impact over time

### 📊 Clean Dashboard
- **Activity Overview**: Track your scanning history and recycling stats
- **Environmental Impact**: See your CO₂ savings and ecological contributions
- **Quick Actions**: Fast access to scanner and map features
- **Personal Stats**: View your rank, points, and recent achievements

## 🎨 Design Philosophy

### Nature-Themed Aesthetics
- **Color Palette**: Eco-greens, earthy browns, and sky blues
- **Modern Typography**: Clean Inter font family for excellent readability
- **Glassmorphism**: Subtle backdrop blur effects for a premium feel
- **Smooth Animations**: Framer Motion for delightful micro-interactions

### Mobile-First Approach
- **Responsive Design**: Optimized for mobile devices with desktop support
- **Touch-Friendly**: Large tap targets and intuitive gestures
- **Fast Loading**: Optimized performance for all device types
- **Offline Support**: Core features work without internet connection

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite for lightning-fast development
- **Styling**: Tailwind CSS with custom eco-friendly color system
- **Icons**: Lucide React and Heroicons for beautiful, consistent iconography
- **Animations**: Framer Motion for smooth, professional transitions
- **Maps**: Leaflet and React-Leaflet for interactive mapping
- **State Management**: React Hooks for simple, effective state handling

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd recyclai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📱 Usage

### Scanning Items
1. Tap the **"Quick Scan"** button on the dashboard
2. Allow camera permissions when prompted
3. Point your camera at the item you want to check
4. Wait for AI analysis (usually 2-3 seconds)
5. View the results and recycling instructions
6. Earn points for recyclable items!

### Finding Recycling Centers
1. Navigate to the **Map** tab
2. Use your location or search for a specific area
3. Filter by material type if needed
4. Tap on any center marker for detailed information
5. Use the **"Navigate"** button for turn-by-turn directions

### Tracking Progress
1. Visit the **Rewards** tab to see your achievements
2. Check the global leaderboard to see your ranking
3. Redeem points in the reward store
4. Share your progress on social media

## 🌍 Environmental Impact

RecyclAI helps users make a real environmental difference by:

- **Reducing Contamination**: Proper identification prevents non-recyclables from contaminating recycling streams
- **Increasing Participation**: Gamification encourages more people to recycle regularly
- **Education**: Users learn proper recycling practices and environmental awareness
- **Data Collection**: Anonymous usage data helps improve recycling infrastructure

## 🔮 Future Features

- **AR Scanner**: Augmented reality overlay for real-time item identification
- **Social Features**: Share achievements and create recycling challenges with friends
- **Carbon Footprint Tracker**: Detailed analytics on personal environmental impact
- **Local Partnerships**: Integration with local waste management and recycling programs
- **Voice Commands**: Hands-free scanning with voice-activated controls
- **Recycling Reminders**: Smart notifications based on user habits and local pickup schedules

## 🤝 Contributing

We welcome contributions from developers who share our passion for environmental sustainability! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/) and [Heroicons](https://heroicons.com/)
- Color inspiration from nature and sustainable design principles
- Built with love for our planet 🌍

---

**Made with ♻️ by the RecyclAI Team**

*Together, we can make recycling simple, fun, and rewarding for everyone.*

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
