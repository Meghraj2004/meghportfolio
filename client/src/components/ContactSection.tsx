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
import useWeb3Forms from '@web3forms/react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
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
      subject: '',
      message: ''
    }
  });

  const { submit: submitWeb3Form } = useWeb3Forms({
    access_key: 'e99b466d-e31a-4dfe-9e20-188a24f69b8c',
    settings: {
      from_name: 'Portfolio Contact Form',
      subject: 'New Contact Message from Portfolio Website'
    },
    onSuccess: (successMessage, data) => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (errorMessage, data) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      await submitWeb3Form({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200 text-lg">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-light focus:border-primary-light h-12" 
                          placeholder="Enter subject"
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
            <div className="bg-background-card p-8 rounded-xl border border-gray-800 shadow-md h-full flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="hover:bg-background-surface p-4 rounded-lg transition-all duration-300 transform hover:-translate-x-1"
                  >
                    <div className="flex items-center">
                      <div className="bg-primary-DEFAULT/20 p-3 rounded-lg mr-4 shadow-inner">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                        <a 
                          href={info.href} 
                          className="text-primary-light hover:underline text-md transition-colors duration-300 hover:text-primary-DEFAULT break-words"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-white font-medium mb-4">Connect with me:</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/megharaj-dandgavhal-832683259/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/Meghraj2004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
