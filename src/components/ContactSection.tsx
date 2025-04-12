
import { useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Submitting form data:", data);
    
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);
      formData.append('access_key', 'e99b466d-e31a-4dfe-9e20-188a24f69b8c');
      
      // Log the FormData entries for debugging
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
      
      // Make the fetch call with proper headers
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response data:", result);
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or reach out via email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-dark py-20">
      <div className="section-container">
        <h2 className="section-title text-white">Contact Me</h2>
        
        <div className="max-w-2xl mx-auto portfolio-card glass-effect animate-on-scroll relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-primary opacity-10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-primary opacity-10 rounded-full blur-xl"></div>
          
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Get In Touch</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-gray-300 mb-2 flex items-center">
                      <User size={16} className="mr-2 text-purple-primary" />
                      Your Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="bg-dark-secondary border-gray-700 focus:border-purple-primary text-white transition-all duration-300 focus:ring-2 focus:ring-purple-primary/20"
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
                    <FormLabel className="block text-gray-300 mb-2 flex items-center">
                      <Mail size={16} className="mr-2 text-purple-primary" />
                      Your Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        {...field}
                        className="bg-dark-secondary border-gray-700 focus:border-purple-primary text-white transition-all duration-300 focus:ring-2 focus:ring-purple-primary/20"
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
                    <FormLabel className="block text-gray-300 mb-2 flex items-center">
                      <MessageSquare size={16} className="mr-2 text-purple-primary" />
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hello, I'd like to talk about a frontend development opportunity..."
                        {...field}
                        className="min-h-[120px] bg-dark-secondary border-gray-700 focus:border-purple-primary text-white transition-all duration-300 focus:ring-2 focus:ring-purple-primary/20"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-purple-primary hover:bg-purple-light text-white flex items-center justify-center btn-hover-effect group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Send Message
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
          
          <div className="absolute bottom-3 right-3 text-purple-primary/30 text-xs">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
