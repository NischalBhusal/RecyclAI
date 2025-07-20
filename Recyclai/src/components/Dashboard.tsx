import { Camera, MapPin, Award, TrendingUp, Recycle, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

interface DashboardProps {
  userPoints: number
}

const Dashboard = ({ userPoints }: DashboardProps) => {
  const stats = [
    { label: 'Items Scanned', value: '127', icon: Camera, color: 'text-eco-green-600' },
    { label: 'CO₂ Saved', value: '45kg', icon: Leaf, color: 'text-sky-blue-600' },
    { label: 'Centers Found', value: '23', icon: MapPin, color: 'text-earth-brown-600' },
    { label: 'Rank', value: '#156', icon: Award, color: 'text-eco-green-600' },
  ]

  const recentActivities = [
    { type: 'scan', item: 'Plastic Bottle', points: 10, time: '2 mins ago' },
    { type: 'recycle', item: 'Aluminum Can', points: 15, time: '1 hour ago' },
    { type: 'achievement', item: 'Eco Warrior Badge', points: 50, time: '3 hours ago' },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-eco-green-200 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back! 👋</h2>
            <p className="text-gray-600">Ready to make a difference today?</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-eco-green-600">
              {userPoints.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Total Points</div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4"
      >
        <button className="bg-gradient-to-r from-eco-green-500 to-eco-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Camera className="w-8 h-8 mb-3" />
          <div className="text-left">
            <div className="font-semibold text-lg">Quick Scan</div>
            <div className="text-sm opacity-90">Identify recyclables</div>
          </div>
        </button>
        
        <button className="bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <MapPin className="w-8 h-8 mb-3" />
          <div className="text-left">
            <div className="font-semibold text-lg">Find Centers</div>
            <div className="text-sm opacity-90">Nearby locations</div>
          </div>
        </button>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <TrendingUp className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-gray-200 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Recycle className="w-6 h-6 text-eco-green-600 mr-2" />
          Recent Activity
        </h3>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'scan' ? 'bg-eco-green-100' :
                  activity.type === 'recycle' ? 'bg-sky-blue-100' : 'bg-yellow-100'
                }`}>
                  {activity.type === 'scan' ? '📷' : 
                   activity.type === 'recycle' ? '♻️' : '🏆'}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{activity.item}</div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              </div>
              <div className="text-eco-green-600 font-semibold">
                +{activity.points} pts
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
