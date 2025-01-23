export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful Kenyan roses"
        />
        <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Flowers from
          <br />
          the Heart of Kenya
        </h1>
        <p className="mt-6 max-w-xl text-xl text-white">
          Experience the vibrant beauty of Kenyan flowers, delivered fresh to your doorstep anywhere in the world.
        </p>
        <div className="mt-10">
          <a
            href="/shop"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-neutral-50"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}