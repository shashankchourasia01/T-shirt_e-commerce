import HeroSlider from '../components/Home/HeroSlider';
import FeaturesStripe from '../components/Home/FeaturesStripe';
import LatestDrops from '../components/Home/LatestDrops';

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <HeroSlider />
      
      <FeaturesStripe />
      
      {/* Tailwind class ki jagah inline style — guaranteed kaam karega */}
      <div style={{ marginTop: '24px' }}>
        <LatestDrops />
      </div>

      <div className="container-custom py-8 sm:py-12">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Featured T-Shirts
          </h2>
          <p className="text-gray-500 text-sm">
            Coming soon... Product grid yahan aayega
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

