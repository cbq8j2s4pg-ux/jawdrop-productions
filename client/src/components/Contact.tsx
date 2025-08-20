import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-jaw-gray mb-6">
              Ready to Create Something{" "}
              <span className="text-jaw-dark-silver">Amazing?</span>
            </h2>
            <p className="text-xl text-jaw-dark-silver mb-8 leading-relaxed">
              Let's discuss your video marketing goals and create content that
              drives real results for your business.
            </p>

            <div className="space-y-6">
              {/* <div className="flex items-center">
                <div className="bg-jaw-gray text-white p-3 rounded-lg mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-semibold text-jaw-gray">Phone</div>
                  <div className="text-jaw-dark-silver">(555) 123-4567</div>
                </div>
              </div> */}

              {/* <div className="flex items-center">
                <div className="bg-jaw-gray text-white p-3 rounded-lg mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-jaw-gray">Email</div>
                  <div className="text-jaw-dark-silver">hello@jawdropproductions.com</div>
                </div>
              </div> */}

              <div className="flex items-center">
                <div className="bg-jaw-gray text-white p-3 rounded-lg mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-semibold text-jaw-gray">Location</div>
                  <div className="text-jaw-dark-silver">Milwaukee, WI</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="/attached_assets/IMG_4718_1749663103681.jpeg"
                alt="Professional video production behind the scenes"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-jaw-silver"
          >
            <h3 className="text-2xl font-bold text-jaw-gray mb-6">
              Get Your Free Consultation
            </h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  {...form.register("name")}
                  className="mt-2"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...form.register("email")}
                  className="mt-2"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...form.register("phone")}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Select
                  onValueChange={(value) => form.setValue("businessType", value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                    <SelectItem value="retail">Retail/E-commerce</SelectItem>
                    <SelectItem value="professional">Professional Services</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="fitness">Fitness/Wellness</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your video marketing goals and what you'd like to achieve..."
                  {...form.register("message")}
                  className="mt-2 resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-jaw-gray hover:bg-jaw-silver hover:text-jaw-gray text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {contactMutation.isPending
                  ? "Sending..."
                  : "Send Message & Get Free Quote"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
