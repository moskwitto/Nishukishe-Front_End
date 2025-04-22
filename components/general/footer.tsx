import Link from "next/link";
import EmailNewsletterForm from "./newsletterform";
import Image from "next/image";

interface LinkData {
  href: string;
  label: string;
}

interface SocialMediaLink extends LinkData {
  logo: string;
}

const quickLinks: LinkData[] = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/help",
    label: "Help Center",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
  {
    href: "/faqs",
    label: "FAQs",
  },
];

const otherLinks: LinkData[] = [
  {
    href: "/privacy",
    label: "Privacy",
  },
  {
    href: "/terms",
    label: "Terms",
  },
];

const socialMediaLinks: SocialMediaLink[] = [
  {
    href: "facebook.com/profile",
    label: "Facebook",
    logo: "/facebook.svg",
  },
  {
    href: "instagram.com/profile",
    label: "Instagram",
    logo: "/instagram.svg",
  },
  {
    href: "x.com/profile",
    label: "X (Twitter)",
    logo: "/twitter.svg",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      {/* main */}
      <div className="min-h-[120px]" style={{ maxWidth: "1440px" }}>
        {/* newsletter */}
        <div>
          <h3 className="text-center text-lg font-semibold text-white">
            Subscibe to our newsletter
          </h3>
          <EmailNewsletterForm />
        </div>

        {/* links */}
        <div>
          <ul className="flex flex-col items-center justify-start gap-[20px] md:flex-row md:justify-around md:gap-0">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link className="text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-start gap-[30px] xl:flex-row xl:justify-between xl:gap-0">
          {/* logo */}
          <div>
            <Image src="/logo.jpg" alt="logo" width={70} height={70} />
          </div>

          {/* year and links */}
          <div>
            <ul className="flex flex-col items-center justify-start gap-[20px] text-sm md:flex-row md:justify-center md:gap-0">
              <li>
                <p className="text-white">
                  &copy; {new Date().getFullYear()} Nishukishe
                </p>
              </li>
              {otherLinks.map((link, idx) => (
                <li key={idx} className="list-disc text-white">
                  <Link className="text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* social media */}
          <div>
            <ul className="flex flex-col items-center justify-start gap-[20px] md:flex-row md:justify-center md:gap-[24px]">
              {socialMediaLinks.map((link, idx) => (
                <li key={idx} className="list-disc text-white">
                  <a target="_blank" rel="norefferer" href={link.href}>
                    <Image
                      src={link.logo}
                      alt={link.label}
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
