import { motion } from "framer-motion";

const photos = [
  {
    src: "/IMG_0038.jpg",
    alt: "Children enjoying meals at Mina's Kitchen",
    category: "meals",
  },
  {
    src: "/IMG_0054.jpg",
    alt: "Food preparation and cooking activities",
    category: "preparation",
  },
  {
    src: "/IMG_0085.jpg",
    alt: "Team collaboration in the kitchen",
    category: "team",
  },
  {
    src: "/IMG_0124.jpg",
    alt: "Food distribution and community service",
    category: "distribution",
  },
  {
    src: "/IMG_0216.jpg",
    alt: "Kitchen staff working together",
    category: "team",
  },
  {
    src: "/IMG_0273.jpg",
    alt: "Children's smiles during meal time",
    category: "children",
  },
  {
    src: "/IMG_0299.jpg",
    alt: "Food preparation and cooking process",
    category: "preparation",
  },
  {
    src: "/IMG_0421.jpg",
    alt: "Additional community meal service",
    category: "community",
  },
  {
    src: "/IMG_0455.jpg",
    alt: "Children enjoying their nutritious meals",
    category: "children",
  },
];

export default function PhotoGallery() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="card-hover group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium">{photo.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
