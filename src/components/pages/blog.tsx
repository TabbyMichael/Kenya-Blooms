import { useState } from 'react';
import { Pagination } from '../ui/pagination';
import { Clock, Tag, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const categories = [
  'Flower Care Tips',
  'Wedding Inspirations',
  'Seasonal Arrangements',
  'Kenyan Flower Stories',
  'Home Decoration',
  'Event Planning'
];

const blogTitles = [
  "The Art of Growing Kenyan Roses: From Soil to Bloom",
  "Understanding Different Types of Lilies and Their Care",
  "Seasonal Guide to Kenyan Flower Varieties",
  "Creating the Perfect Wedding Bouquet",
  "How to Make Your Cut Flowers Last Longer",
  "The History of Flower Farming in Kenya",
  "Top 10 Most Popular Kenyan Rose Varieties",
  "Sustainable Flower Growing Practices",
  "Color Psychology in Flower Arrangements",
  "Tips for Preserving Wedding Bouquets"
];

const featuredPosts: BlogPost[] = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  title: blogTitles[index % blogTitles.length],
  excerpt: "Discover the unique methods and traditions behind growing Kenya's world-famous flowers, sustainable practices, and expert tips for keeping your blooms fresh longer.",
  image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  author: ["Sarah Kimani", "John Mwangi", "Alice Wanjiru", "David Ochieng"][index % 4],
  date: `March ${index + 1}, 2024`,
  readTime: `${5 + (index % 3)} min read`,
  category: categories[index % categories.length]
}));

export function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const paginatedPosts = featuredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {paginatedPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="inline-flex items-center space-x-1.5">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </span>
                      <span className="inline-flex items-center space-x-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </span>
                      <span className="inline-flex items-center space-x-1.5">
                        <Tag className="h-4 w-4" />
                        <span>{post.category}</span>
                      </span>
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold text-neutral-900 group-hover:text-rose-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-neutral-600 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4">
                      <a
                        href={`/blog/${post.id}`}
                        className="text-rose-600 hover:text-rose-700 font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalItems={featuredPosts.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              className="mt-12"
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                    className="block text-neutral-600 hover:text-rose-600 transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-neutral-600 mb-4">
                Get the latest updates on flower care, arrangements, and special offers.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-rose-500 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}