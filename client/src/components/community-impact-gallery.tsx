import { motion } from "framer-motion";
import { useState, useMemo } from "react";

// Updated with all available images from client/public/images
const communityImpactPhotos = [
  // 1. Food Preparation Phase
  {
    src: "/images/IMG_0038.png",
    alt: "Sizzle & Pop!",
    description: "Freshly fried for you!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0060.png",
    alt: "BBQ Master at Work",
    description: "Grilled with love!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0482.png",
    alt: "Rainbow Rice Delight",
    description: "A bowl full of color!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0089.png",
    alt: "Mission Statement",
    description: "Hearts in action.",
    position: "col-span-1 row-span-1",
  },
  // 2. Packaging Phase
  {
    src: "/images/IMG_0471.png",
    alt: "Meal Prep Magic",
    description: "Ready to share!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0462.png",
    alt: "Rice & Smiles Bowl",
    description: "Smiles in every bite!",
    position: "col-span-1 row-span-1",
  },
  // 3. Community Gathering & Waiting
  {
    src: "/images/IMG_0427.png",
    alt: "The Waiting Game",
    description: "Worth the wait!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0085.png",
    alt: "Queue Champions",
    description: "Patience and excitement!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0522.png",
    alt: "The Great Food Line",
    description: "Everyone's welcome!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0372 1.png",
    alt: "Queue Crew",
    description: "Friends in line!",
    position: "col-span-1 row-span-1",
  },
  // 4. Distribution & Community Interaction
  {
    src: "/images/IMG_0125 1.png",
    alt: "Community Vibes",
    description: "Together is better!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0548.png",
    alt: "Distribution Hands",
    description: "Hands that help!",
    position: "col-span-1 row-span-1",
  },
  // 5. Receiving & Eating
  {
    src: "/images/IMG_0437.png",
    alt: "Step-by-Step Happiness",
    description: "Happy tummies, happy hearts!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0146.png",
    alt: "Meal Time Joy",
    description: "Yum!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/_MG_0019.png",
    alt: "Living the Motto",
    description: "Giving is living!",
    position: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG_0087 1.png",
    alt: "Kitchen Team Spirit",
    description: "Teamwork makes the dream work!",
    position: "col-span-1 row-span-1",
  },
];

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function CommunityImpactGallery() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  // Memoize the photo grid to prevent unnecessary re-renders
  const photoGrid = useMemo(
    () => (
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {communityImpactPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-lg shadow-md bg-gray-100 ${photo.position}`}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full h-80 object-cover object-top transition-transform duration-200 group-hover:scale-102 ${
                  loadedImages.has(index) ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                decoding="async"
                fetchPriority="high"
                style={{
                  imageRendering: "crisp-edges",
                }}
              />
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="font-semibold text-sm mb-1">{photo.alt}</h3>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    [loadedImages]
  );

  return (
    <section className="py-12 warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="font-bold text-3xl md:text-4xl text-neutral mb-3">
            Community Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every meal creates a ripple effect of hope, joy, and community
            building
          </p>
        </motion.div>

        {photoGrid}

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-white rounded-xl p-5 shadow-md max-w-3xl mx-auto">
            <h3 className="font-bold text-xl md:text-2xl text-neutral mb-3">
              The Ripple Effect
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              What started as a simple act of kindness has grown into a
              community movement. Children now organize street clean-ups while
              waiting for their meals, and families come together to support one
              another. Every Saturday, we're not just serving meals - we're
              building a stronger, more connected community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
