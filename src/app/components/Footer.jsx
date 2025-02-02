import Image from "next/image";
import { bg_2 } from "../assets"; // Assuming bg_2 is the path to your image

export default function Footer() {
  return (
    <footer className="w-full p-4 bg-white shadow-md text-center text-gray-600">
      &copy; 2025 Scylla Scent. All rights reserved.
    </footer>
  );
}
