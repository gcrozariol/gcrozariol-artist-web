import { PlayCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import Image from "next/image";

interface YouTubeCardProps {
  id: number;
  url: string;
  title: string;
  cover: string;
}

export default function YouTubeCard({ item }: { item: YouTubeCardProps }) {
  return (
    <CarouselItem
      key={item.id}
      className="md:basis-1/2 lg:basis-1/3 hover:cursor-pointer"
    >
      <a href={item.url} target="_blank" className="p-2">
        <Card className="overflow-hidden border-zinc-700">
          <CardContent className="relative p-0">
            <div className="absolute w-full h-full flex items-center justify-center opacity-0 hover:opacity-50 transition-all bg-black">
              <PlayCircle color="white" size={56} />
            </div>
            <Image src={item.cover} alt="" width={1280} height={720} />
          </CardContent>
        </Card>
      </a>
    </CarouselItem>
  );
}
