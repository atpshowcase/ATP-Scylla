import Image from "next/image";
import Link from "next/link";
import { bg_1 } from "../assets"; // Assuming bg_1 is the path to your image

export default function Showcase() {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url(https://www.karma-living.com.au/cdn/shop/collections/VOK_1550.jpg?v=1718089760)" }}>
      <Image
        src={bg_1}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-4xl text-white text-center px-6">
          A scent can transform a room, but a diffuser creates an atmosphere.        </h3>
      </div>
    </section>
  );
}
