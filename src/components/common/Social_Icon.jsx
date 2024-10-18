import React from "react";

function SocialIcon({ children, size = 20, link, className = "" }) {
  return (
    <>
      <a
        href={link ?? "/"}
        className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer icon-animation transition-all ${className} `}
        target="_blank" rel="noopener noreferrer"
      >
        {React.cloneElement(children, { size })}
      </a>
    </>
  );
}

export default SocialIcon;
