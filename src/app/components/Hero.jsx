import Image from "next/image";
import { bg_2 } from "../assets"; // Assuming bg_2 is the path to your image

export default function Hero() {
  return (
    <section className="relative h-screen h-[600px]">
      <div className="absolute inset-0">
        <Image
          src={bg_2}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
        <h1 className="text-5xl md:text-7xl font-serif text-white text-center" style={{ fontFamily: "Daykids-rgRVy" }}>
          Diffuser Collection
        </h1>
      </div>
    </section>
  );
}
