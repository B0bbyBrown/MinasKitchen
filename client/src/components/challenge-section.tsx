import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChefHat, GraduationCap, CalendarDays, Target } from "lucide-react";
import { useDonationStats } from "@/hooks/use-donation-stats";

export default function ChallengeSection() {
  const { data: stats } = useDonationStats();

  const challengeGoal = 150000;
  const currentAmount = 61943;
  const challengePercentage = Math.min(
    (currentAmount / challengeGoal) * 100,
    100
  );

  const handleJoinChallenge = () => {
    window.open(
      "https://www.backabuddy.co.za/campaign/help-feed-500-kids-with-minas-kitchen",
      "_blank"
    );
  };

  return (
    <section
      className="py-16 bg-gradient-to-r from-secondary to-accent"
      id="challenge"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-bold text-4xl md:text-5xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Target className="inline mr-4" />
              First R150K Fundraising Challenge
            </motion.h2>

            <motion.p
              className="text-xl mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Help us reach our first major milestone! When we hit R150,000,
              we'll unlock:
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="bg-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <ChefHat className="text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">
                  Professional Kitchen Setup
                </h3>
                <p className="text-sm opacity-90">
                  Start building our permanent kitchen facility
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <GraduationCap className="text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">
                  Training Programs
                </h3>
                <p className="text-sm opacity-90">
                  Professional kitchen training for our team
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <CalendarDays className="text-4xl mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Weekday Meals</h3>
                <p className="text-sm opacity-90">
                  Expand to feeding children during weekdays
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white/20 rounded-2xl p-6 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">Challenge Progress</span>
                <span className="font-bold">
                  R {currentAmount.toLocaleString()} / R{" "}
                  {challengeGoal.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-6">
                <motion.div
                  className="bg-white h-6 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${challengePercentage}%` }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-sm mt-3 opacity-90">
                49% to unlock milestone rewards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={handleJoinChallenge}
                className="bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Join the Challenge
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
