import Link from "next/link";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#3e4458] bg-[#282f43] py-12 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-[10%]">
        <div className="text-center md:text-left">
          <p>&copy; {currentYear} Pynn. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:justify-end">
          <Link href="/privacy" className="transition-colors hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-gray-300">
            Terms of Service
          </Link>
          <Link href="/contact" className="transition-colors hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
