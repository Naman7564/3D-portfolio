import { skills } from "@/lib/data";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCard } from "../AnimatedCard";

const Skills = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center font-headline md:text-4xl lg:text-5xl text-primary mb-12">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory) => (
          <AnimatedCard key={skillCategory.category}>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-accent">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {skillCategory.items.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    {skill.icon && <skill.icon className="h-6 w-6 text-primary" />}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </>
  );
};

export default Skills;
