import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const handleEmailClick = () => {
    window.open("mailto:Admin@minaskitchen.co.za", "_blank");
  };

  const handleBackaBuddyClick = () => {
    window.open(
      "https://www.backabuddy.co.za/campaign/help-feed-500-kids-with-minas-kitchen",
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-neutral text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-bold text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to join our mission? Have questions? We'd love to hear from
            you.
          </motion.p>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-4">Email</h3>
              <p className="text-gray-300 mb-4">Send us a message directly</p>
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center text-secondary font-semibold hover:text-white transition-colors"
              >
                <Mail className="mr-2" />
                Admin@minaskitchen.co.za
              </button>
            </motion.div>
          </div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-4">BackaBuddy Campaign</h3>
            <p className="text-gray-300 mb-6">
              Support us through our official crowdfunding campaign
            </p>
            <Button
              onClick={handleBackaBuddyClick}
              className="bg-secondary text-neutral px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-colors"
            >
              <ExternalLink className="mr-2" />
              Visit Our BackaBuddy Page
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
