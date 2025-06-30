import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import CostBreakdownChart from "./cost-breakdown-chart";
import type { ImpactMetrics } from "@shared/schema";

const MetricCard = ({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) => (
  <motion.div
    className="text-center card-hover bg-gradient-to-br from-warmBg to-white p-6 rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
  >
    <motion.div
      className="text-4xl md:text-5xl font-bold text-primary mb-2 number-counter"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.3 }}
      viewport={{ once: true }}
    >
      {value}
    </motion.div>
    <div className="text-sm md:text-base text-gray-600 font-medium">
      {label}
    </div>
  </motion.div>
);

export default function ImpactMetrics() {
  const { data: metrics } = useQuery<ImpactMetrics>({
    queryKey: ["/api/impact-metrics"],
  });

  return (
    <section className="py-16 bg-white" id="impact">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-5xl text-neutral mb-4">
            Our Growing Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every donation creates ripples of change across our community
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <MetricCard
            value={`${metrics?.mealsServed?.toLocaleString() || "12,000"}+`}
            label="Meals Served"
            delay={0}
          />
          <MetricCard
            value={`${metrics?.childrenFed || 500}`}
            label="Kids Fed Weekly"
            delay={0.1}
          />
          <MetricCard
            value={`${metrics?.womenEmployed || 10}`}
            label="Women Employed"
            delay={0.2}
          />
        </div>

        {/* Cost Breakdown Chart */}
        <motion.div
          className="bg-gradient-to-br from-warmBg to-white rounded-3xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-2xl md:text-3xl text-neutral mb-6 text-center">
            Where Your Money Goes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <CostBreakdownChart />
            </div>
            <motion.div
              className="order-1 md:order-2 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span className="font-medium">Food & Ingredients</span>
                </div>
                <span className="font-bold text-primary">60%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-success rounded-full mr-3"></div>
                  <span className="font-medium">Team Wages</span>
                </div>
                <span className="font-bold text-success">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-4 h-4"
                    style={{
                      backgroundColor: "hsl(39, 77%, 67%)",
                      borderRadius: "9999px",
                      marginRight: "0.75rem",
                    }}
                  ></div>
                  <span className="font-medium">Packaging</span>
                </div>
                <span
                  className="font-bold"
                  style={{ color: "hsl(39, 77%, 67%)" }}
                >
                  10%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-4 h-4"
                    style={{
                      backgroundColor: "hsl(10, 71%, 62%)",
                      borderRadius: "9999px",
                      marginRight: "0.75rem",
                    }}
                  ></div>
                  <span className="font-medium">Ops & Transport</span>
                </div>
                <span
                  className="font-bold"
                  style={{ color: "hsl(10, 71%, 62%)" }}
                >
                  10%
                </span>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl border-l-4 border-primary">
                <p className="text-sm text-gray-600">
                  <strong>Each meal costs R40 per child</strong> - your donation
                  goes directly to nourishing young lives.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
