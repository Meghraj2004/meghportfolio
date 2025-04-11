import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, we would submit to a backend service
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email",
      value: "megharajdandgavhal2004@gmail.com",
      href: "mailto:megharajdandgavhal2004@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Phone",
      value: "+91-9421612110",
      href: "tel:+919421612110",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Location",
      value: "Jalgaon, Maharashtra, India",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center relative inline-block">
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-light rounded-full"></span>
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto mt-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="col-span-1 md:col-span-2 bg-background-card p-8 rounded-2xl shadow-lg border border-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200 text-lg">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-light focus:border-primary-light h-12" 
                          placeholder="Enter your name"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200 text-lg">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email" 
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-light focus:border-primary-light h-12" 
                          placeholder="Enter your email"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200 text-lg">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={5}
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-light focus:border-primary-light resize-none" 
                          placeholder="Your message here..."
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary-DEFAULT hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-lg transition-colors text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="md:col-span-1 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-background-card p-6 rounded-xl border border-gray-800 hover:border-primary-light/50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-start">
                  <div className="bg-primary-DEFAULT/20 p-3 rounded-lg mr-4 shadow-inner">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                    <a 
                      href={info.href} 
                      className="text-primary-light hover:underline text-lg transition-colors duration-300 hover:text-primary-DEFAULT"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
