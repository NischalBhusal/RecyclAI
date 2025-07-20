import { Trophy, Gift, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface RewardsProps {
  userPoints: number
}

interface Badge {
  id: number
  name: string
  description: string
  icon: string
  earned: boolean
  progress?: number
  requirement?: number
}

interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  isCurrentUser?: boolean
}

const Rewards = ({ userPoints }: RewardsProps) => {
  const badges: Badge[] = [
    {
      id: 1,
      name: 'First Scan',
      description: 'Scanned your first item',
      icon: '🎯',
      earned: true
    },
    {
      id: 2,
      name: 'Eco Warrior',
      description: 'Scanned 50 items',
      icon: '🌱',
      earned: true
    },
    {
      id: 3,
      name: 'Recycling Pro',
      description: 'Scanned 100 items',
      icon: '♻️',
      earned: true,
      progress: 127,
      requirement: 100
    },
    {
      id: 4,
      name: 'Plastic Fighter',
      description: 'Recycled 25 plastic items',
      icon: '🥤',
      earned: false,
      progress: 18,
      requirement: 25
    },
    {
      id: 5,
      name: 'Green Champion',
      description: 'Earn 5000 points',
      icon: '🏆',
      earned: false,
      progress: userPoints,
      requirement: 5000
    },
    {
      id: 6,
      name: 'Streak Master',
      description: '7-day recycling streak',
      icon: '🔥',
      earned: false,
      progress: 3,
      requirement: 7
    }
  ]

  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'EcoSara', points: 8750 },
    { rank: 2, name: 'GreenMike', points: 7230 },
    { rank: 3, name: 'RecycleRay', points: 6890 },
    { rank: 4, name: 'PlanetPaul', points: 5640 },
    { rank: 5, name: 'EarthEmma', points: 4820 },
    // Current user would be inserted here based on their actual rank
    { rank: 156, name: 'You', points: userPoints, isCurrentUser: true },
  ]

  const rewards = [
    { points: 500, reward: '$5 Coffee Voucher', available: true },
    { points: 1000, reward: 'Eco-Friendly Water Bottle', available: true },
    { points: 2000, reward: '$20 Restaurant Credit', available: true },
    { points: 5000, reward: 'Premium Recycling Kit', available: false },
    { points: 10000, reward: 'Weekend Eco-Resort Stay', available: false }
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Rewards & Achievements</h2>
        <p className="text-gray-600">Track your progress and unlock amazing rewards</p>
      </motion.div>

      {/* Points Overview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-eco-green-500 to-eco-green-600 rounded-3xl p-6 text-white shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold mb-2">{userPoints.toLocaleString()}</div>
            <div className="text-eco-green-100">Total Points Earned</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">156th</div>
            <div className="text-eco-green-100">Global Rank</div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-eco-green-400">
          <div className="flex items-center justify-between text-sm">
            <span>Next reward at 5,000 pts</span>
            <span>{5000 - userPoints} points to go</span>
          </div>
          <div className="mt-2 bg-eco-green-400 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-500"
              style={{ width: `${(userPoints / 5000) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Badges Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-eco-green-200 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
          Achievements
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                badge.earned 
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-md' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="text-center">
                <div className={`text-3xl mb-2 ${badge.earned ? '' : 'grayscale opacity-50'}`}>
                  {badge.icon}
                </div>
                <div className={`font-semibold text-sm mb-1 ${
                  badge.earned ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {badge.name}
                </div>
                <div className={`text-xs ${
                  badge.earned ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {badge.description}
                </div>
                
                {!badge.earned && badge.progress !== undefined && badge.requirement && (
                  <div className="mt-2">
                    <div className="text-xs text-gray-500 mb-1">
                      {badge.progress}/{badge.requirement}
                    </div>
                    <div className="bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-eco-green-500 rounded-full h-1 transition-all duration-500"
                        style={{ width: `${Math.min((badge.progress / badge.requirement) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-eco-green-200 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Users className="w-6 h-6 text-sky-blue-600 mr-2" />
          Global Leaderboard
        </h3>
        
        <div className="space-y-3">
          {leaderboard.slice(0, 5).map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                entry.isCurrentUser 
                  ? 'bg-eco-green-100 border-2 border-eco-green-300' 
                  : 'bg-gray-50/50 hover:bg-gray-100/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  entry.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                  entry.rank === 2 ? 'bg-gray-300 text-gray-700' :
                  entry.rank === 3 ? 'bg-orange-400 text-orange-900' :
                  entry.isCurrentUser ? 'bg-eco-green-500 text-white' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {entry.rank <= 3 ? 
                    (entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉') 
                    : entry.rank
                  }
                </div>
                <div>
                  <div className={`font-medium ${entry.isCurrentUser ? 'text-eco-green-900' : 'text-gray-900'}`}>
                    {entry.name}
                  </div>
                  {entry.isCurrentUser && (
                    <div className="text-xs text-eco-green-600">That's you!</div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`font-semibold ${entry.isCurrentUser ? 'text-eco-green-700' : 'text-gray-700'}`}>
                  {entry.points.toLocaleString()}
                </span>
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
          
          {/* Show current user if not in top 5 */}
          {leaderboard.find(entry => entry.isCurrentUser && entry.rank > 5) && (
            <>
              <div className="text-center text-gray-400 text-sm py-2">...</div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-eco-green-100 border-2 border-eco-green-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-eco-green-500 text-white flex items-center justify-center font-bold text-sm">
                    156
                  </div>
                  <div>
                    <div className="font-medium text-eco-green-900">You</div>
                    <div className="text-xs text-eco-green-600">Keep going!</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-eco-green-700">{userPoints.toLocaleString()}</span>
                  <TrendingUp className="w-4 h-4 text-eco-green-500" />
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Available Rewards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-eco-green-200 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Gift className="w-6 h-6 text-purple-600 mr-2" />
          Redeem Rewards
        </h3>
        
        <div className="space-y-3">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                reward.available && userPoints >= reward.points
                  ? 'bg-eco-green-50 border-eco-green-300 hover:shadow-md'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  reward.available && userPoints >= reward.points
                    ? 'bg-eco-green-500 text-white'
                    : 'bg-gray-300 text-gray-500'
                }`}>
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-medium ${
                    reward.available && userPoints >= reward.points ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {reward.reward}
                  </div>
                  <div className="text-sm text-gray-600">{reward.points} points</div>
                </div>
              </div>
              
              <button
                disabled={!reward.available || userPoints < reward.points}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  reward.available && userPoints >= reward.points
                    ? 'bg-eco-green-500 text-white hover:bg-eco-green-600 hover:shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {userPoints >= reward.points ? 'Redeem' : 'Locked'}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Rewards
