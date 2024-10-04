import React from 'react';

const FallbackUI: React.FC = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Something went wrong.</h1>
      <p>We're sorry for the inconvenience. Please try again later.</p>
      <button onClick={handleReload} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Reload Page
      </button>
    </div>
  );
};

export default FallbackUI;