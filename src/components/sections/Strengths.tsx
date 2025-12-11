import { strengths, languages } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Languages as LanguagesIcon } from "lucide-react";

const Strengths = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center font-headline md:text-4xl lg:text-5xl text-primary mb-12">
        Strengths & Languages
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl text-accent">
              <Zap className="h-5 w-5" />
              Core Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {strengths.map((strength) => (
              <Badge key={strength} variant="secondary" className="text-sm py-1 px-3">
                {strength}
              </Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl text-accent">
              <LanguagesIcon className="h-5 w-5" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
            {languages.map((lang) => (
              <li key={lang.name} className="flex justify-between">
                <span>{lang.name}</span>
                <span className="text-muted-foreground">{lang.proficiency}</span>
              </li>
            ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Strengths;
