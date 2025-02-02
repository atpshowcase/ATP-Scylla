import Image from "next/image";
import Link from "next/link"; // Import Link component for Next.js routing
import { photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7 } from "../assets"; // Import images for activities

export default function Product() {
  return (
    <section className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">Best Sellers</h3>
      
      {/* Best Products Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product 1 */}
        <div className="relative w-full h-[600px] bg-gray-300 hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <Link target="_blank" href="https://shopee.co.id/Reed-Diffuser-50-ML-by-Scylla-Scent-Pengharum-Ruangan-i.115375471.24226006195?sp_atk=493b02ea-5dca-4de7-bcdd-9320cf818269" passHref>
            <div className="w-full h-full cursor-pointer">
              <Image
                src={photo_2} // Use the imported image
                alt="Best Product 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </Link>
        </div>

        {/* Product 2 */}
        <div className="relative w-full h-[600px] bg-gray-300 hover:scale-105 hover:shadow-lg transition-transform duration-300">
          <Link target="_blank" href="https://shopee.co.id/Reed-Diffuser-50-ML-by-Scylla-Scent-Pengharum-Ruangan-i.115375471.24226006195?sp_atk=493b02ea-5dca-4de7-bcdd-9320cf818269" passHref>
            <div className="w-full h-full cursor-pointer">
              <Image
                src={photo_1} // Use the imported image
                alt="Best Product 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
