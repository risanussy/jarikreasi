"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand-logo";
import { navItems } from "@/data/company";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(247,246,241,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <BrandLogo />

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-[#111111] text-[#f7f6f1]"
                    : "text-[#3f3a34] hover:bg-white hover:text-[#111111]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/kontak"
          className="rounded-full border border-[#111111] px-4 py-2 text-sm text-[#111111] transition hover:bg-[#111111] hover:text-[#f7f6f1]"
        >
          Konsultasi
        </Link>
      </div>
    </header>
  );
}
