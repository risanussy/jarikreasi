import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  dark?: boolean;
};

export function BrandLogo({ compact = false, dark = false }: BrandLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Jarikreasi logo"
        width={compact ? 150 : 190}
        height={compact ? 52 : 66}
        priority
        className="h-auto w-[132px] object-contain sm:w-[150px]"
      />
      {!compact ? (
        <p className={`text-xs ${dark ? "text-white/60" : "text-[#5f5a52]"}`}>
          IT Company Profile
        </p>
      ) : null}
    </Link>
  );
}
