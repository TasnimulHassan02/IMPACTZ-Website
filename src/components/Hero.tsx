import React from "react";
import { ArrowRight, Code, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import FloatingElements from "./FloatingElements";
const Hero: React.FC = () => {
  return <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <ParticleBackground />
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 animate-fade-in">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Making life better <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                with technology
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Our mission is to build cutting-edge tech solutions that solve real world problems,
              drive innovation, improve lives and create new possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white font-bold rounded-lg flex items-center py-[12px] px-[26px]">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="border border-brand-blue text-brand-blue bg-white hover:bg-brand-light-blue rounded-lg border-width: 10 px text-center flex items-center justify-center sm:w-auto w-full transition-colors duration-200 py-[10px] my-0 mx-0 font-bold px-[26px]">Our Services</a>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-in">
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code size={20} className="text-brand-purple" />
                  <p className="text-gray-700 font-mono text-sm">Building innovative solutions</p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-brand-blue" />
                  <p className="text-gray-700 font-mono text-sm">Pushing human race forward</p>
                </div>
                <div className="h-40 bg-gradient-to-br from-brand-light-blue to-brand-light-purple rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-brand-purple font-semibold">Technology for a better future</p>
                    <p className="text-sm text-gray-500">Creating new possibilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;