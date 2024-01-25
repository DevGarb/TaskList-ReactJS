// WhatsAppButton.tsx
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(linkWhatsApp);
  };

  return (
    <button
      type="button"
      onClick={handleWhatsAppClick}
      className="flex gap-3 bg-green-600 ml-4 py-2 rounded-md px-8 text-white font-medium mt-3"
    >
      Enviar para WhatsApp
    </button>
  );
};

export default WhatsAppButton;
