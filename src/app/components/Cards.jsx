"use client";

import Link from "next/link";
import { bg_3 } from "../assets"; // Import images for activities
import { Instagram } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { photo_1, photo_2, photo_3, photo_4, photo_5, photo_6 } from "../assets"; // Import images for activities

export default function Cards() {
  const images = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true, // Keeps the first slide centered
    centerPadding: "20px", // Removes unnecessary padding
  };

  return (
    <section className="py-16 bg-gray-50 flex flex-col md:flex-row items-center justify-center">
  <div className="w-full md:w-1/2 p-5">
    <h2 className="text-3xl font-bold text-gray-800">
      Handcrafted Elegance, Pure Indonesian Serenity
    </h2>
    <p className="mt-4 text-gray-600">
      Introducing <strong>Scylla Scent</strong> – a collection of premium handmade diffusers crafted with love in Indonesia. Each piece is designed to bring harmony, relaxation, and a touch of nature into your space.
    </p>
    <p className="mt-2 text-gray-500">
      Infused with carefully selected scents, our diffusers blend artistry with functionality, creating a calming atmosphere for your home or workspace. Elevate your senses and experience the beauty of Indonesian craftsmanship with <strong>Scylla Scent</strong>.
    </p>
    <br />
    <Link href="#" className="flex items-center text-red-600 font-semibold hover:underline">
      <Instagram className="w-5 h-5 mr-2" />
      Discover the Collection on Instagram
    </Link>
  </div>

  <div className="w-full md:w-1/2 mt-8 md:mt-0">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex items-center justify-center pr-2 pl-2">
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            width={200} // Width of individual image
            height={200} // Height of individual image
            className="object-cover rounded-lg mx-auto" // Clean design
          />
        </div>
      ))}
    </Slider>
  </div>
</section>

  );
}
