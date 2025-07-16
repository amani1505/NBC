import { ArrowRight, HelpCircle } from "lucide-react"

function Faq() {
  return (
    <div className="space-y-6 animate-fade-in">
    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100">
      <div className="flex items-center gap-3 mb-4">
        <HelpCircle className="text-green-600 w-6 h-6" />
        <h3 className="text-xl font-semibold text-gray-800">Find Quick Answers</h3>
      </div>
      <p className="text-gray-600 mb-6">Browse through our most commonly asked questions and solutions.</p>
      <div className="space-y-3">
        {[
          "How do I reset my password?",
          "What payment methods do you accept?",
          "How can I track my order?",
          "What is your return policy?"
        ].map((question, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-gray-50 cursor-pointer group">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">{question}</h4>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Faq
