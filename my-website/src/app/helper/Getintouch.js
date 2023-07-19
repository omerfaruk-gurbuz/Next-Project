import React from 'react';

const data = [
  { url: "https://www.linkedin.com/in/omer-faruk-gurbuz/", id: "LinkedIn" },
  { url: "https://github.com/Omeko-FG", id: "Github" },
  { url: "https://www.instagram.com/omrgurbuz/", id: "Instagram" },
  { url: "mailto:gurbuzzomer@gmail.com", id: "Gmail" }
];

const Getintouch = () => {
  return (
    <div className="flex-col sm:flex justify-center">
      <p className="text-white text-center text-5xl font-semibold mt-44 m-8">Get In Touch</p>
      <div className="flex justify-center flex-wrap items-center gap-7">
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
        <svg className="w-[48px] h-[48px] text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"/>
        </svg>
      );
    case "Github":
      return (
        <svg className="w-[48px] h-[48px] text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                      <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>

        </svg>
      );
    case "Instagram":
      return (
        <svg className="w-[48px] h-[48px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M12 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm7 11-6-2V4l6-2v10Z"/>

        </svg>
      );
    case "Gmail":
      return (
        <svg className="w-[48px] h-[48px] text-rose-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"/>

        </svg>
      );
    default:
      return null;
  }
};

export default Getintouch;
