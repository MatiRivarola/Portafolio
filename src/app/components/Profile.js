import Image from "next/image";

export default function Profile() {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/profilephoto.png"
        priority
        width={700}
        height={700}
        alt="Profile photo Matias Rivarola rivarola matias"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
}
