import { plans } from "@/lib/constans";
import * as motion from "motion/react-client";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
const Pricing = () => {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      aria-describedby="pricing-description"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground"
            id="pricing-title"
          >
            Affordable <span className="text-primary">Plans</span> for Everyone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            id="pricing-description"
          >
            Choose the perfect plan that fits your budget and fitness goals. All
            plans include a personalized workout program, nutrition plan, and
            support from our community of fitness enthusiasts.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              className="relative"
              key={plan.name}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
            >
              <Card
                className={`${
                  plan.popular
                    ? "border-primary border-2 ring-1 ring-primary/20"
                    : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center p-8 pb-0">
                  <h3 className="text-2xl font-bold font-heading">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div>
                    <span className="text-5xl font-black font-heading text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {" "}
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary  hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary/60 hover:bg-primary dark:text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            *All plans include a personalized workout program, nutrition plan,
            and support from our community of fitness enthusiasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
