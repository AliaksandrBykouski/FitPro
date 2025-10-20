import { testimonials } from "@/lib/constans";
import * as motion from "motion/react-client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  const MAX_STARS = 5;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      aria-describedby="testimonials-description"
      className="py-20 bg-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground"
            id="testimonials-title"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            id="testimonials-description"
          >
            Real transformations from our real clients and their success stories
            who chose to change their lives with us and our programs.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="group"
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, delay: 0 },
              }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="relative mb-6 w-24 h-30 mx-auto"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="flex justify-center mb-4 gap-1"
                  >
                    {Array.from({ length: MAX_STARS }).map((_, starIndex) => {
                      const filled = starIndex < testimonial.rating;
                      return (
                        <Star
                          key={starIndex}
                          className={
                            filled
                              ? "w-5 h-5 text-yellow-300"
                              : "w-5 h-5 text-neutral-300"
                          }
                          fill={filled ? "currentColor" : "none"}
                        />
                      );
                    })}
                  </motion.div>

                  <motion.blockquote
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-lg text-semibold font-heading text-foreground mb-4"
                  >
                    {testimonial.story}
                  </motion.blockquote>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    - {testimonial.details}
                  </motion.p>

                  <motion.cite
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="font-bold text-primary italic"
                  >
                    {" "}
                    - {testimonial.name}
                  </motion.cite>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
