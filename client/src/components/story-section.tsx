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
              Our Story: The Spark that Ignited a Community
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              From Struggle to Community Impact
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
                  The Beginning
                </h3>
                <p className="text-black leading-relaxed">
                  What began as a simple act of kindness on Easter Sunday 2024
                  has since blossomed into a vital lifeline for the Smutsville
                  community. It all started when a young entrepreneurial couple,
                  who had recently moved to Sedgefield, partnered with their
                  housekeeper, Mina. Inspired by Mina's long-held dream of
                  becoming a chef and their shared commitment to the development
                  of South Africa's youth, they sponsored a hearty three-course
                  meal for 100 children in the local township.
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
                  The Spark
                </h3>
                <p className="text-black leading-relaxed">
                  The menu that day—braai'ed chicken, potato salad, savoury rice
                  and malva pudding—was more than just food; it was a symbol of
                  hope. The overwhelming gratitude of those children, who were
                  simply moved by the knowledge that someone cared, ignited a
                  spark that could not be extinguished. What was intended as a
                  once-off event quickly became a weekly mission.
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
                  Growing Impact
                </h3>
                <p className="text-black leading-relaxed">
                  From that day forward, Mina's Kitchen has grown into a
                  powerful force for change. Today, we proudly feed 500 children
                  every Saturday, having served over 12,000 nourishing meals in
                  our first year alone.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-bold text-2xl mb-4"
                  style={{ color: "hsl(var(--secondary))" }}
                >
                  Mina's Journey
                </h3>
                <p className="text-black leading-relaxed">
                  Mina's journey is at the heart of our story. A talented cook
                  with years of experience in local restaurant kitchens, she
                  lost her job during the COVID-19 pandemic and turned to
                  cleaning to support her three children. Hired by our founders
                  in 2023, her impressive culinary skills inspired the very
                  first Easter meal that set everything in motion. Today, she is
                  not just a chef living her dream; she is a leader, a mentor,
                  and the driving force behind a team of local women who are
                  changing lives, one meal at a time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
