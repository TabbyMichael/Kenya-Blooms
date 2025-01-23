import { Link } from 'react-router-dom';

interface SitemapSection {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Shop",
    links: [
      { name: "All Flowers", path: "/shop" },
      { name: "Premium Roses", path: "/shop/roses" },
      { name: "Wedding Collection", path: "/shop/wedding" },
      { name: "Seasonal Favorites", path: "/shop/seasonal" }
    ]
  },
  {
    title: "Customer Service",
    links: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
      { name: "Shipping Information", path: "/shipping" },
      { name: "Returns & Refunds", path: "/returns" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" }
    ]
  }
];

export function Sitemap() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 mb-12">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sitemapData.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-neutral-600 hover:text-rose-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}