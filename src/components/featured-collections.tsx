interface Collection {
  id: number;
  name: string;
  description: string;
  image: string;
}

const collections: Collection[] = [
  {
    id: 1,
    name: "Premium Roses",
    description: "World-famous Kenyan roses in stunning arrangements",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Wedding Collection",
    description: "Elegant bouquets and arrangements for your special day",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Seasonal Favorites",
    description: "Fresh seasonal blooms curated for every occasion",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function FeaturedCollections() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">{collection.name}</h3>
              <p className="mt-1 text-neutral-500">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}