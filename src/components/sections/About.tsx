import Image from "next/image";
import { profileSummary } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const profilePic = PlaceHolderImages.find(img => img.id === "profile-pic");

  return (
    <>
      <h2 className="text-3xl font-bold text-center font-headline md:text-4xl lg:text-5xl text-primary mb-12">
        About Me
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Card className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 p-2 shadow-lg shadow-primary/20">
            <CardContent className="p-0 rounded-full overflow-hidden w-full h-full">
              {profilePic && (
                <Image
                  src={profilePic.imageUrl}
                  alt={profilePic.description}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={profilePic.imageHint}
                />
              )}
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {profileSummary}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
