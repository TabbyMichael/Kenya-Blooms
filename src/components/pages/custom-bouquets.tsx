import { useState } from 'react';
import { Pagination } from '../ui/pagination';
import { Heart, Plus, Minus } from 'lucide-react';

interface FlowerOption {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

// Expand flowerOptions array to 60 items
const flowerOptions: FlowerOption[] = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  name: `Premium Flower ${index + 1}`,
  image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  price: 4.99 + (index % 5),
  description: "Beautiful premium flowers for your custom bouquet"
}));

const vaseOptions = [
  { id: 1, name: 'Classic Glass Vase', price: 14.99 },
  { id: 2, name: 'Modern Ceramic Vase', price: 24.99 },
  { id: 3, name: 'Rustic Metal Vase', price: 19.99 },
];

export function CustomBouquets() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [selectedFlowers, setSelectedFlowers] = useState<Map<number, number>>(new Map());
  const [selectedVase, setSelectedVase] = useState<number | null>(null);
  const [note, setNote] = useState("");

  const paginatedFlowers = flowerOptions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addFlower = (flowerId: number) => {
    const currentCount = selectedFlowers.get(flowerId) || 0;
    setSelectedFlowers(new Map(selectedFlowers.set(flowerId, currentCount + 1)));
  };

  const removeFlower = (flowerId: number) => {
    const currentCount = selectedFlowers.get(flowerId) || 0;
    if (currentCount > 0) {
      setSelectedFlowers(new Map(selectedFlowers.set(flowerId, currentCount - 1)));
    }
  };

  const getFlowerCount = (flowerId: number) => {
    return selectedFlowers.get(flowerId) || 0;
  };

  const calculateTotal = () => {
    let total = 0;
    selectedFlowers.forEach((count, flowerId) => {
      const flower = flowerOptions.find(f => f.id === flowerId);
      if (flower) {
        total += flower.price * count;
      }
    });
    if (selectedVase !== null) {
      const vase = vaseOptions.find(v => v.id === selectedVase);
      if (vase) {
        total += vase.price;
      }
    }
    return total;
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedFlowers.map((flower) => (
                <div key={flower.id} className="group bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={flower.image}
                      alt={flower.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <button
                      onClick={() => addFlower(flower.id)}
                      className="absolute top-2 right-2 p-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-neutral-900">{flower.name}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{flower.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-rose-600 font-medium">${flower.price.toFixed(2)} per stem</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFlower(flower.id)}
                          className="p-1 text-neutral-600 hover:text-rose-600 transition-colors"
                          disabled={getFlowerCount(flower.id) === 0}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{getFlowerCount(flower.id)}</span>
                        <button
                          onClick={() => addFlower(flower.id)}
                          className="p-1 text-neutral-600 hover:text-rose-600 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Pagination
              currentPage={currentPage}
              totalItems={flowerOptions.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              className="mt-8"
            />
          </div>

          {/* Order Summary Sidebar */}
          <div className="bg-neutral-50 p-6 rounded-lg h-fit sticky top-4">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Your Custom Bouquet</h2>
            
            {/* Selected Flowers */}
            <div className="space-y-4 mb-6">
              {Array.from(selectedFlowers.entries()).map(([flowerId, count]) => {
                const flower = flowerOptions.find(f => f.id === flowerId);
                if (flower && count > 0) {
                  return (
                    <div key={flowerId} className="flex justify-between items-center">
                      <span className="text-neutral-600">
                        {count}x {flower.name}
                      </span>
                      <span className="text-neutral-900 font-medium">
                        ${(flower.price * count).toFixed(2)}
                      </span>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Vase Selection */}
            <div className="mb-6">
              <h3 className="font-medium text-neutral-900 mb-2">Select a Vase</h3>
              <div className="space-y-2">
                {vaseOptions.map((vase) => (
                  <label key={vase.id} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="vase"
                      checked={selectedVase === vase.id}
                      onChange={() => setSelectedVase(vase.id)}
                      className="text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-neutral-600">{vase.name}</span>
                    <span className="text-neutral-900 font-medium">${vase.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mb-6">
              <h3 className="font-medium text-neutral-900 mb-2">Special Instructions</h3>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add any special requests or notes for your bouquet..."
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                rows={3}
              />
            </div>

            {/* Total */}
            <div className="border-t border-neutral-200 pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full bg-rose-600 text-white py-3 px-4 rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={selectedFlowers.size === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}