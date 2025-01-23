import { Flower } from 'lucide-react';

export function AboutUs() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <Flower className="h-8 w-8 text-rose-600" />
          <h1 className="text-3xl font-bold text-neutral-900">About KenyaBlooms</h1>
        </div>

        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            Founded in 2024, KenyaBlooms brings the vibrant beauty of Kenyan flowers to the world stage, 
            connecting local farmers with global flower enthusiasts.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Our Story</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Born from a passion for Kenya's exceptional floriculture, KenyaBlooms bridges the gap between 
            small-scale flower farmers in Kenya and flower lovers worldwide. Our journey began in the 
            fertile highlands of Kenya, where we witnessed the extraordinary quality of locally grown flowers 
            and the dedication of our farming communities.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Our Mission</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We strive to deliver the finest Kenyan flowers while supporting sustainable farming practices 
            and empowering local communities. Every bouquet we deliver carries with it the story of the 
            farmers who nurture these blooms and the rich agricultural heritage of Kenya.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Sustainability Commitment</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Environmental responsibility is at the heart of our operations. We work exclusively with farms 
            that practice sustainable agriculture, minimize water usage, and maintain fair labor practices. 
            Our packaging is eco-friendly, and we continuously work to reduce our carbon footprint.
          </p>

          <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Quality Assurance</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Every flower that leaves our facility undergoes rigorous quality checks. We've developed 
            partnerships with leading logistics providers to ensure your flowers arrive fresh and beautiful, 
            no matter where you are in the world.
          </p>
        </div>
      </div>
    </main>
  );
}