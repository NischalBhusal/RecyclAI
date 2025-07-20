const listings = [
  { item: "Glass Jars", desc: "Free for pickup, great for crafts!", user: "EcoSara" },
  { item: "Old Laptop", desc: "Works, just slow. Donate or reuse.", user: "GreenMike" },
  { item: "Clothes Bundle", desc: "Clean, gently used. Swap or donate.", user: "PlanetPaul" },
]

const CommunityBoard = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-eco-green-700 mb-2">Community Reuse Board</h2>
    <p className="text-gray-600 mb-4">List and discover reusable items in your area. Reduce waste, help others!</p>
    <ul className="space-y-4">
      {listings.map((listing, idx) => (
        <li key={idx} className="bg-sky-blue-50 border border-sky-blue-200 rounded-xl p-4 shadow-sm">
          <div className="font-semibold text-sky-blue-700">{listing.item}</div>
          <div className="text-gray-700 text-sm">{listing.desc}</div>
          <div className="text-xs text-gray-500 mt-1">Listed by {listing.user}</div>
        </li>
      ))}
    </ul>
  </div>
)

export default CommunityBoard;
