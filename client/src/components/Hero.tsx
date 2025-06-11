import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import backgroundImage from "@assets/IMG_4718_1749663103681.jpeg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-r from-jaw-blue/90 to-jaw-gray/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Create Videos That Make Jaws{" "}
          <span className="text-jaw-gold">Drop</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
        >
          Professional video marketing that transforms small businesses into
          industry leaders through compelling visual storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-jaw-gold hover:bg-yellow-500 text-jaw-gray font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="border-2 border-white text-white hover:bg-white hover:text-jaw-blue font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white text-2xl opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
