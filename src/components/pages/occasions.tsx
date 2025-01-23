import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Pagination } from '../ui/pagination';

interface PopularChoice {
  name: string;
  price: number;
  image: string;
}

interface Occasion {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: JSX.Element;
  popularChoices: PopularChoice[];
}

// Expand occasions array to 50 items
const occasions: Occasion[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Occasion ${index + 1}`,
  description: "Celebrate special moments with our stunning arrangements",
  image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  icon: <Heart className="h-6 w-6" />,
  popularChoices: [
    {
      name: "Premium Arrangement",
      price: 89.99 + (index % 5) * 10,
      image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Classic Bouquet",
      price: 79.99 + (index % 5) * 10,
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]
}));

export function Occasions() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const paginatedOccasions = occasions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {paginatedOccasions.map((occasion) => (
            <div key={occasion.id} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Image and Description */}
                <div className="lg:col-span-1">
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <img
                      src={occasion.image}
                      alt={occasion.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Occasion Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-2 text-rose-600 mb-2">
                    {occasion.icon}
                    <h2 className="text-2xl font-semibold text-neutral-900">{occasion.name}</h2>
                  </div>
                  <p className="text-neutral-600 mb-6">{occasion.description}</p>

                  {/* Popular Choices */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {occasion.popularChoices.map((choice, idx) => (
                      <div key={idx} className="group/card">
                        <div className="relative h-48 overflow-hidden rounded-lg mb-3">
                          <img
                            src={choice.image}
                            alt={choice.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                          />
                        </div>
                        <h3 className="font-medium text-neutral-900">{choice.name}</h3>
                        <p className="text-rose-600">${choice.price.toFixed(2)}</p>
                        <button className="mt-2 w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={occasions.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          className="mt-12"
        />
      </div>
    </div>
  );
}