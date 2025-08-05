import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from '../hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  businessType: z.string().min(1, {
    message: "Please select your business type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

interface LeadFormProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  trigger, 
  title = "Get Started with Your Project",
  description = "Fill out the form below and we'll get back to you within 24 hours."
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend/CRM
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", values);
      
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white border-0 shadow-2xl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-display font-bold text-growzzy-primary">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Full Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your full name" 
                      {...field}
                      className="h-12 border-gray-200 focus:border-growzzy-primary focus:ring-growzzy-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="Enter your email address" 
                      {...field}
                      className="h-12 border-gray-200 focus:border-growzzy-primary focus:ring-growzzy-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Phone Number *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="Enter your phone number" 
                      {...field}
                      className="h-12 border-gray-200 focus:border-growzzy-primary focus:ring-growzzy-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">What kind of business do you have? *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-growzzy-primary focus:ring-growzzy-primary/20">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="d2c-brand">D2C Brand</SelectItem>
                      <SelectItem value="retail-store">Retail Store</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="service-based">Service Based</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project requirements..." 
                      {...field}
                      className="min-h-[100px] border-gray-200 focus:border-growzzy-primary focus:ring-growzzy-primary/20 resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-growzzy-primary hover:bg-growzzy-primary/90 text-white font-medium text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Inquiry
                </>
              )}
            </Button>
          </form>
        </Form>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;