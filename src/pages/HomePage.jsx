import HeroSlider from '../components/Home/HeroSlider';
import FeaturesStripe from '../components/Home/FeaturesStripe';
import LatestDrops from '../components/Home/LatestDrops';

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Slider */}
      <HeroSlider />
      
      {/* Features Stripe with gap */}
      <div className="mt-4">
        <FeaturesStripe />
      </div>
      
      {/* Latest Drops Section - Naya add kiya */}
      <LatestDrops />
      
      {/* Rest of the home page content */}
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