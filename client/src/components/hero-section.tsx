import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users, Utensils, MapPin } from "lucide-react";
import { useDonationStats } from "@/hooks/use-donation-stats";

export default function HeroSection() {
  const { data: stats } = useDonationStats();

  const goal = 150000;
  const currentAmount = 61943;
  const progressPercentage = (currentAmount / goal) * 100;

  const handleDonateClick = () => {
    window.open(
      "https://www.backabuddy.co.za/campaign/help-feed-500-kids-with-minas-kitchen",
      "_blank"
    );
  };

  return (
    <section>
      {/* SEO-friendly H1 tag - visible to search engines but styled to match design */}
      <h1 className="absolute top-0 left-0 w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
        Mina's Kitchen – Feeding Smutsville's Future
      </h1>
      {/* Mobile/Tablet Layout - Video Full Screen */}
      <div className="lg:hidden">
        {/* Full Screen Video */}
        <div className="h-[70vh] w-full relative overflow-hidden bg-black">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://youtube.com/shorts/GaaY53nvQkI?si=E51uCPlkyViRcmtC"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay with main title */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.h1
              className="font-bold text-4xl md:text-6xl text-white text-center px-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Donate <br /> Feed <br /> Empower
            </motion.h1>
          </div>
        </div>

        {/* Content Section Below Video */}
        <div className="bg-white px-6 py-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="text-center mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Founded April 2024 • "Believe to receive, live to give"
              </span>
            </div>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-800 font-light leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              12,000+ meals served since April 2024.
            </motion.p>

            {/* Progress toward goal */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
                <div className="flex justify-center sm:justify-start items-center gap-2">
                  <span className="text-neutral font-semibold text-base sm:text-lg">
                    Crowdfunding Progress
                  </span>
                  <span className="text-neutral font-bold text-lg sm:text-xl">
                    41%
                  </span>
                </div>
                <div className="flex justify-center sm:justify-end items-center gap-2">
                  <span className="text-neutral font-bold text-base sm:text-xl">
                    R 61, 943
                  </span>
                  <span className="text-neutral font-semibold text-sm sm:text-lg">
                    / R 150,000
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 sm:h-6 mb-4">
                <motion.div
                  className="progress-bar h-4 sm:h-6 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Impact Stats */}
            <div className="mb-8 p-4 bg-warm-bg rounded-xl">
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden">
                {/* Top row with 2 cards */}
                <div className="flex justify-center gap-4 sm:gap-6 mb-4">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Utensils className="w-6 h-6 sm:w-7 sm:h-7 text-primary mr-2 sm:mr-3" />
                      <span className="font-bold text-xl sm:text-3xl lg:text-4xl text-neutral">
                        12,000+
                      </span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">
                      Meals Served
                    </span>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-2 sm:mr-3" />
                      <span className="font-bold text-xl sm:text-3xl lg:text-4xl text-neutral">
                        ±500
                      </span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">
                      Children Weekly
                    </span>
                  </motion.div>
                </div>

                {/* Bottom row with 1 centered card */}
                <div className="flex justify-center">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-success mr-2 sm:mr-3" />
                      <span className="font-bold text-xl sm:text-3xl lg:text-4xl text-neutral">
                        10
                      </span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-600">
                      Women Employed
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Utensils className="w-6 h-6 sm:w-7 sm:h-7 text-primary mr-2 sm:mr-3" />
                    <span className="font-bold text-xl sm:text-3xl lg:text-4xl text-neutral">
                      12,000+
                    </span>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-600">
                    Meals Served
                  </span>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-2 sm:mr-3" />
                    <span className="font-bold text-xl sm:text-3xl lg:text-4xl text-neutral">
                      ±500
                    </span>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-600">
                    Children Weekly
                  </span>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-success mr-2 sm:mr-3" />
                    <span className="font-bold text-xl sm:text-3xl lg:text-4xl text-neutral">
                      10
                    </span>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-gray-600">
                    Women Employed
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Donate Now Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button
                onClick={handleDonateClick}
                className="btn-primary px-12 py-6 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Heart className="mr-3 text-xl" />
                Donate Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout - Original Side-by-Side */}
      <div className="hidden lg:flex min-h-[92vh] h-[92vh]">
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
                  Crowdfunding Progress {Math.round(progressPercentage)}%
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
            <div className="flex justify-between items-center mb-8 p-6 bg-warm-bg rounded-xl">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Utensils className="w-5 h-5 text-primary mr-2" />
                  <span className="font-bold text-2xl text-neutral">
                    12,000+
                  </span>
                </div>
                <span className="text-sm text-gray-600">Meals Served</span>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-accent mr-2" />
                  <span className="font-bold text-2xl text-neutral">±500</span>
                </div>
                <span className="text-sm text-gray-600">Children Weekly</span>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5 text-success mr-2" />
                  <span className="font-bold text-2xl text-neutral">10</span>
                </div>
                <span className="text-sm text-gray-600">Women Employed</span>
              </motion.div>
            </div>

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
      </div>
    </section>
  );
}
