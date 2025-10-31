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

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error in form submission:", error);
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

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-background-card p-6 rounded-2xl shadow-lg border border-gray-800"
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
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:text-black focus:ring-2 focus:ring-primary-light focus:border-primary-light h-12"
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
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:text-black focus:ring-2 focus:ring-primary-light focus:border-primary-light h-12"
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
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:text-black focus:ring-2 focus:ring-primary-light focus:border-primary-light h-12"
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
                          className="bg-background-surface border border-gray-700 rounded-lg py-3 px-4 text-white focus:text-black focus:ring-2 focus:ring-primary-light focus:border-primary-light resize-none"
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
                  className="relative w-full bg-primary-DEFAULT hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 group overflow-hidden btn-pulse border-glow"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-shimmer">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="group-hover:text-shimmer transition-all duration-500">Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-primary-light/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            className="bg-background-card p-6 rounded-2xl border border-gray-800 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-2">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <div className="flex space-x-2">
                <div className="bg-gray-800 hover:bg-primary-DEFAULT/30 p-2 rounded-full cursor-pointer transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 hover:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <div className="bg-gray-800 hover:bg-primary-DEFAULT/30 p-2 rounded-full cursor-pointer transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 hover:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-background-surface rounded-xl border border-gray-700 relative overflow-hidden group border-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-primary-DEFAULT/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center">
                <div className="flex-shrink-0 bg-gradient-to-br from-primary-light to-primary-DEFAULT rounded-full p-1 mb-3 sm:mb-0 sm:mr-4 shadow-lg overflow-hidden floating">
                  <div className="bg-gray-900 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
                    <svg className="h-14 w-14 text-primary-light" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white">Megharaj Dandgavhal</h3>
                  <p className="text-primary-light text-shimmer">Full-stack Developer</p>
                  <div className="text-gray-400 text-sm mt-1">Available for Freelance & Full-time Opportunities</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-primary-light to-primary-DEFAULT"></div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="hover:bg-background-surface p-4 rounded-lg transition-all duration-300 transform hover:-translate-x-1 group cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-primary-DEFAULT/20 p-3 rounded-lg mr-4 shadow-inner group-hover:bg-primary-DEFAULT/30 transition-colors duration-300">
                      <div className="group-hover:animate-pulse">
                        {info.icon}
                      </div>
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                      <a
                        href={info.href}
                        className="text-primary-light hover:underline text-md transition-colors duration-300 hover:text-primary-DEFAULT break-all w-full inline-block"
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
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Meghraj2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/megharaj_2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.233.297 2.734.619.57.366 1.008.835 1.367 1.368.322.501.557 1.368.619 2.734.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.297 2.233-.619 2.734-.36.57-.835 1.008-1.368 1.367-.501.322-1.368.557-2.734.619-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.233-.297-2.734-.619-.57-.36-1.008-.835-1.367-1.368-.322-.501-.557-1.368-.619-2.734-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.297-2.233.619-2.734.366-.57.835-1.008 1.368-1.367.501-.322 1.368-.557 2.734-.619 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.308.065-2.197.28-2.965.617-.904.389-1.656.901-2.267 1.512-.611.611-1.123 1.363-1.512 2.267-.337.768-.552 1.657-.617 2.965-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.065 1.308.28 2.197.617 2.965.389.904.901 1.656 1.512 2.267.611.611 1.363 1.123 2.267 1.512.768.337 1.657.552 2.965.617 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.308-.065 2.197-.28 2.965-.617.904-.389 1.656-.901 2.267-1.512.611-.611 1.123-1.363 1.512-2.267.337-.768.552-1.657.617-2.965.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.065-1.308-.28-2.197-.617-2.965-.389-.904-.901-1.656-1.512-2.267-.611-.611-1.363-1.123-2.267-1.512-.768-.337-1.657-.552-2.965-.617-1.277-.058-1.688-.072-4.947-.072z" />
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
