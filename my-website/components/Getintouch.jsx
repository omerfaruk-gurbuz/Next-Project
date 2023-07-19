"use client"
import React from 'react';

const data = [
  { url: "https://www.linkedin.com/in/omer-faruk-gurbuz/", id: "LinkedIn" },
  { url: "https://github.com/Omeko-FG", id: "Github" },
  { url: "https://www.instagram.com/omrgurbuz/", id: "Instagram" },
  { url: "mailto:gurbuzzomer@gmail.com", id: "Gmail" }
];

const Getintouch = () => {
  return (
    <div className="flex-col sm:flex justify-center mb-24">
      <p className="text-white text-center text-5xl font-semibold mt-44 m-8 mb-16">Connect With Me</p>
      <div className="flex justify-center items-center flex-wrap gap-7">
        {data.map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
            {renderIcon(item.id)}
          </a>
        ))}
      </div>
    </div>
  );
};
// İlgili SVG ikonunu döndüren yardımcı bir fonksiyon
const renderIcon = (id) => {
  switch (id) {
    case "LinkedIn":
      return (
<svg className="w-[48px] h-[48px] text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
    <path d="M3 5.012H0V15h3V5.012Z"/>
  </svg>
    
      );
    case "Github":
      return (
      <svg className="w-[48px] h-[48px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  </svg>
      );
    case "Instagram":
      return (
        <svg className=" mt-3 w-[48px] h-[48px] text-rose-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
         </svg>
      );
    case "Gmail":
      return (
<svg className="w-[48px] h-[48px] text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"/>
  </svg>
      );
    default:
      return null;
  }
};

export default Getintouch;
