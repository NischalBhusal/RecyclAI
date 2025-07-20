const BulkPickup = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-eco-green-700 mb-2">Bulk Drop/Pickup Booking</h2>
    <p className="text-gray-600 mb-4">Schedule a pickup for large recyclables. Partnered with local organizations!</p>
    <form className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Address</label>
        <input type="text" className="w-full border border-eco-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-eco-green-400" placeholder="123 Green St, Eco City" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Item Type</label>
        <select className="w-full border border-eco-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-eco-green-400">
          <option>Plastic</option>
          <option>Glass</option>
          <option>Metal</option>
          <option>Electronics</option>
          <option>Textiles</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
        <input type="date" className="w-full border border-eco-green-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-eco-green-400" />
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-eco-green-500 to-eco-green-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-2">Book Pickup</button>
    </form>
  </div>
)

export default BulkPickup;
