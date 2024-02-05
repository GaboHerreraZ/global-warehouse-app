import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-main text-white">
      <ul className="flex gap-10 px-32 py-2 text-sm font-bold">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about-us">ABOUT US</Link>
        </li>
        <li>
          <Link href="/what-we-do">WHAT WE DO</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};
