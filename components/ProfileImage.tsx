import Image from 'next/image';

export default function ProfileImage({ src, alt }) {
  return (
    <div className="flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 rounded-full ring-4 ring-white/20 overflow-hidden relative">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority
        className="rounded-full"
      />
      <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full ring-2 ring-white" />
    </div>
  );
}
