import { ModalContext } from "@/Context/ModalContext";
import { useModal } from "@/hooks/useModal";
import { useContext, useEffect } from "react";

function Modal  () {
    const { isOpen, closeModal, modalTitle } = useModal();
    const modalContent = useContext(ModalContext)?.modalContent;
  
    // Prevent background scroll when modal is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen]);
  
    if (!isOpen && !modalContent) return null;
  
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 w-full ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={modalTitle ? "modal-title" : undefined}
      >
        {/* Backdrop with blur effect */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        />
        
        {/* Modal Content */}
        <div
          className={`relative bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 w-auto  max-h-[100vh] overflow-hidden transform transition-all duration-500 ease-out ${
            isOpen 
              ? 'translate-y-0 scale-100 rotate-0' 
              : 'translate-y-12 scale-90 rotate-3'
          }`}
          style={{
            animation: isOpen ? 'modalIn 0.5s ease-out' : 'modalOut 0.5s ease-in'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated gradient border */}
       
          
          {/* Modal Header */}
          {
            modalTitle && (
              <div className="relative flex items-center justify-between p-6 border-b border-gray-200/30 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-gray-900 animate-fadeInUp" id="modal-title">
                {modalTitle}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-90 p-2 rounded-full hover:bg-gray-100/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            )
          }
 
          
          {/* Modal Body */}
          <div className="relative p-6 overflow-y-auto max-h-[calc(90vh-120px)] animate-fadeInUp bg-white">
            {modalContent}
          </div>
        </div>
        
        {/* Custom styles for animations */}
        <style>{`
          @keyframes modalIn {
            0% {
              transform: translateY(50px) scale(0.9) rotate(3deg);
              opacity: 0;
            }
            50% {
              transform: translateY(-10px) scale(1.02) rotate(-1deg);
              opacity: 0.8;
            }
            100% {
              transform: translateY(0) scale(1) rotate(0deg);
              opacity: 1;
            }
          }
          
          @keyframes modalOut {
            0% {
              transform: translateY(0) scale(1) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(50px) scale(0.9) rotate(3deg);
              opacity: 0;
            }
          }
          
          @keyframes fadeInUp {
            0% {
              transform: translateY(20px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out 0.2s both;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  };

  export default Modal;