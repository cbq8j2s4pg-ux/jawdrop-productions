import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

function TypewriterBubble({ text, author, title, isActive, delay = 0 }: { text: string; author: string; title: string; isActive: boolean; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [isActive, delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), 400);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <div className="flex flex-col items-start">
      <div
        className="relative bg-jaw-gray text-white px-6 py-4 rounded-2xl rounded-bl-sm max-w-2xl shadow-lg"
        style={{ minHeight: '80px' }}
      >
        <p className="text-lg leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
          {displayedText}
          {started && displayedText.length < text.length && (
            <span className="inline-block w-0.5 h-5 bg-white ml-0.5 animate-pulse align-middle" />
          )}
        </p>
        {/* Chat bubble tail */}
        <div
          className="absolute bottom-0 -left-2 w-4 h-4 bg-jaw-gray"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
      {/* Author signature - fades in after typing completes */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="mt-3 ml-4"
      >
        <div className="font-bold text-jaw-gray" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{author}</div>
        <div className="text-sm text-jaw-dark-silver" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{title}</div>
      </motion.div>
    </div>
  );
}

function TestimonialsSection() {
  const testimonialRef = useRef(null);
  const testimonialInView = useInView(testimonialRef, { once: true });

  return (
    <motion.div
      ref={testimonialRef}
      initial={{ opacity: 0, y: 30 }}
      animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="mt-16"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-jaw-gray mb-10 text-center">
        Client Testimonials
      </h3>
      <div className="max-w-3xl mx-auto space-y-4">
        <TypewriterBubble
          text="Jonathan Wiess was our amazing guy behind the camera this weekend. I was blown away by his quick turnaround time with productions. He has mass potential to help us get next level status! We are happy to have him."
          author="Lorena L."
          title="Lake Country Cards, Owner"
          isActive={testimonialInView}
          delay={500}
        />
      </div>
    </motion.div>
  );
}

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
      title: "Print Design That Commands Attention",
      description:
        "Need a menu that actually reflects your brand? I design print materials that look sharp, communicate clearly, and convert.",
      features: ["Menus", "Posters", "Promo flyers", "Event materials"],
      bgImage: printImg,
    },
    {
      icon: Zap,
      title: "Aerial Photo & Video That Changes The Perspective",
      description:
        "I capture your business from angles most people never see. Perfect for showcasing exteriors, rooftops, events, and neighborhoods in a whole new light.",
      features: [
        "Epic flyovers (outdoor, line of sight)",
        "Eye-catching visual variety",
        "Social-ready edits",
      ],
      bgImage: droneImg,
    },
    {
      icon: Sparkles,
      title: "Brand Refresh & Visual Identity",
      description:
        "Outdated logo? Inconsistent visuals? I'll sharpen your look without rebuilding from scratch. A focused refresh kit that makes your brand look polished and intentional everywhere it shows up.",
      features: [
        "Fonts, colors, logo tweaks",
        "Social post templates",
        "Visual guidelines",
      ],
      bgImage: brandImg,
    },
    {
      icon: Camera,
      title: "Social Media Audits That Tell You The Truth",
      description:
        "Not sure why your content isn't landing? I'll review your platforms and give you a clear picture of what's working, what's not, and exactly what needs to change.",
      features: [
        "Bio & brand review",
        "Content analysis",
        "Actionable recommendations",
        "Visual breakdown delivered",
      ],
      bgImage: auditImg,
    },
    {
      icon: Calendar,
      title: "Social Media Management That Gets Results",
      description:
        "Done managing your own page with nothing to show for it? I take the wheel. Content creation, captions, posting, and a real strategy that builds momentum.",
      features: [
        "Weekly content calendar",
        "Reels, carousels, stories",
        "Captions + scheduling",
        "Strategy + reporting",
      ],
      bgImage: managementImg,
    },
    {
      icon: Video,
      title: "Short-Form Video That Actually Grabs Attention",
      description:
        "Reels don't have to feel forced. I create short-form content that reflects your brand and stops people mid-scroll. No awkward moments, just content that works.",
      features: [
        "Filming + editing",
        "Captions + music",
        "Platform-optimized",
        "Custom branded style",
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
            What I Bring To The Table
          </h2>
          <p className="text-xl text-jaw-dark-silver max-w-3xl mx-auto">
            Creative services built for small businesses that are serious about standing out.
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

        {/* Client Testimonials */}
        <TestimonialsSection />
      </div>
    </section>
  );
}
