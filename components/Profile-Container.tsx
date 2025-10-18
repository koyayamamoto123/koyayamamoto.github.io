import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./Social-Links";

export default function ProfileContainer() {
  return (
    <Card className="border border-border rounded-sm shadow-none">
      <CardContent className="p-6 text-center">
        <div className="relative w-48 h-48 mx-auto mb-4">
          <Image
            src="/images/Koya_Image1.jpg"
            alt="Koya Yamamoto Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-2 border-border"
          />
        </div>
        <h2 className="text-3xl font-bold font-serif mb-1">Koya Yamamoto</h2>
        <p className="text-lg text-muted-foreground">
          PhD Candidate | Aerospace Engineering
        </p>
        <p className="text-sm text-muted-foreground">College Station, TX</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="mailto:koyayamamoto123@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" aria-label="email">
              <Mail className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://github.com/koyayamoto123" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" aria-label="github">
              <Github className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/koyayamamoto" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" aria-label="linkedin">
              <Linkedin className="w-5 h-5" />
            </Button>
          </Link>
        </div>
        {/* If you want to keep your other social links, keep <SocialLinks/> below */}
        {/* <SocialLinks/> */}
      </CardContent>
    </Card>
  );
}
