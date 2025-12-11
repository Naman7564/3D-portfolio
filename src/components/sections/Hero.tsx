import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import HeroScene from "../three/HeroScene";

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-primary">
          {personalInfo.role}
        </p>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {personalInfo.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">
              <Send className="mr-2" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
