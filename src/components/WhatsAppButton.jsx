import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/assets/whatsapp-icon.png"
        alt="WhatsApp"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "60px",
          width: "60px",
          zIndex: "1000",
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
