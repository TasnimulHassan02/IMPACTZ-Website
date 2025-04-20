
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>
        {`
          @keyframes float-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, -30px) rotate(10deg); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, 20px) rotate(-5deg); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(30px, 30px) rotate(15deg); }
          }
          .float-1 { animation: float-1 15s ease-in-out infinite; }
          .float-2 { animation: float-2 18s ease-in-out infinite; }
          .float-3 { animation: float-3 20s ease-in-out infinite; }
        `}
      </style>
      
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-brand-purple/10 rounded-full filter blur-xl float-1"></div>
      <div className="absolute top-40 left-[15%] w-40 h-40 bg-brand-blue/10 rounded-full filter blur-xl float-2"></div>
      <div className="absolute bottom-20 right-[20%] w-36 h-36 bg-brand-light-purple/20 rounded-full filter blur-xl float-3"></div>
      <div className="absolute bottom-40 left-[25%] w-44 h-44 bg-brand-light-blue/10 rounded-full filter blur-xl float-1"></div>
    </div>
  );
};

export default FloatingElements;
