
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <Card 
      ref={cardRef}
      className="border border-gray-100 shadow-sm hover:shadow-md transition-all group hover:scale-105 duration-300 ease-in-out opacity-0 translate-y-10"
    >
      <CardContent className="p-6 hover:bg-brand-light-blue bg-white">
        <div className="bg-brand-light-purple group-hover:bg-brand-purple transition-colors w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <div className="text-brand-purple group-hover:text-white transition-colors">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
