import { motion } from 'framer-motion';
function TalktoUs() {
  return (
    <motion.div 
    key="talktous"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    
    className="space-y-6 animate-fade-in">
      {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="text-blue-600 w-6 h-6" />
        <h3 className="text-xl font-semibold text-gray-800">Start a Conversation</h3>
      </div>
      <p className="text-gray-600 mb-6">Our support team is ready to help you with any questions or concerns.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-medium text-gray-800 mb-2">Live Chat</h4>
          <p className="text-sm text-gray-600">Available 24/7 for immediate assistance</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-medium text-gray-800 mb-2">Schedule Call</h4>
          <p className="text-sm text-gray-600">Book a time that works for you</p>
        </div>
      </div>
    </div> */}

     <div className="grid grid-cols-3 gap-5">
     <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
        <h4 className="font-bold text-nbc-dark-700 mb-2 text-[24px] ">NBC Contact Centre</h4>
        <div className="flex justify-between gap-5">
<div>
<h4 className="font-bold text-nbc-dark-700 mb-2 text-[16px] ">TELEPHONE:</h4>
<div className="text-sm">
+255 (0) 768 984 000
+255 (0) 222 193 000
+255 (0) 225 511 000
0800711177 (Free)
</div>


</div>
<div>
<h4 className="font-bold text-nbc-dark-700 mb-2 text-[16px] uppercase">Address:</h4>

<div className="">
NBC Ltd. Head Office
Sokoine Drive & Azikiwe Street
P.O. Box 1863, Dar es Salaam, 
Tanzania
</div>
</div>

        </div>
    
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
        <h4 className="font-medium text-gray-800 mb-2">Schedule Call</h4>
        <p className="text-sm text-gray-600">Book a time that works for you</p>
      </div>
     </div>
    </motion.div>
  );
}

export default TalktoUs;
