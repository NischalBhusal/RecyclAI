import { Home, Camera, MapPin, Trophy, BookOpen, Users, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

type NavigationView = 'dashboard' | 'scanner' | 'map' | 'rewards' | 'education' | 'community' | 'pickup';

interface NavigationProps {
  activeView: NavigationView;
  onViewChange: (view: NavigationView) => void;
}

const Navigation = ({ activeView, onViewChange }: NavigationProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'scanner', label: 'Scan', icon: Camera },
    { id: 'map', label: 'Map', icon: MapPin },
    { id: 'education', label: 'Learn', icon: BookOpen },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'pickup', label: 'Pickup', icon: Truck },
    { id: 'rewards', label: 'Rewards', icon: Trophy },
  ] as const

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-eco-green-200 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-around py-2 sm:py-3">
          {navItems.map((item) => {
            const isActive = activeView === item.id
            const Icon = item.icon
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl transition-all duration-300 transform active:scale-95 min-w-0 flex-1 max-w-20 ${
                  isActive 
                    ? 'text-eco-green-600 scale-105' 
                    : 'text-gray-500 hover:text-eco-green-500 hover:scale-102'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-eco-green-100 to-eco-green-200 rounded-2xl border border-eco-green-300"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                
                <div className="relative z-10 flex flex-col items-center">
                <div className={`relative transition-all duration-300 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 mb-1 transition-all duration-300 ${
                    isActive ? 'text-eco-green-600 drop-shadow-sm' : 'text-gray-400'
                  }`} />
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-eco-green-500 rounded-full border-2 border-white shadow-sm"
                    />
                  )}
                </div>
                  
                  <span className={`text-xs font-medium transition-all duration-300 text-center leading-tight ${
                    isActive ? 'font-bold text-eco-green-700' : ''
                  }`}>
                    {item.label}
                  </span>
                </div>

                {/* Special highlight for scanner button */}
                {item.id === 'scanner' && !isActive && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-eco-green-400 to-eco-green-500 rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Ripple effect on tap */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-eco-green-400 opacity-0 transition-opacity duration-150 ${
                    isActive ? 'active:opacity-10' : 'active:opacity-5'
                  }`} />
                </div>
              </button>
            )
          })}
        </div>
      </div>
      
      {/* Safe area for iPhone X and newer */}
      <div className="h-safe-area-inset-bottom bg-white/95"></div>
    </nav>
  )
}

export default Navigation
