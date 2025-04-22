"use client";
import MenuIcon from "@/icons/menu";
import { MouseEvent, MouseEventHandler, useCallback, useState } from "react";
import Modal from "./modal";
import CloseIcon from "@/icons/close";
import Link from "next/link";
import { useRouter } from "next/router";

interface LinkData {
  href: string;
  label: string;
}

const navlinks: LinkData[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/search",
    label: "Search",
  },
  {
    href: "/saccos/login",
    label: "Saccos Sign In",
  },
  {
    href: "/saccos/register",
    label: "Saccos Sign Up",
  },
];

export default function MobileMenu() {
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setClicked((prev) => !prev);
  };

  const navClickHandler = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, url: string) => {
      e.preventDefault();

      // close nav
      setTimeout(() => {
        setClicked(false);
      }, 100);

      // redirect
      router.push(url);
    },
    [],
  );

  return (
    <div className="block xl:hidden">
      <button
        onClick={clickHandler}
        aria-label={"Open navigation"}
        className="block h-[30px] w-[30px]"
      >
        <MenuIcon />
      </button>

      {/* modal */}
      {clicked && (
        <Modal>
          <div className="flex h-screen w-screen items-start justify-end">
            <div className="absolute h-screen w-5/12 bg-white pt-[56px]">
              {/* close button */}
              <button
                onClick={clickHandler}
                aria-label={"Close navigation"}
                className="absolute top-2 left-2 z-50 block h-[30px] w-[30px] rounded-full bg-white text-black"
              >
                <CloseIcon />
              </button>

              {/* navigation */}
              <nav>
                <ul className="flex flex-col items-center justify-start gap-[35px]">
                  {navlinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        onClick={(e) => navClickHandler(e, link.href)}
                        className="flex items-center justify-start pl-[10px] text-lg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
