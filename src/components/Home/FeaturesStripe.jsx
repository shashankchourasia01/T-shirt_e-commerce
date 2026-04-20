import { Fragment } from 'react';
import { Gift, RotateCcw, Truck } from 'lucide-react';

const FeaturesStripe = ({ style = {} }) => {
  const features = [
    { id: 1, icon: Gift, title: "30% OFF", description: "on First Order", highlight: true },
    { id: 2, icon: RotateCcw, title: "10 Days", description: "Easy Returns", highlight: false },
    { id: 3, icon: Truck, title: "Free & Fast", description: "Shipping", highlight: false }
  ];

  return (
    <div style={{ backgroundColor: 'white', borderBottom: '1px solid #f3f4f6',marginTop: '12px', ...style }}>
      <div style={{ padding: '12px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '8px' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Fragment key={feature.id}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'center' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: feature.highlight ? '#000000' : '#f3f4f6',
                    color: feature.highlight ? '#ffffff' : '#374151',
                  }}>
                    <Icon size={16} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontWeight: 700, fontSize: '12px', lineHeight: 1.3, color: '#111827', margin: 0 }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '10px', color: '#6b7280', lineHeight: 1.3, whiteSpace: 'nowrap', margin: 0 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
                {index < features.length - 1 && (
                  <div style={{ width: '1px', height: '32px', backgroundColor: '#e5e7eb', flexShrink: 0 }} />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesStripe;