import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className="text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          We’re a full services agency designed for driven creatives.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          libero nulla. Integer scelerisque velit nec libero tristique, at
          iaculis ex pulvinar.
        </p>
      </section>
  );
}
