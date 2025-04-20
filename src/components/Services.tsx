import React from "react";
import { Code, Database, Globe, Lightbulb, Smartphone, Lock, Megaphone, Cog, Bot } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies to meet your business needs."
    }, {
      icon: <Smartphone size={24} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that provide seamless experiences across all devices."
    }, {
      icon: <Database size={24} />,
      title: "Software Solutions",
      description: "Tailored software systems that streamline operations and enhance productivity for your organization."
    }, {
      icon: <Megaphone size={24} />,
      title: "Digital Marketing",
      description: "Elevate your online presence with our strategic digital marketing solutions resulting in substantial growth."
    }, {
      icon: <Cog size={24} />,
      title: "Digital Transformation",
      description: "Modernize operations, integrate new technologies & drive innovation to stay ahead in a digital-first world."
    }, {
      icon: <Bot size={24} />,
      title: "Data Science & AI Solutions",
      description: "Turn data into insights & automate with smart AI systems, making your business faster & efficient."
    }, {
      icon: <Code size={24} />,
      title: "Custom Tools",
      description: "Specialized tools and utilities designed to solve specific problems and automate workflows."
    }, {
      icon: <Lightbulb size={24} />,
      title: "Innovation Consulting",
      description: "Strategic guidance on leveraging technology to innovate and stay ahead in your industry."
    }, {
      icon: <Lock size={24} />,
      title: "Secure Systems",
      description: "Robust and secure system architecture ensuring your data and operations are protected."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-brand-light-blue/30 to-transparent opacity-50" />
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-brand-light-purple rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-brand-light-blue rounded-full mix-blend-multiply filter blur-xl opacity-70" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We build cutting-edge tech solutions that solve real world problems,
            drive innovation, improve lives and create new possibilities for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              delay={index * 100} 
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-light-blue to-brand-light-purple p-8 rounded-2xl border border-brand-blue/10 mt-[150px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 transform group-hover:scale-95 transition-transform duration-500" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                Got any problem with your business? Don't know whats wrong? Looking for custom solutions?
              </h3>
              <p className="text-gray-600">
                We specialize in building tailored technology solutions to address your specific challenges.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="relative inline-flex items-center px-6 py-3 overflow-hidden rounded-lg group bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-blue transition-all duration-300"
              >
                <span className="relative text-white">Contact Us</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform group-hover:scale-x-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
