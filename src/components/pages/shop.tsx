import { useState } from 'react';
import { Filter, SlidersHorizontal, Heart, ShoppingCart } from 'lucide-react';
import { Pagination } from '../ui/pagination';
import { useStore } from '@/lib/store';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  occasion: string[];
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Royal Kenyan Rose Bouquet",
    price: 89.99,
    description: "Premium long-stemmed roses in deep red and soft pink hues",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Roses",
    occasion: ["Anniversary", "Romance", "Valentine's Day"],
    colors: ["Red", "Pink"]
  },
  {
    id: 2,
    name: "Nairobi Sunrise Lilies",
    price: 79.99,
    description: "Stunning oriental lilies with delicate white and pink petals",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lilies",
    occasion: ["Birthday", "Congratulations", "Thank You"],
    colors: ["White", "Pink"]
  },
  {
    id: 3,
    name: "Safari Sunset Mixed Bouquet",
    price: 99.99,
    description: "Vibrant mix of proteas, roses, and native Kenyan flowers",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mixed",
    occasion: ["Birthday", "Celebration", "Home Decor"],
    colors: ["Orange", "Red", "Purple"]
  }
];

const categories = ["All", "Roses", "Lilies", "Mixed", "Tropical", "Native"];
const occasions = ["All", "Anniversary", "Birthday", "Romance", "Congratulations", "Sympathy", "Wedding"];

export function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 12;

  const { addToCart, toggleFavorite, favorites } = useStore();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesOccasion = selectedOccasion === 'All' || product.occasion.includes(selectedOccasion);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesOccasion && matchesPrice;
  });

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const isProductFavorite = (productId: number) => {
    return favorites.some(item => item.id === productId);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-900"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-neutral-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <SlidersHorizontal className="h-5 w-5 text-neutral-600" />
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-50 p-6 rounded-lg mb-8">
            {/* Categories */}
            <div>
              <h3 className="font-medium text-neutral-900 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-neutral-600">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Occasions */}
            <div>
              <h3 className="font-medium text-neutral-900 mb-3">Occasions</h3>
              <div className="space-y-2">
                {occasions.map((occasion) => (
                  <label key={occasion} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="occasion"
                      checked={selectedOccasion === occasion}
                      onChange={() => setSelectedOccasion(occasion)}
                      className="text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-neutral-600">{occasion}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-medium text-neutral-900 mb-3">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-24 border border-neutral-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    min="0"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-24 border border-neutral-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`p-2 rounded-full ${
                      isProductFavorite(product.id)
                        ? 'bg-rose-600 text-white'
                        : 'bg-white text-neutral-600 hover:text-rose-600'
                    } shadow-md transition-colors`}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 rounded-full bg-white text-neutral-600 hover:text-rose-600 shadow-md transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-neutral-900">{product.name}</h3>
                <p className="mt-1 text-neutral-500">{product.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-medium text-rose-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          className="mt-8"
        />
      </div>
    </div>
  );
}