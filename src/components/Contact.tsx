
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase
        .from('Contract')
        .insert({
          Name: formData.get('name'),
          Email: formData.get('email'),
          Subject: formData.get('subject'),
          Message: formData.get('message')
        });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Contact us to discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-brand-blue to-brand-purple p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-8 opacity-90">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="mr-4" size={20} />
                  <p>+8801987660586</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4" size={20} />
                  <p>impactz2025@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4" size={20} />
                  <p>TA-107, Gulshan 1,
                    Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="flex space-x-4 mx-0 px-0">
                  <a href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJqXxmRxwJJGRhbddhVKVxqQdqHnGhjHLXntnFfrKhcbxjxlkrzzTSlGnFnDnXXbzzMSZGB" target="_blank" className="bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full mx-0 my-0 px-[15px] py-[15px]">
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/company/impactz2025/?viewAsMember=true" target="_blank" className="bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full px-[15px] py-[15px]">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="How can we help you?" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message" 
                  rows={5} 
                  required 
                  className="resize-none" 
                />
              </div>
              
              <Button type="submit" className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white w-full flex items-center justify-center gap-2">
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
