import React from "react";
import "./styles.scss";
import IconWhatsapp from "../../assets/svg/IconWhatsapp";
import { useScreenSize } from "../../contexts/ScreenSizeContext";

const FloatingWhatsAppIcon = () => {
  const { isMobile } = useScreenSize();

  return (
    <a
      href="https://api.whatsapp.com/send?phone=45998550838"
      className="floating-whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconWhatsapp width={isMobile ? "60px" : "90px"} color="#25d366" />
    </a>
  );
};

export default FloatingWhatsAppIcon;
