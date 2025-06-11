import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PlayCircle, Settings, Users, Calendar, Building, Share2 } from "lucide-react";

const portfolioVideos = [
  {
    id: 1,
    title: "Local Restaurant Success",
    description: "Increased foot traffic by 40% with our promotional video campaign for Bella's Bistro.",
    category: "Promotional Video",
    icon: PlayCircle,
    embedId: "dQw4w9WgXcQ", // Replace with actual video IDs
  },
  {
    id: 2,
    title: "Tech Startup Demo",
    description: "Product demo video that helped secure $2M in funding for InnovateTech Solutions.",
    category: "Product Demo",
    icon: Settings,
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Fitness Studio Testimonials",
    description: "Customer testimonial series that boosted membership sign-ups by 60% for FitLife Studio.",
    category: "Testimonial Series",
    icon: Users,
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "E-commerce Product Line",
    description: "Social media video series that drove 300% increase in online sales for Artisan Crafts Co.",
    category: "Social Media Campaign",
    icon: Share2,
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Professional Services",
    description: "Brand story video that positioned LegalEase as the premier law firm in their market.",
    category: "Brand Story",
    icon: Building,
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Event Highlight Reel",
    description: "Grand opening coverage that generated buzz and 500+ new customers for Metro Auto Dealership.",
    category: "Event Coverage",
    icon: Calendar,
    embedId: "dQw4w9WgXcQ",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="portfolio" className="py-20 bg-jaw-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped small businesses transform their marketing with
            powerful video content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-800 relative">
                <iframe
                  className="w-full h-full rounded-t-2xl"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={`JAW Drop Productions - ${video.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-300 mb-4">{video.description}</p>
                <div className="flex items-center text-jaw-gold">
                  <video.icon className="mr-2" size={16} />
                  <span className="text-sm">{video.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-jaw-gold hover:bg-yellow-500 text-jaw-gray font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
