import { motion } from 'framer-motion';
function BankAppCard() {
  const bg = "/images/kiganjani-bg.svg";
  return (
    <div
      className="h-[53vh] bg-[#1c3073f8] relative"
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover", // Optional: Ensures image covers the div
        backgroundPosition: "center", // Optional: Centers the image
        backgroundRepeat: "no-repeat", // Optional: Prevents image repetition
      }}
    >
      <div className="flex h-full">
        <div className="py-50  pl-80  pr-50 flex flex-col justify-center  h-full  w-full">
        <h1 className="text-white text-[48px] font-[700] mb-3">
        Download NBC Kiganjani Now
            </h1>
          <div>
          
            <div className="flex gap-3">
              <div className="flex items-center border-2 border-white text-white rounded-lg px-4 py-1 gap-4">
                <div className="">
                  <img
                    src="/images/googleplay-white.svg"
                    alt=""
                    className="w-8"
                  />
                </div>
                <div className="">
                  <p className="uppercase text-sm">get it on</p>
                  <p className="capitalize font-[600]">google play</p>
                </div>
              </div>
              <div className="flex items-center border-2 border-white text-white rounded-lg px-4 py-1 gap-4">
                <div className="uppercase">
                  <img
                    src="/images/Applestore-white.svg"
                    alt=""
                    className="w-8"
                  />
                </div>
                <div className="">
                  <p className="text-sm">Download on the</p>
                  <p className="capitalize font-[600]">App store</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <motion.div 
         key="business"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.3 }}
        
        className=" w-full">
         <div className="absolute bottom-0 right-0">
            <img src="/images/kiganjani.svg" alt="" className="w-full"/>
         </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BankAppCard;
