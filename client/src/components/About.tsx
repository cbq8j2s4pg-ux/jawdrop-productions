import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-jaw-gray mb-6">
              We Make Your Business{" "}
              <span className="text-jaw-dark-silver">Absolutely Legendary</span>
            </h2>
            <p className="text-lg text-jaw-dark-silver mb-6 leading-relaxed">
              For almost 20 years, I worked in the service industry—bartender, server, manager, the whole grind. But a few years ago, I got handed control of a small business's social media… and something just clicked.
            </p>
            <p className="text-lg text-jaw-dark-silver mb-6 leading-relaxed">
              I didn't want to just post specials. I wanted to make people feel something when they saw a burger. Or a flyer. Or a silly reel with a killer hook. Turns out, I wasn't just good at it—I was hooked.
            </p>
            <p className="text-lg text-jaw-dark-silver mb-6 leading-relaxed">
              So now? This is what I do. JAW DROP Productions is where creativity meets hustle. I help small businesses create content that's original, polished, and impossible to ignore.
            </p>
            <p className="text-lg text-jaw-dark-silver mb-8 leading-relaxed">
              No templates. No fluff. No overpriced agency bullshit. Just work that's built from scratch—with strategy, style, and intention. Whether it's a brunch menu, a promo video, or drone footage over your rooftop event—you're getting my full focus every time.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold text-jaw-gray mb-2"
                >
                  150+
                </motion.div>
                <div className="text-jaw-dark-silver">Bangers Delivered</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-3xl font-bold text-jaw-gray mb-2"
                >
                  100%
                </motion.div>
                <div className="text-jaw-dark-silver">Pure Heat</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=700&sat=-100"
              alt="Professional drone in flight for aerial cinematography"
              className="rounded-2xl shadow-2xl w-full grayscale"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-jaw-silver text-jaw-gray p-6 rounded-xl shadow-lg"
            >
              <Zap className="text-3xl mb-2" />
              <div className="font-bold">Aerial Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}