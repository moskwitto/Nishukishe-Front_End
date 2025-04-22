import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobilemenu";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 h-[56px] w-full border-b border-black/50 bg-blue-400">
      <div
        className="mx-auto flex h-[56px] items-center justify-between"
        style={{
          maxWidth: "1440px",
        }}
      >
        {/* left */}
        <div>
          {/* logo */}
          <Link href={"/"}>
            <Image src="/logo.jpg" alt="logo" width={35} height={35} />
          </Link>

          {/* xl navigation*/}
          <nav className="hidden xl:block">
            <ul className="flex items-center justify-start gap-[35px]">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/search"}>Search</Link>
              </li>
              <li>
                <Link href={"/saccos/login"}>Saccos</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* right */}
        <div>
          {/* help */}
          <div className="hidden xl:block">
            <Link
              href={"/help"}
              className="flex items-center justify-center bg-blue-300"
            >
              <span className="text-lg text-white">Help</span>
            </Link>
          </div>

          {/* navigation */}
          <div className="block xl:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
