import Link from "next/link";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/legal", label: "Legal" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="font-brand text-sm font-semibold tracking-tight">
              mapped technologies
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Research-grade software for medical science.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Company
              </p>
              <ul className="mt-3 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Products
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="https://mappedresearch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    mapped
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mapped Technologies LLC. 30 N
            Gould St, STE R, Sheridan, WY 82801, USA.
          </p>
          <p className="text-xs text-muted-foreground">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
