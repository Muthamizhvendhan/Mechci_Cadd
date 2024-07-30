import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const sections = [
  {
    title: 'Engineering Design',
    content: 'We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.',
    backgroundImage: "url('https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80')",
    buttonText: 'Learn More',
  },
  {
    title: 'HR Employment',
    content: 'We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.',
    backgroundImage: "url('https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80')",
    buttonText: 'Learn More',
  },
  {
    title: 'HR Employment',
    content: 'We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.',
    backgroundImage: "url('https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80')",
    buttonText: 'Learn More',
  },
  {
    title: 'HR Employment',
    content: 'We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.',
    backgroundImage: "url('https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80')",
    buttonText: 'Learn More',
  },
  {
    title: 'HR Employment',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, optio illo, delectus.',
    backgroundImage: "url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80')",
    buttonText: 'Learn More',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className="hidden lg:flex min-h-screen max-h-screen m-0 p-0 overflow-hidden list-none">
      {sections.map((section, index) => (
        <li
          key={index}
          className={`flex-1 horizontalcards flex flex-col items-stretch p-5 bg-red-600 cursor-pointer transition-all duration-500 ease-in-out ${
            activeIndex === index ? 'flex-[5] bg-white cursor-default' : ''
          }`}
          onClick={() => setActiveIndex(index)}
          style={{
            backgroundImage: section.backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex-1 flex items-center justify-center text-white text-center">
            <h2
              className={`m-0 transform ${
                activeIndex === index
                  ? 'text-white text-3xl rotate-0'
                  : 'rotate-90 whitespace-nowrap text-xl'
              }`}
            >
              {section.title}
            </h2>
          </div>
          <div
            className={`flex-1 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? 'opacity-100 transform scale-x-100'
                : 'opacity-0 transform scale-x-0'
            }`}
          >
            <p className="m-0 text-white mb-4 text-justify text-xl">{section.content}</p>
            <button className="relative overflow-hidden h-11 px-8 rounded-md bg-[#3d3a4e] text-white border-none cursor-pointer group">
              <span className="relative z-10">{section.buttonText}</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#965DE9] to-[#6358EE] transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;