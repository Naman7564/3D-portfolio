import { education } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { AnimatedCard } from "../AnimatedCard";

const Education = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center font-headline md:text-4xl lg:text-5xl text-primary mb-12">
        Education
      </h2>
      <div className="flex justify-center">
        <AnimatedCard className="w-full max-w-2xl">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">{education.degree}</CardTitle>
                <p className="text-accent">{education.university}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{education.period}</p>
          </CardContent>
        </AnimatedCard>
      </div>
    </>
  );
};

export default Education;
