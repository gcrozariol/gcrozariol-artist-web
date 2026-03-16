import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projects from "../data/projects.json";
import { PlayCircle } from "lucide-react";
import SpotifyCard from "@/components/spotify-card";
import YouTubeCard from "@/components/youtube-card";
import { url } from "inspector";

export default function Home() {
  return (
    <>
      <main className="min-h-screen text-white">
        <div className="fixed inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="Artist background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <header className="w-screen pl-12 py-12 bg-black">
            <p className="font-bold text-2xl">GUILHERME CROZARIOL</p>
            <span className="font-medium text-md">Drummer / Producer</span>
          </header>
          <article className="flex flex-col gap-10 py-10 px-10 lg:px-20">
            <p className="font-bold text-3xl">DRUMMING</p>
            <div className="px-5 lg:px-0">
              <Carousel className="w-full transition-all">
                <CarouselContent>
                  {projects.youtube.map((item) => (
                    <YouTubeCard key={item.id} item={item} />
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-black" />
                <CarouselNext className="bg-black" />
              </Carousel>
            </div>
          </article>
          <article className="flex flex-col gap-10 px-10 lg:px-20 mb-20">
            <p className="font-bold text-3xl">PRODUCED / MIXED</p>
            {projects.spotify.map((item) => (
              <SpotifyCard key={item.id} url={item.url} />
            ))}
          </article>
        </div>
      </main>
    </>
  );
}
