interface SpotifyCardProps {
  url: string;
}

export default function SpotifyCard({ url }: SpotifyCardProps) {
  return (
    <iframe
      src={url}
      width="100%"
      height="352"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
