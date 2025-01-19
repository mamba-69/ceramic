// frontend/src/components/layout/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        {/* Footer content */}
        <div className="mb-4">
          <p>&copy; 2025 Tile Website. All Rights Reserved.</p>
        </div>

        {/* Footer Links */}
        <div className="space-x-4">
          <Link href="/about">
            <a className="hover:text-gray-400 transition duration-300">About Us</a>
          </Link>
          <Link href="/support">
            <a className="hover:text-gray-400 transition duration-300">Support</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
          </Link>
          <Link href="/terms-of-service">
            <a className="hover:text-gray-400 transition duration-300">Terms of Service</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
