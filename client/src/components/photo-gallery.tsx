import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const photos = [
  {
    src: "/images/IMG_0038.png",
    alt: "Children enjoying meals at Mina's Kitchen",
    category: "meals",
  },
  {
    src: "/images/IMG_0085.png",
    alt: "Team collaboration in the kitchen",
    category: "team",
  },
  {
    src: "/images/IMG_0125 1.png",
    alt: "Food distribution and community service",
    category: "distribution",
  },
  {
    src: "/images/IMG_0087 1.png",
    alt: "Kitchen staff working together",
    category: "team",
  },
  {
    src: "/images/IMG_0089.png",
    alt: "Children's smiles during meal time",
    category: "children",
  },
  {
    src: "/images/IMG_0146.png",
    alt: "Food preparation and cooking process",
    category: "preparation",
  },
  {
    src: "/images/IMG_0372 1.png",
    alt: "Additional community meal service",
    category: "community",
  },
  {
    src: "/images/IMG_0437.png",
    alt: "Children enjoying their nutritious meals",
    category: "children",
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

export default function PhotoGallery() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  // Memoize the photo grid to prevent unnecessary re-renders
  const photoGrid = useMemo(
    () => (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="card-hover group relative overflow-hidden rounded-2xl"
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.15 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 ${
                  loadedImages.has(index) ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                style={{
                  imageRendering: "crisp-edges",
                }}
              />
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">{photo.alt}</p>
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
    <section className="py-16 warm-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-5xl text-neutral mb-4">
            See the Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every Saturday brings smiles, hope, and nourishment to our community
          </p>
        </motion.div>

        {photoGrid}
      </div>
    </section>
  );
}
