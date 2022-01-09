import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex p-12  justify-center ">
      <div className="flex space-x-12 text-3xl items-center		  ">
        <Link href="/dao">
          <a className="link link-underline  link-underline-black text-black">
            DAO
          </a>
        </Link>

        <Link href="/docs">
          <a className="link link-underline link-underline-black text-black">
            Documentation
          </a>
        </Link>

        <Link href="/donate">
          <a className="link link-underline link-underline-black text-black">
            Donate
          </a>
        </Link>

        <Link href="https://discord.com/invite/HM97NeDJ5P">
          <a className="link link-underline link-underline-black text-black">
            Discord
          </a>
        </Link>
      </div>
    </div>
  );
}
