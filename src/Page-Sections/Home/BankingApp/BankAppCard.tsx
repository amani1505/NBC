import { motion } from 'framer-motion';
function BankAppCard() {
  const bg = "/images/kiganjani-bg.svg";
  return (
   <div
      className="h-[53vh] min-h-[400px] bg-nbc-dark-700 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex h-full">
        <div className="py-8 sm:py-12 md:py-16 lg:py-50 px-4 sm:px-8 md:px-12 lg:pl-80 pr-4 sm:pr-8 md:pr-12 lg:pr-50 flex flex-col justify-center h-full w-full">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-[700] mb-3 leading-tight">
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
                  <p className="text-sm ">Download on the</p>
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
         <div className="absolute bottom-0 right-0 md:block hidden">
            <img src="/images/kiganjani.png" alt="" className="w-full"/>
         </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BankAppCard;
