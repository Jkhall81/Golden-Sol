import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/real_logo.png"
        height={125}
        width={125}
        alt="logo"
        className=""
      />
    </Link>
  );
};
