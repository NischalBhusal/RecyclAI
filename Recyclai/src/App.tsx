import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Scanner from './components/Scanner'
import Map from './components/Map'
import Rewards from './components/Rewards'
import Navigation from './components/Navigation'
import './App.css'

type ActiveView = 'dashboard' | 'scanner' | 'map' | 'rewards'
  | 'education' | 'community' | 'pickup'

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard')
  const [userPoints, setUserPoints] = useState(2450)

  // Prevent transition flashes on load
  useEffect(() => {
    document.body.classList.add('preload')
    const timer = setTimeout(() => {
      document.body.classList.remove('preload')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleScanComplete = (points: number) => {
    setUserPoints(prev => prev + points)
  }

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard userPoints={userPoints} />
      case 'scanner':
        return <Scanner onScanComplete={handleScanComplete} />
      case 'map':
        return <Map />
      case 'rewards':
        return <Rewards userPoints={userPoints} />
      case 'education':
        return <Education />
      case 'community':
        return <CommunityBoard />
      case 'pickup':
        return <BulkPickup />
      default:
        return <Dashboard userPoints={userPoints} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-green-50 via-sky-blue-50 to-earth-brown-50 overflow-x-hidden">
      {/* Background cityscape with mobile optimization */}
      <div className="fixed inset-0 bg-cityscape opacity-20 pointer-events-none" />
      
      {/* Main content with mobile-first design */}
      <div className="relative z-10 flex flex-col min-h-screen touch-pan-y">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-lg border-b border-eco-green-200 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <div className="w-14 h-14 bg-gradient-to-br from-eco-green-500 to-eco-green-700 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-active:scale-95">
                    <img 
                      src="/logo.png" 
                      alt="RecyclAI Logo" 
                      className="w-10 h-10 object-contain"
                    />
                    {/* Subtle green glow effect */}
                    <div className="absolute inset-0 bg-eco-green-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  {/* Interactive pulse ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-eco-green-500 opacity-0 group-hover:opacity-50 animate-ping"></div>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-eco-green-700 select-none">RecyclAI</h1>
              </div>
              <div className="flex items-center space-x-3">
                {/* Enhanced points display */}
                <div className="relative group cursor-pointer">
                  <div className="bg-gradient-to-r from-eco-green-100 to-eco-green-200 px-3 sm:px-4 py-2 rounded-full border border-eco-green-300 shadow-sm transform transition-all duration-200 group-hover:scale-105 group-active:scale-95">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-eco-green-500 rounded-full animate-pulse"></div>
                      <span className="text-eco-green-800 font-bold text-xs sm:text-sm">
                        {userPoints.toLocaleString()} pts
                      </span>
                    </div>
                  </div>
                  {/* Tooltip-style hover effect */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    Your eco points
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area with mobile padding */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-4 lg:px-8 py-4 sm:py-6 pb-20 sm:pb-24">
          {renderActiveView()}
        </main>

        {/* Bottom Navigation with enhanced mobile experience */}
        <Navigation activeView={activeView} onViewChange={setActiveView} />
      </div>
    </div>
  )
}

export default App
