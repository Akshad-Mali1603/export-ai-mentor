import React from 'react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 text-4xl text-gray-700">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-center text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

const OurValues: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Our Values</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <ValueCard
            icon={<span>💡</span>} // Placeholder for innovation icon
            title="Innovation"
            description="We constantly push the boundaries of what's possible in trade technology, developing solutions that anticipate and address the evolving needs of exporters."
          />
          <ValueCard
            icon={<span>🤝</span>} // Placeholder for accessibility icon
            title="Accessibility"
            description="We believe global trade should be accessible to all businesses, regardless of size or experience. Our platform democratizes export knowledge and tools."
          />
          <ValueCard
            icon={<span>🛡️</span>} // Placeholder for integrity icon
            title="Integrity"
            description="We uphold the highest standards of accuracy and ethics in our data and recommendations, ensuring businesses can trust our platform for critical trade decisions."
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;