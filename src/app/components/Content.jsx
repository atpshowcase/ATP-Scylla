import Image from "next/image";
import Link from "next/link";
import { bg_3 } from "../assets"; // Import images for activities
import { Instagram } from "lucide-react";

export default function Content() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-16">
      <div className="md:w-1/2 h-[400px] relative">
        <Image
          src={bg_3}
          alt="Relax"
          layout="fill" // Makes the image cover the entire div
          objectFit="cover" // Ensures the image scales without distortion
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold mb-4">
          Create Moments of Serenity with Scylla Scent
        </h3>
        <p className="text-gray-600 mb-4">
          Immerse yourself in the soothing essence of our handcrafted diffusers.
          Designed to bring warmth, balance, and relaxation, Scylla Scent transforms any space into a sanctuary of peace.
        </p>
        <p className="text-gray-600 mb-4">
          Made with care in Indonesia, our scents are more than just fragrances—they’re an experience.
        </p>
        <Link href="#" className="flex items-center text-red-600 font-semibold hover:underline">
          <Instagram className="w-5 h-5 mr-2" /> Discover the Collection on Instagram
        </Link>
      </div>

    </section>
  );
}
