import { experience } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center font-headline md:text-4xl lg:text-5xl text-primary mb-16">
        Experience
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        {experience.map((job, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-5/12">
              <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{job.role}</CardTitle>
                  <CardDescription className="text-accent">{job.company}</CardDescription>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {resp.icon && <resp.icon className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />}
                        <span className="text-muted-foreground">{resp.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="hidden md:flex w-2/12 justify-center">
              <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center shadow-md">
                <Briefcase className="h-6 w-6" />
              </div>
            </div>
             <div className="w-full md:w-5/12"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
