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
      description: "Easy Returns",
      highlight: false
    },
    {
      id: 3,
      icon: Truck,
      title: "Free & Fast",
      description: "Shipping",
      highlight: false
    }
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="px-3 sm:px-4 py-3 sm:py-5">
        {/* Flex with nowrap and justify-between - No horizontal scroll */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className="flex items-center gap-1.5 sm:gap-3"
              >
                {/* Icon - Smaller on mobile */}
                <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                  feature.highlight 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black'
                }`}>
                  <Icon size={16} className="sm:w-5 sm:h-5" />
                </div>
                
                {/* Text - Smaller on mobile */}
                <div>
                  <h3 className={`font-bold text-xs sm:text-base ${
                    feature.highlight ? 'text-black' : 'text-gray-800'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-gray-500 whitespace-nowrap">
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