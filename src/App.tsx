import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { FeaturedCollections } from './components/featured-collections';
import { Footer } from './components/footer';
import { AboutUs } from './components/pages/about';
import { PrivacyPolicy } from './components/pages/privacy';
import { TermsOfService } from './components/pages/terms';
import { Sitemap } from './components/pages/sitemap';
import { Shop } from './components/pages/shop';
import { CustomBouquets } from './components/pages/custom-bouquets';
import { Occasions } from './components/pages/occasions';
import { Blog } from './components/pages/blog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <FeaturedCollections />
            </main>
          } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/custom" element={<CustomBouquets />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}