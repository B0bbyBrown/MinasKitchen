import { motion } from "framer-motion";

const behindScenesPhotos = [
  {
    src: "/IMG_0039.jpg",
    alt: "Kitchen preparation work",
    description: "Preparing ingredients for the day's meals",
  },
  {
    src: "/IMG_0058.jpg",
    alt: "Cooking process in action",
    description: "The team working together to cook nutritious meals",
  },
  {
    src: "/IMG_0059.jpg",
    alt: "Food preparation activities",
    description: "Careful preparation ensures quality meals",
  },
  {
    src: "/IMG_0060.jpg",
    alt: "Kitchen team collaboration",
    description: "Our dedicated team of women working together",
  },
  {
    src: "/IMG_0089.jpg",
    alt: "Meal packaging process",
    description: "Packaging meals for distribution",
  },
  {
    src: "/IMG_0104.jpg",
    alt: "Community meal service",
    description: "Serving meals to the community",
  },
  {
    src: "/IMG_0426.jpg",
    alt: "Additional kitchen activities",
    description: "More behind-the-scenes kitchen work",
  },
  {
    src: "/IMG_0431.jpg",
    alt: "Team coordination",
    description: "Coordinating meal preparation and distribution",
  },
  {
    src: "/IMG_0437.jpg",
    alt: "Food service to children",
    description: "Delivering meals to children in need",
  },
  {
    src: "/IMG_0443.jpg",
    alt: "Community engagement",
    description: "Engaging with the community during meal service",
  },
  {
    src: "/IMG_0459.jpg",
    alt: "Children receiving meals",
    description: "Children happily receiving their nutritious meals",
  },
  {
    src: "/IMG_0467.jpg",
    alt: "More community service",
    description: "Continuing our mission to feed the community",
  },
];

export default function BehindScenesGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-5xl text-neutral mb-4">
            Behind the Scenes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our dedicated team works every Saturday to bring hope and
            nourishment to our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {behindScenesPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-2">{photo.alt}</h3>
                    <p className="text-sm text-gray-200">{photo.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every Saturday, our team of 10 women works tirelessly to prepare,
            cook, and distribute 500 nutritious meals. This behind-the-scenes
            look shows the dedication, teamwork, and love that goes into every
            meal we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
