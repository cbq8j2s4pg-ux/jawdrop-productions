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
    title: "Promo Videos That Slap",
    description:
      "We make promos that straight up convert. Your business will look so fire, customers won't be able to resist.",
    features: ["Brand stories that hit", "Product showcases", "Service demos that crush"],
  },
  {
    icon: Users,
    title: "Testimonials That Hit Different",
    description:
      "Real customers spitting facts about your business. These testimonials will have prospects ready to buy immediately.",
    features: ["Customer success stories", "Case studies that wow", "Social proof that converts"],
  },
  {
    icon: Share2,
    title: "Social Content That Goes Viral",
    description:
      "Platform-optimized content that gets shared, liked, and saves. Your socials will be absolutely popping.",
    features: ["TikTok & Insta bangers", "Facebook ads that convert", "YouTube content that slaps"],
  },
  {
    icon: PlayCircle,
    title: "Product Demos That Sell",
    description:
      "Show your products doing what they do best. These demos will have people adding to cart before the video ends.",
    features: ["Feature breakdowns", "How-to content", "Comparison vids that win"],
  },
  {
    icon: Megaphone,
    title: "Event Coverage That's Fire",
    description:
      "We capture your events and make them look absolutely legendary. Every moment becomes marketing gold.",
    features: ["Live event filming", "Highlight reels that pop", "Behind-the-scenes content"],
  },
  {
    icon: TrendingUp,
    title: "Training Vids That Actually Work",
    description:
      "Educational content that doesn't put people to sleep. Clear, engaging, and actually useful training.",
    features: ["Onboarding that sticks", "Tutorials people watch", "Process docs that work"],
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
            What We're Cooking
          </h2>
          <p className="text-xl text-jaw-dark-silver max-w-3xl mx-auto">
            The hottest video content packages that'll have your business 
            absolutely crushing it
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
