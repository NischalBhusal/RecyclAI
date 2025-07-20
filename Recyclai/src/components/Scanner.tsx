import { useState, useRef } from 'react'
import { Camera, X, CheckCircle, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScannerProps {
  onScanComplete: (points: number) => void
}

interface ScanResult {
  item: string
  recyclable: boolean
  category: string
  points: number
  instructions: string
  confidence: number
}

const Scanner = ({ onScanComplete }: ScannerProps) => {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [showCamera, setShowCamera] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Mock scan results for demo
  const mockResults: ScanResult[] = [
    {
      item: 'Plastic Water Bottle',
      recyclable: true,
      category: 'Plastic #1 (PET)',
      points: 15,
      instructions: 'Remove cap and label. Rinse clean. Place in recycling bin.',
      confidence: 94
    },
    {
      item: 'Aluminum Can',
      recyclable: true,
      category: 'Aluminum',
      points: 20,
      instructions: 'Rinse clean. Can be recycled indefinitely.',
      confidence: 98
    },
    {
      item: 'Pizza Box',
      recyclable: false,
      category: 'Contaminated Cardboard',
      points: 5,
      instructions: 'Remove food residue. Only clean cardboard can be recycled.',
      confidence: 87
    }
  ]

  const handleScan = () => {
    setIsScanning(true)
    setShowCamera(true)
    
    // Simulate AI processing
    setTimeout(() => {
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)]
      setScanResult(randomResult)
      setIsScanning(false)
      setShowCamera(false)
      if (randomResult.recyclable) {
        onScanComplete(randomResult.points)
      }
    }, 3000)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleScan()
    }
  }

  const resetScan = () => {
    setScanResult(null)
    setShowCamera(false)
    setIsScanning(false)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Scanner</h2>
        <p className="text-gray-600">Point your camera at any item to check if it's recyclable</p>
      </motion.div>

      {/* Camera/Upload Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-eco-green-200 shadow-lg"
      >
        {!showCamera && !scanResult && (
          <div className="text-center space-y-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-eco-green-100 to-sky-blue-100 rounded-full flex items-center justify-center">
              <Camera className="w-16 h-16 text-eco-green-600" />
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleScan}
                className="w-full bg-gradient-to-r from-eco-green-500 to-eco-green-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Camera Scan
              </button>
              
              <div className="text-gray-500">or</div>
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-eco-green-300 text-eco-green-600 py-4 px-6 rounded-2xl font-semibold hover:bg-eco-green-50 transition-colors"
              >
                Upload Photo
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        )}

        {/* Scanning Animation */}
        {isScanning && (
          <div className="text-center space-y-6">
            <div className="relative w-64 h-64 mx-auto">
              <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-eco-green-400/20 to-sky-blue-400/20 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-white/70" />
                </div>
                
                {/* Scanning line animation */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-eco-green-400 to-transparent"
                  animate={{ y: [0, 256, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-lg font-semibold text-gray-900">Analyzing...</div>
              <div className="text-gray-600">AI is identifying your item</div>
              <div className="flex justify-center space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-eco-green-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scan Results */}
        <AnimatePresence>
          {scanResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Result Header */}
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  scanResult.recyclable ? 'bg-eco-green-100' : 'bg-red-100'
                }`}>
                  {scanResult.recyclable ? (
                    <CheckCircle className="w-10 h-10 text-eco-green-600" />
                  ) : (
                    <X className="w-10 h-10 text-red-600" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{scanResult.item}</h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  scanResult.recyclable 
                    ? 'bg-eco-green-100 text-eco-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {scanResult.recyclable ? '♻️ Recyclable' : '❌ Not Recyclable'}
                </div>
              </div>

              {/* Result Details */}
              <div className="space-y-4">
                <div className="bg-gray-50/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Category</span>
                    <span className="text-gray-600">{scanResult.category}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Confidence</span>
                    <span className="text-gray-600">{scanResult.confidence}%</span>
                  </div>
                  {scanResult.recyclable && (
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Points Earned</span>
                      <span className="text-eco-green-600 font-semibold">+{scanResult.points}</span>
                    </div>
                  )}
                </div>

                <div className="bg-sky-blue-50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-sky-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sky-blue-900 mb-1">Instructions</div>
                      <div className="text-sky-blue-700 text-sm">{scanResult.instructions}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={resetScan}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Scan Another
                </button>
                <button className="flex-1 bg-gradient-to-r from-eco-green-500 to-eco-green-600 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Find Recycling Center
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-sm"
      >
        <h4 className="font-semibold text-gray-900 mb-3">Quick Tips</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-eco-green-500">•</span>
            <span>Ensure good lighting for better recognition</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-eco-green-500">•</span>
            <span>Hold the camera steady and focus on the item</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-eco-green-500">•</span>
            <span>Look for recycling symbols or codes on packaging</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Scanner
