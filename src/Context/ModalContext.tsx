import Modal from '@/components/ui/modal';
import React from 'react';

export type ModalContextType = {
  isOpen: boolean;
  openModal: (content: React.ReactNode, title?: string) => void;
  closeModal: () => void;
  modalTitle: string;
  modalContent: React.ReactNode;
};

const ModalContext = React.createContext<ModalContextType | null>(null);


// Modal Provider Component
const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<React.ReactNode>(null);
  const [modalTitle, setModalTitle] = React.useState('');

  const openModal = React.useCallback((content: React.ReactNode, title = '') => {
    setModalContent(content);
    setModalTitle(title);
    setIsOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setModalContent(null);
      setModalTitle('');
    }, 300); // Wait for animation to complete
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalTitle, modalContent }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export { ModalContext };
export default ModalProvider;