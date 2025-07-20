import { useState } from 'react'
import { MapPin, Navigation, Clock, Phone, Star, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

interface RecyclingCenter {
  id: number
  name: string
  address: string
  distance: string
  rating: number
  hours: string
  phone: string
  accepts: string[]
  coordinates: [number, number]
}

const Map = () => {
  const [selectedCenter, setSelectedCenter] = useState<RecyclingCenter | null>(null)
  const [filterType, setFilterType] = useState<string>('all')

  const recyclingCenters: RecyclingCenter[] = [
    {
      id: 1,
      name: 'EcoRecycle Center',
      address: '123 Green Street, Eco City',
      distance: '0.8 mi',
      rating: 4.8,
      hours: 'Mon-Sat 8AM-6PM',
      phone: '(555) 123-4567',
      accepts: ['Plastic', 'Glass', 'Metal', 'Paper'],
      coordinates: [40.7128, -74.0060]
    },
    {
      id: 2,
      name: 'City Recycling Hub',
      address: '456 Sustainability Ave, Green District',
      distance: '1.2 mi',
      rating: 4.6,
      hours: 'Daily 7AM-8PM',
      phone: '(555) 987-6543',
      accepts: ['Electronics', 'Batteries', 'Plastic', 'Metal'],
      coordinates: [40.7589, -73.9851]
    },
    {
      id: 3,
      name: 'Planet Care Facility',
      address: '789 Earth Way, Environmental Park',
      distance: '2.1 mi',
      rating: 4.9,
      hours: 'Mon-Fri 9AM-5PM',
      phone: '(555) 456-7890',
      accepts: ['Hazardous', 'Glass', 'Paper', 'Textiles'],
      coordinates: [40.6892, -74.0445]
    }
  ]

  const acceptsCategories = ['Plastic', 'Glass', 'Metal', 'Paper', 'Electronics', 'Batteries', 'Hazardous', 'Textiles']

  const filteredCenters = filterType === 'all' 
    ? recyclingCenters 
    : recyclingCenters.filter(center => center.accepts.includes(filterType))

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Recycling Centers</h2>
        <p className="text-gray-600">Find nearby locations to drop off your recyclables</p>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-eco-green-200 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900">Filter by material:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              filterType === 'all'
                ? 'bg-eco-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Types
          </button>
          {acceptsCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterType(category)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterType === category
                  ? 'bg-eco-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-eco-green-200 shadow-lg"
      >
        <div className="relative h-64 bg-gradient-to-br from-eco-green-100 to-sky-blue-100 rounded-2xl overflow-hidden">
          {/* Mock map interface */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-eco-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Interactive Map</div>
              <div className="text-sm text-gray-600">Live location tracking</div>
            </div>
          </div>

          {/* Mock location pins */}
          {filteredCenters.map((center, index) => (
            <motion.button
              key={center.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedCenter(center)}
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                selectedCenter?.id === center.id
                  ? 'bg-eco-green-600 scale-125'
                  : 'bg-eco-green-500 hover:bg-eco-green-600'
              }`}
              style={{
                left: `${20 + index * 25}%`,
                top: `${30 + index * 15}%`
              }}
            >
              <MapPin className="w-4 h-4 text-white" />
            </motion.button>
          ))}
        </div>

        {/* Current location button */}
        <button className="mt-4 flex items-center space-x-2 bg-sky-blue-500 text-white px-4 py-2 rounded-xl hover:bg-sky-blue-600 transition-colors">
          <Navigation className="w-4 h-4" />
          <span className="text-sm font-medium">Use My Location</span>
        </button>
      </motion.div>

      {/* Centers List */}
      <div className="space-y-3">
        {filteredCenters.map((center, index) => (
          <motion.div
            key={center.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            onClick={() => setSelectedCenter(center)}
            className={`bg-white/70 backdrop-blur-md rounded-2xl p-4 border cursor-pointer transition-all duration-300 ${
              selectedCenter?.id === center.id
                ? 'border-eco-green-500 shadow-lg ring-2 ring-eco-green-200'
                : 'border-gray-200 shadow-sm hover:shadow-md hover:border-eco-green-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{center.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{center.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{center.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{center.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{center.phone}</span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-sm font-medium text-gray-900 mb-1">Accepts:</div>
                  <div className="flex flex-wrap gap-1">
                    {center.accepts.map((item) => (
                      <span
                        key={item}
                        className="bg-eco-green-100 text-eco-green-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right ml-4">
                <div className="text-lg font-semibold text-eco-green-600">{center.distance}</div>
                <button className="mt-2 bg-eco-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-eco-green-600 transition-colors">
                  Navigate
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-sky-blue-50 rounded-2xl p-4"
      >
        <h4 className="font-semibold text-sky-blue-900 mb-2">💡 Pro Tip</h4>
        <p className="text-sky-blue-700 text-sm">
          Call ahead to confirm accepted materials and current hours. Some centers may have 
          special requirements for certain items like electronics or hazardous materials.
        </p>
      </motion.div>
    </div>
  )
}

export default Map
