import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Video,
  Check,
  Printer,
  Zap,
  Calendar,
  Camera,
  Sparkles,
  Rocket,
} from "lucide-react";

import printImg from "@assets/print.jpg";
import droneImg from "@assets/drone.jpg";
import brandImg from "@assets/brand.jpg";
import auditImg from "@assets/audit.jpg";
import managementImg from "@assets/management.jpg";
import videoImg from "@assets/video.jpg";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Printer,
      title: "Print Design That Slaps",
      description:
        "Need a menu that doesn't look like it was made in Word? We got you covered with designs that actually convert.",
      features: ["Fire menus", "Killer posters", "Promo flyers that pop", "Event materials that wow"],
      bgImage: printImg,
    },
    {
      icon: Zap,
      title: "Drone Photo & Video That Hits Different",
      description:
        "We capture your business from angles that'll blow people's minds. Perfect for showcasing exteriors, rooftops, events, or neighborhoods in a whole new light.",
      features: [
        "Epic flyovers (outdoor, line of sight)",
        "Eye-catching visual variety that pops",
        "Social-ready edits that go viral",
      ],
      bgImage: droneImg,
    },
    {
      icon: Sparkles,
      title: "Brand Refresh & Visual Glow-Ups",
      description:
        "Outdated logo? Off-brand visuals? Let's sharpen your look without starting from scratch. We'll build a mini refresh kit to make your business look absolutely legendary everywhere it shows up.",
      features: [
        "Fonts, colors, logo tweaks that hit",
        "Social post templates that slap",
        "Visual guidelines that actually work",
      ],
      bgImage: brandImg,
    },
    {
      icon: Camera,
      title: "Social Media Audits That Tell The Truth",
      description:
        "Not sure why your content isn't landing? We'll review your platforms and tell you exactly what's working, what's trash, and what needs to change ASAP.",
      features: [
        "Bio & brand reality check",
        "Content review (no sugar coating)",
        "Actionable recommendations that work",
        "Delivered as a visual breakdown",
      ],
      bgImage: auditImg,
    },
    {
      icon: Calendar,
      title: "Social Media Management That Actually Works",
      description:
        "Tired of managing your own page and getting zero results? We'll take the wheel and make your socials absolutely fire. Includes content creation, captions, posting, and strategy that converts.",
      features: [
        "Weekly content calendar that bangs",
        "Reels, carousels, stories that pop",
        "Captions + scheduling that converts",
        "Strategy + reporting that shows results",
      ],
      bgImage: managementImg,
    },
    {
      icon: Video,
      title: "Booth Interviews & Short-Form Video That Goes Viral",
      description:
        "Reels don't have to be cringe. We create short-form video content that actually reflects your brand and grabs attention fast. No awkward camera moments, just pure fire content.",
      features: [
        "Filming + editing that looks pro",
        "Captions + music that hits right",
        "Platform-optimized for maximum reach",
        "Custom branded style (not basic trends)",
      ],
      bgImage: videoImg,
    },
  ];

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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-jaw-silver min-h-[420px]"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-xl inline-flex mb-6 group-hover:bg-white/30 transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-6">{service.description}</p>
                <ul className="text-gray-200 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="text-jaw-silver mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-width "Let's Go Bro" section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-jaw-gray to-jaw-dark-silver rounded-2xl p-12 text-center text-jaw-gray"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Rocket className="mx-auto mb-4" size={48} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Exactly What You Need?
            </h3>
            <p className="text-xl mb-8 text-jaw-dark-silver">
              Custom projects and creative collaborations are always welcome.
              Tell us your idea—we'll tell you how we make it absolutely legendary.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-jaw-silver hover:bg-jaw-gold text-jaw-gray font-bold text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Go Bro!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
