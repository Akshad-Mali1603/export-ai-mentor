import React, { useState } from 'react';

interface DocumentCardProps {
  icon: string; 
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ icon, title, description, selected, onSelect }) => {
  return (
    <div
      className={`
        flex flex-col items-start p-6 border rounded-lg cursor-pointer
        transition-all duration-200 ease-in-out
        ${selected ? 'border-blue-600 bg-blue-50 shadow-lg' : 'border-gray-200 bg-white hover:shadow-md hover:border-gray-300'}
        transform hover:scale-[1.02]
      `}
      onClick={onSelect}
    >
      <div className={`text-3xl mb-3 ${selected ? 'text-blue-600' : 'text-gray-700'}`}>
        {icon} {/* Replace with actual icon component or img tag */}
      </div>
      <h3 className={`text-lg font-semibold mb-1 ${selected ? 'text-blue-800' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className="text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
};

const SmartDocs: React.FC = () => {
  const [selectedDocType, setSelectedDocType] = useState<string>('Commercial Invoice');

  const documentTypes = [
    {
      icon: '📄', // Placeholder icon
      title: 'Commercial Invoice',
      description: 'Standard document for international sales transactions',
    },
    {
      icon: '📦', // Placeholder icon
      title: 'Packing List',
      description: 'Details of packaged items in shipment',
    },
    {
      icon: '🌟', // Placeholder icon
      title: 'Certificate of Origin',
      description: 'Confirms goods are manufactured in specific country',
    },
    {
      icon: '📜', // Placeholder icon
      title: 'Bill of Lading',
      description: 'Receipt for shipped goods and title document',
    },
    {
      icon: '✉️', // Placeholder icon
      title: 'Letter of Credit',
      description: 'Bank guarantee of payment for shipped goods',
    },
    {
      icon: '🛡️', // Placeholder icon
      title: 'Insurance Certificate',
      description: 'Proof of insurance coverage for shipment',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10">
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="text-3xl mr-3">📝</span> {/* Placeholder for main icon */}
            <h1 className="text-3xl font-bold text-gray-900">
              SmartDocs – Auto-generate Export Documents
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Save time and reduce errors by generating export-compliant documents instantly.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">💡</span>
            <span>Powered by AI + pre-filled data from your dashboard</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Step 1: Select Document Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((doc) => (
              <DocumentCard
                key={doc.title}
                icon={doc.icon}
                title={doc.title}
                description={doc.description}
                selected={selectedDocType === doc.title}
                onSelect={() => setSelectedDocType(doc.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartDocs;