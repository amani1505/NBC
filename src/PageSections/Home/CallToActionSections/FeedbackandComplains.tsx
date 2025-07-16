import { MessageSquare } from "lucide-react"

function FeedbackandComplains() {
  return (
    <div className="space-y-6 animate-fade-in">
    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
      <div className="flex items-center gap-3 mb-4">
        <MessageSquare className="text-orange-600 w-6 h-6" />
        <h3 className="text-xl font-semibold text-gray-800">Share Your Experience</h3>
      </div>
      <p className="text-gray-600 mb-6">Your feedback helps us improve our services and address any concerns.</p>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-medium text-gray-800 mb-2">Quick Feedback Form</h4>
          <p className="text-sm text-gray-600">Rate your experience and leave suggestions</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-medium text-gray-800 mb-2">Detailed Complaint</h4>
          <p className="text-sm text-gray-600">Report specific issues for resolution</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeedbackandComplains
