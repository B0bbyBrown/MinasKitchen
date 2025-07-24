import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users, Utensils, MapPin } from "lucide-react";
import { useDonationStats } from "@/hooks/use-donation-stats";

export default function HeroSection() {
  const { data: stats } = useDonationStats();

  const goal = 150000; // R150k challenge
  const currentAmount = 61943; // Total so far R56,423
  const progressPercentage = (currentAmount / goal) * 100;

  const handleDonateClick = () => {
    window.open(
      "https://www.backabuddy.co.za/campaign/help-feed-500-kids-with-minas-kitchen",
      "_blank"
    );
  };

  return (
    <section className="min-h-[92vh] h-[92vh] flex">
      {/* Left third - Clean MP4 Video Only */}
      <div className="w-1/3 h-full relative overflow-hidden flex items-center justify-center bg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right two-thirds - White background with content */}
      <div className="w-2/3 h-full bg-white flex items-center justify-end pr-16">
        <div className="max-w-2xl text-right w-full">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Founded April 2024 • "Believe to receive, live to give"
            </span>
          </motion.div>

          <motion.h1
            className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight text-neutral"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Donate <br /> Feed <br /> Empower
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-800 font-light leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            12,000+ meals served since April 2024.
          </motion.p>

          {/* Progress toward goal */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-neutral font-semibold text-lg">
                Crowdfunding Progress{" 49%"}
              </span>
              <span className="text-neutral font-bold text-xl">
                R {currentAmount.toLocaleString()} / R {goal.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
              <motion.div
                className="progress-bar h-6 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            className="flex justify-between items-center mb-8 p-6 bg-warm-bg rounded-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Utensils className="w-5 h-5 text-primary mr-2" />
                <span className="font-bold text-2xl text-neutral">12,000+</span>
              </div>
              <span className="text-sm text-gray-600">Meals Served</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-accent mr-2" />
                <span className="font-bold text-2xl text-neutral">±500</span>
              </div>
              <span className="text-sm text-gray-600">Children Weekly</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-success mr-2" />
                <span className="font-bold text-2xl text-neutral">10</span>
              </div>
              <span className="text-sm text-gray-600">Women Employed</span>
            </div>
          </motion.div>

          {/* Donate Now Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <Button
              onClick={handleDonateClick}
              className="btn-primary px-12 py-6 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Heart className="mr-3 text-xl" />
              Donate Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
