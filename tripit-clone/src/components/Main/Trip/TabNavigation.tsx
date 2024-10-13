import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["Upcoming Trips", "Past Trips", "Unfiled Items"];

  return (
    <div className="w-full flex border-b border-gray-300 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-md font-semibold transition-colors duration-200 ease-in-out focus:outline-none ${
            activeTab === tab
              ? "text-[#495057] border-l border-t border-r rounded-t-md -mb-[1px] bg-white"
              : "text-primary hover:text-secondary"
          } ${index === 0 ? "rounded-tl-md" : index === tabs.length - 1 ? "rounded-tr-md" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
