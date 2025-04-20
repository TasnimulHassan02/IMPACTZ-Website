
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-32 h-32 rounded-full bg-gradient-to-r 
            ${i % 2 === 0 ? 'from-brand-blue/10 to-brand-purple/10' : 'from-brand-purple/10 to-brand-blue/10'}
          `}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: 'translate(-50%, -50%)',
            animation: `float-${i} ${10 + i * 2}s infinite ease-in-out`
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-0 { 0%, 100% { transform: translate(-50%, -50%) rotate(0deg); } 50% { transform: translate(-50%, -60%) rotate(180deg); } }
        @keyframes float-1 { 0%, 100% { transform: translate(-50%, -50%) rotate(0deg); } 50% { transform: translate(-60%, -50%) rotate(-180deg); } }
        @keyframes float-2 { 0%, 100% { transform: translate(-50%, -50%) rotate(0deg); } 50% { transform: translate(-40%, -40%) rotate(90deg); } }
        @keyframes float-3 { 0%, 100% { transform: translate(-50%, -50%) rotate(0deg); } 50% { transform: translate(-60%, -40%) rotate(-90deg); } }
        @keyframes float-4 { 0%, 100% { transform: translate(-50%, -50%) rotate(0deg); } 50% { transform: translate(-40%, -60%) rotate(135deg); } }
      `}</style>
    </div>
  );
};

export default FloatingElements;
