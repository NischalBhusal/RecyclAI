const tips = [
  { tip: "Did you know? Rinsing containers before recycling prevents contamination!" },
  { tip: "Eco Challenge: Try a zero-waste day and share your experience!" },
  { tip: "Myth: All plastics are recyclable. Fact: Only some types are accepted locally." },
  { tip: "Fact: Recycling one aluminum can saves enough energy to run a TV for 3 hours." },
]

const Education = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-eco-green-700 mb-2">Education Hub</h2>
    <p className="text-gray-600 mb-4">Daily tips, eco challenges, and recycling facts to help you become an eco hero!</p>
    <ul className="space-y-4">
      {tips.map((item, idx) => (
        <li key={idx} className="bg-eco-green-50 border border-eco-green-200 rounded-xl p-4 shadow-sm">
          <span className="text-eco-green-800 font-medium">{item.tip}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default Education;
