import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-neutral to-primary text-white"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-secondary">
              Our Visionary Women
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Driving the Direction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="/Story.jpg"
                alt="Mina in the kitchen"
                className="rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </motion.div>

            <div className="space-y-6">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-bold text-2xl mb-4"
                  style={{ color: "hsl(var(--secondary))" }}
                >
                  From Struggle to Strength
                </h3>
                <p className="text-black leading-relaxed">
                  Mina lost her restaurant job during COVID and turned to
                  cleaning to support her three children. Hired by{" "}
                  <a
                    href="https://cat.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white underline transition-colors"
                  >
                    Cat.Design
                  </a>{" "}
                  founders in 2023, her exceptional cooking skills inspired the
                  Easter meal that started it all.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-bold text-2xl mb-4"
                  style={{ color: "hsl(var(--secondary))" }}
                >
                  Living the Dream
                </h3>
                <p className="text-black leading-relaxed">
                  Now leading a team of 10 local women, Mina has transformed
                  from housekeeper to head chef and community leader. Every
                  Saturday, she coordinates the preparation of 500 nutritious
                  meals, bringing hope and nourishment to Smutsville's children.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-bold text-2xl mb-4"
                  style={{ color: "hsl(var(--secondary))" }}
                >
                  Ripple Effect
                </h3>
                <p className="text-black leading-relaxed">
                  What began as one act of kindness has created employment for
                  10 women, fed hundreds of children, and sparked community
                  initiatives like children organizing street clean-ups while
                  waiting for their meals.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
