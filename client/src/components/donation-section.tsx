import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Heart, Calendar, Wrench, Truck, HandHeart } from "lucide-react";

const amountOptions = [
  { amount: 40, description: "Feeds 1 child for 1 week" },
  { amount: 160, description: "Feeds 1 child for 1 month" },
  { amount: 450, description: "Most popular amount", isPopular: true },
  { amount: 2000, description: "Feeds 50 children" },
];

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(450);
  const [customAmount, setCustomAmount] = useState<string>("");

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonateClick = (isMonthly = false) => {
    window.open('https://www.backabuddy.co.za/campaign/help-feed-500-kids-with-minas-kitchen', '_blank');
  };

  return (
    <section className="py-16 bg-white" id="donate">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-4xl md:text-5xl text-neutral mb-4">Make a Difference Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation directly feeds children and empowers women in Smutsville. Choose an amount that works for you.
            </p>
          </motion.div>

          {/* Donation Amount Cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {amountOptions.map((option, index) => (
              <motion.div
                key={option.amount}
                className={`bg-gradient-to-br from-warmBg to-white p-6 rounded-2xl border-2 transition-all cursor-pointer card-hover ${
                  selectedAmount === option.amount 
                    ? 'border-primary bg-primary/10' 
                    : 'border-transparent hover:border-primary'
                }`}
                onClick={() => handleAmountSelect(option.amount)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">R{option.amount}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                  {option.isPopular && (
                    <div className="bg-primary text-white text-xs px-2 py-1 rounded-full mt-2">Average</div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Amount Input */}
          <motion.div 
            className="bg-gradient-to-br from-warmBg to-white rounded-3xl p-8 shadow-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto">
              <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">R</span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="pl-8 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary"
                  min="20"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">Minimum donation: R20</p>
            </div>
          </motion.div>

          {/* Donation Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div 
              className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 border border-success/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl text-success mb-4">
                <Calendar className="inline mr-2" />
                Monthly Giving
              </h3>
              <p className="text-gray-600 mb-4">Provide consistent support with automatic monthly donations. Cancel anytime.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li><Check className="inline text-success mr-2 w-4 h-4" />Reliable funding for meal planning</li>
                <li><Check className="inline text-success mr-2 w-4 h-4" />Priority updates on our progress</li>
                <li><Check className="inline text-success mr-2 w-4 h-4" />Tax receipt for every donation</li>
              </ul>
              <Button 
                onClick={() => handleDonateClick(true)}
                className="w-full bg-success text-white py-3 rounded-xl font-semibold hover:bg-success/90 transition-colors"
              >
                Set Up Monthly Giving
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl text-primary mb-4">
                <Heart className="inline mr-2" />
                One-Time Gift
              </h3>
              <p className="text-gray-600 mb-4">Make an immediate impact with a single donation of any amount.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li><Check className="inline text-primary mr-2 w-4 h-4" />Instant impact on our community</li>
                <li><Check className="inline text-primary mr-2 w-4 h-4" />Secure payment processing</li>
                <li><Check className="inline text-primary mr-2 w-4 h-4" />Immediate donation receipt</li>
              </ul>
              <Button 
                onClick={() => handleDonateClick(false)}
                className="w-full btn-primary py-3 rounded-xl font-semibold"
              >
                Donate Once
              </Button>
            </motion.div>
          </div>

          {/* Other Ways to Help */}
          <motion.div 
            className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 border border-secondary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-2xl text-neutral mb-6 text-center">Other Ways to Support</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-secondary text-2xl" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Equipment Donations</h4>
                <p className="text-sm text-gray-600">Industrial ovens, pots, pans, and serving equipment</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-accent text-2xl" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Vehicle Support</h4>
                <p className="text-sm text-gray-600">Reliable transport for supplies and equipment</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="text-success text-2xl" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Professional Services</h4>
                <p className="text-sm text-gray-600">Accounting, marketing, legal, and training support</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
