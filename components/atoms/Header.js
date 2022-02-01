import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<div className="flex pt-12 p-4 justify-center text-white">
			<div className="flex space-x-12 text-3xl items-center		  ">
				<Link href="https://app.daohaus.club/dao/0x64/0xf3156e792ad65bab12d296f05f8a3c73ad809576/proposals">
					<a className="link link-underline" target="_blank">
						DAO
					</a>
				</Link>

				<Link href="https://docs.padawandao.com/">
					<a className="link link-underline" target="_blank">
						Documentation
					</a>
				</Link>

				<Link href="https://padawandao.com">
					<a className="link link-underline" target="_blank">
						Donate
					</a>
				</Link>

				<Link href="https://discord.gg/zQmEkzUF7z">
					<a className="link link-underline" target="_blank">
						Discord
					</a>
				</Link>
			</div>
		</div>
	);
}
