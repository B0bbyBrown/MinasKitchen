import { motion } from "framer-motion";

const communityImpactPhotos = [
  {
    src: "/_MG_0019.jpg",
    alt: "Community meal distribution",
    description: "Distributing meals to families in need",
  },
  {
    src: "/_MG_0042.jpg",
    alt: "Children gathering for meals",
    description: "Children coming together for nutritious meals",
  },
  {
    src: "/IMG_0149.jpg",
    alt: "Community engagement activities",
    description: "Engaging with the community during meal service",
  },
  {
    src: "/IMG_0485.jpg",
    alt: "Additional community service",
    description: "More community meal distribution",
  },
  {
    src: "/IMG_0548.jpg",
    alt: "Community gathering",
    description: "Community members gathering for meals",
  },
  {
    src: "/IMG_0590.jpg",
    alt: "Children's smiles and joy",
    description: "The joy and smiles of children receiving meals",
  },
];

export default function CommunityImpactGallery() {
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
            Community Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every meal creates a ripple effect of hope, joy, and community
            building
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityImpactPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-xl mb-3">{photo.alt}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl md:text-3xl text-neutral mb-4">
              The Ripple Effect
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
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
