import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Video,
  Users,
  Share2,
  PlayCircle,
  Megaphone,
  TrendingUp,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Promotional Videos",
    description:
      "Showcase your business with compelling promotional content that drives engagement and conversions.",
    features: ["Brand storytelling", "Product showcases", "Service demonstrations"],
  },
  {
    icon: Users,
    title: "Testimonial Videos",
    description:
      "Build trust and credibility with authentic customer testimonials that convert prospects into clients.",
    features: ["Customer interviews", "Case studies", "Success stories"],
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description:
      "Optimize your social presence with platform-specific video content that maximizes reach and engagement.",
    features: ["Instagram & TikTok videos", "Facebook ads", "YouTube content"],
  },
  {
    icon: PlayCircle,
    title: "Product Demos",
    description:
      "Show your products in action with detailed demonstrations that highlight features and benefits.",
    features: ["Feature highlights", "How-to guides", "Comparison videos"],
  },
  {
    icon: Megaphone,
    title: "Event Coverage",
    description:
      "Capture and showcase your business events, launches, and special occasions professionally.",
    features: ["Live event filming", "Post-event highlights", "Behind-the-scenes"],
  },
  {
    icon: TrendingUp,
    title: "Training Videos",
    description:
      "Educate your customers and employees with clear, engaging instructional video content.",
    features: ["Employee onboarding", "Customer tutorials", "Process documentation"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20 bg-jaw-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jaw-gray mb-4">
            Our Services
          </h2>
          <p className="text-xl text-jaw-dark-silver max-w-3xl mx-auto">
            Comprehensive video marketing solutions tailored to elevate your
            small business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border border-jaw-silver"
            >
              <div className="bg-jaw-gray text-white p-4 rounded-xl inline-flex mb-6 group-hover:bg-jaw-silver group-hover:text-jaw-gray transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-jaw-gray mb-4">
                {service.title}
              </h3>
              <p className="text-jaw-dark-silver mb-6">{service.description}</p>
              <ul className="text-jaw-dark-silver space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-jaw-silver mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
