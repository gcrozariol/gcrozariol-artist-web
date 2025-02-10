import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import projects from '../data/projects.json'
import { PlayCircle } from 'lucide-react'
import SpotifyCard from '@/components/spotify-card'

const year = new Date().getFullYear()

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
          <header className="w-screen p-12 bg-black">
            <p className="font-bold text-3xl">GUILHERME CROZARIOL</p>
            <span className="font-medium text-md">Drummer / Producer</span>
          </header>
          <div className="flex flex-col gap-10 p-20">
            <p className="font-bold text-3xl">DRUMMING</p>
            <Carousel className="w-full transition-all">
              <CarouselContent>
                {projects.youtube.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 hover:cursor-pointer"
                  >
                    <a href={item.url} target="_blank" className="p-2">
                      <Card className="overflow-hidden border-zinc-700">
                        <CardContent className="relative p-0">
                          <div className="absolute w-full h-full flex items-center justify-center opacity-0 hover:opacity-50 transition-all bg-black">
                            <PlayCircle color="white" size={56} />
                          </div>
                          <Image
                            src={item.cover}
                            alt=""
                            width={1280}
                            height={720}
                          />
                        </CardContent>
                      </Card>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-black" />
              <CarouselNext className="bg-black" />
            </Carousel>
          </div>
          <div className="flex flex-col gap-10 px-20 mb-20">
            <p className="font-bold text-3xl">PRODUCED / MIXED</p>
            {projects.spotify.map(({ id, url }) => (
              <SpotifyCard key={id} url={url} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
