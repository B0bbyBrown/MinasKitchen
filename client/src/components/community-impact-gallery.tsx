import { motion } from "framer-motion";
import { useState, useMemo } from "react";

// 16 images reordered to match the actual story flow
const communityImpactPhotos = [
  // 1. Food Preparation Phase
  {
    src: "/images/IMG_0038.jpg",
    alt: "Sizzle & Pop!",
    description:
      "Close-up of food, possibly potatoes or chicken, being deep-fried in a large pot, showing active cooking and meal preparation.",
  },
  {
    src: "/images/IMG_0060.jpg",
    alt: "BBQ Master at Work",
    description:
      "Close-up of chicken pieces being grilled on a barbecue, with smoke rising, highlighting outdoor meal preparation.",
  },
  {
    src: "/images/_MG_0042.jpg",
    alt: "Rainbow Rice Delight",
    description:
      "Close-up of a large quantity of cooked rice mixed with colorful vegetables like peas, carrots, and corn, ready for serving.",
  },
  {
    src: "/images/IMG_0089.jpg",
    alt: "Mission Statement",
    description:
      "Another shot of the back of a person wearing the same 'Believe to Receive Live to Give' t-shirt, reinforcing the message.",
  },
  // 2. Packaging Phase
  {
    src: "/images/IMG_0497.JPG",
    alt: "Meal Prep Magic",
    description:
      "Neatly stacked white styrofoam food containers on a table, ready for packaging or distribution of meals.",
  },
  {
    src: "/images/IMG_0459.jpg",
    alt: "Rice & Smiles Bowl",
    description:
      "Rows of white styrofoam containers, each filled with a complete meal of rice and a side dish, prepared for distribution.",
  },
  // 3. Community Gathering & Waiting
  {
    src: "/images/IMG_0054.jpg",
    alt: "The Waiting Game",
    description:
      "A group of children standing together outdoors, suggesting a gathering or queue for an event or meal distribution.",
  },
  {
    src: "/images/IMG_0085.jpg",
    alt: "Queue Champions",
    description:
      "A diverse group of people, including children and adults, standing in a line against a wall, indicating a waiting area for services or meals.",
  },
  {
    src: "/images/IMG_0299.jpg",
    alt: "The Great Food Line",
    description:
      "An aerial view of a long queue of children and adults waiting patiently outdoors, guided by barriers, for meal distribution.",
  },
  {
    src: "/images/IMG_0590.jpg",
    alt: "Queue Crew",
    description:
      "Lower body view of several individuals standing in a line, illustrating a queue for food or services.",
  },
  // 4. Distribution & Community Interaction
  {
    src: "/images/IMG_0455.jpg",
    alt: "Community Vibes",
    description:
      "A wide shot of a large community gathering outdoors, with many children and some adults, likely for a meal distribution event.",
  },
  {
    src: "/images/IMG_0548.jpg",
    alt: "Distribution Hands",
    description:
      "Shows people, including children, receiving food from a distribution point, with hands reaching out for the meals.",
  },
  // 5. Receiving & Eating
  {
    src: "/images/IMG_0437.jpg",
    alt: "Step-by-Step Happiness",
    description:
      "Two young boys sitting on steps, happily eating meals from white containers, illustrating direct food service to children in need.",
  },
  {
    src: "/images/IMG_0146.JPG",
    alt: "Meal Time Joy",
    description:
      "A close-up of a person, possibly a child, eating from a white takeaway container, showcasing the positive impact.",
  },
  {
    src: "/images/_MG_0019.jpg",
    alt: "Living the Motto",
    description:
      "Back view of a person wearing a white t-shirt with the motto 'Believe to Receive Live to Give', symbolizing the organization's mission.",
  },
  {
    src: "/images/IMG_0426.jpg",
    alt: "Kitchen Team Spirit",
    description:
      "Additional kitchen activities showing the team working together to prepare meals for the community.",
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
            className="group relative overflow-hidden rounded-lg shadow-md bg-gray-100"
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
