import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logoipsum-339.png"
        height={45}
        width={45}
        alt="logo"
        className=""
      />
    </Link>
  );
};
