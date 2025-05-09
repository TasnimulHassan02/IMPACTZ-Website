import React from "react";
import { CheckCircle, Target, Compass, BarChart4 } from "lucide-react";
const About: React.FC = () => {
  return <section id="about" className="py-20 bg-gray-50 my-[40px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-brand-light-blue rounded-full text-brand-blue text-sm font-semibold">
              <Target size={16} className="mr-2" /> Our Mission & Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose IMPACTZ</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple"></div>
            <p className="text-gray-600 text-lg">
              At IMPACTZ, we're committed to developing state-of-art technology that makes a meaningful impact.
              Our innovative solutions are designed to solve complex problems and help your business.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-brand-blue">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Custom Development</h3>
                  <p className="text-gray-600">We build apps, websites, software, systems and tools tailored to your specific needs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-brand-blue">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Continuous Innovation</h3>
                  <p className="text-gray-600">We constantly develop new products, services & technologies to drive innovation.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-brand-blue">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Impact-Driven</h3>
                  <p className="text-gray-600">Our solutions are designed to improve lives, help businesses & create new possibilities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform hover:-translate-y-2 transition-transform animate-slide-up mx-0 my-0 px-[25px]">
              <div className="bg-brand-light-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">IMPACTZ is a future-forward tech company dedicated to solving complex problems through innovative digital solutions. We believe in creating technologies that empower people, enhance experiences, and shape a better world.</p>
            </div>
            
            
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 col-span-1 md:col-span-2 transform hover:-translate-y-2 transition-transform animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="bg-gradient-to-r from-brand-light-blue to-brand-light-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart4 className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
              <p className="text-gray-600">We measure our success by the positive impact our technology makes in people's lives, success brings to your business and the advancement it brings to society.</p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-brand-blue">Innovation</h4>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-brand-blue">Quality</h4>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <h4 className="font-semibold text-brand-blue">Impact</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;