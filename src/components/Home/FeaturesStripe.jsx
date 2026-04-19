import { Gift, RotateCcw, Truck } from 'lucide-react';

const FeaturesStripe = () => {
  const features = [
    {
      id: 1,
      icon: Gift,
      title: "30% OFF",
      description: "on First Order",
      highlight: true
    },
    {
      id: 2,
      icon: RotateCcw,
      title: "10 Days",
      description: "Easy Returns & Exchange",
      highlight: false
    },
    {
      id: 3,
      icon: Truck,
      title: "Free & Fast",
      description: "Shipping on All Orders",
      highlight: false
    }
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container-custom py-4 sm:py-5 md:py-6">
        {/* Horizontal scroll on mobile, grid on tablet+ */}
        <div className="flex overflow-x-auto scrollbar-hide gap-6 sm:gap-8 md:gap-12 justify-center sm:flex-nowrap">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className="flex items-center gap-3 sm:gap-4 flex-shrink-0"
              >
                {/* Icon Circle */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                  feature.highlight 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black'
                }`}>
                  <Icon size={20} className="sm:w-5 sm:h-5" />
                </div>
                
                {/* Text */}
                <div>
                  <h3 className={`font-bold text-sm sm:text-base ${
                    feature.highlight ? 'text-black' : 'text-gray-800'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesStripe;