import React, { useState } from "react";
import AOS from "aos";
AOS.init();
interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSuccess: React.FC<ModalSuccessProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        data-aos="fade-down"
        className="bg-stone-800 rounded-lg shadow-lg max-w-md w-full p-6"
      >
        <h2 className="text-4xl font-semibold text-center mb-4">Success!</h2>
        <p className=" text-center mb-6">Your message has been sent</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-stone-600 text-white px-4 py-2 rounded hover:bg-stone-900 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
