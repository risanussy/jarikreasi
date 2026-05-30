import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { company, navItems } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#111111] text-[#f7f6f1]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div className="space-y-4">
          <BrandLogo dark />
          <p className="max-w-xl text-sm leading-7 text-white/70">
            {company.description}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">
            Navigasi
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">
            Kontak
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <p>{company.headquarters}</p>
            <p>{company.email}</p>
            <p>{company.phone}</p>
            <p>{company.hours}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
