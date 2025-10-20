import * as motion from "motion/react-client";
import Image from "next/image";
import { programs } from "@/lib/constans";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Programs() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-title"
      aria-describedby="programs-description"
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
            id="programs-title"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            id="programs-description"
          >
            Choose from our comprehensive range of fitness programs designed to
            help you achieve your fitness goals.
          </motion.p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {programs.map((program, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer h-full"
              key={program.title}
            >
              <Card className="p-0 transition-shadow duration-300 hover:shadow-2xl flex flex-col h-full">
                <div className="relative overflow-hidden rounded-t-lg w-full h-60 md:h-56 lg:h-40">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 pt-0 flex flex-col flex-1">
                  <motion.h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </motion.h3>
                  <motion.p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    {program.description}
                  </motion.p>
                  <div>
                    <Button
                      variant="outline"
                      className="w-full transition-colors duration-300 group-hover:bg-primary dark:group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
