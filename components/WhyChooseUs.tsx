import { Calendar, CheckCircle, TrendingUp, Users } from "lucide-react";
import * as motion from "motion/react-client";

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Certified Personal Trainers",
      description:
        "We have a team of experienced certified personal trainers who are dedicated to helping you achieve your fitness goals.",
    },
    {
      icon: TrendingUp,
      title: "Personalized Workout & Diet Plans",
      description:
        "We provide personalized workout and diet plans to help you achieve your fitness goals.",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description:
        "We offer flexible scheduling options to fit your busy schedule.",
    },
    {
      icon: Users,
      title: "Community Support 7 Progress Tracking",
      description:
        "Join our community of fitness enthusiasts and support each other on your fitness journey.",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      aria-describedby="about-description"
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
            id="about-title"
          >
            Why Choose <span className="text-primary">Bykouski FitPro</span>{" "}
            Fitness
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            id="about-description"
          >
            We offer a wide range of fitness programs to help you achieve your
            fitness goals. Our programs are designed to be engaging,
            challenging,
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className="flex flex-col items-center gap-4 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/20 inline-flex text-primary items-center justify-center group-hover:bg-primary group-hover:text-foreground transition-colors duration-300 mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.18,
                }}
              >
                <feature.icon className="h-8 w-8 " />
              </motion.div>

              <motion.h3
                className="text-xl font-bold font-heading mb-4 text-foreground"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.14,
                }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.14,
                }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
