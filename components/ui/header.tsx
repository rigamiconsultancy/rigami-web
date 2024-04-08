import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <h1 className="text-2xl font-bold tracking-wide">
                RiGaMi Consultancy
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-purple-600 text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/hero"
                  className="font-medium hover:text-purple-600 text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-purple-600 text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-purple-600 text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
