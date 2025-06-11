import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-jaw-light">
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
              <span className="text-jaw-dark-silver">Unforgettable</span>
            </h2>
            <p className="text-lg text-jaw-dark-silver mb-6 leading-relaxed">
              At JAW Drop Productions, we specialize in creating high-impact
              video content that drives results for small businesses. Our team
              combines creative storytelling with strategic marketing to produce
              videos that not only look amazing but convert viewers into
              customers.
            </p>
            <p className="text-lg text-jaw-dark-silver mb-8 leading-relaxed">
              From promotional videos and product demos to testimonials and
              social media content, we handle every aspect of video production
              to help your business stand out in today's competitive market.
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
                <div className="text-jaw-dark-silver">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-3xl font-bold text-jaw-gray mb-2"
                >
                  95%
                </motion.div>
                <div className="text-jaw-dark-silver">Client Satisfaction</div>
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
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=700"
              alt="Professional video production studio"
              className="rounded-2xl shadow-2xl w-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-jaw-silver text-jaw-gray p-6 rounded-xl shadow-lg"
            >
              <Video className="text-3xl mb-2" />
              <div className="font-bold">Expert Production</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
