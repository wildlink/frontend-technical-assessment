import React from 'react';

export function App(): React.ReactElement | null {
  console.log('[x] content script: App rendered');

  return (
    <div
      style={{
        backgroundColor: 'rgb(131 210 89)',
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 1000,
        borderRadius: '8px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1 style={{ backgroundColor: 'rgb(58 85 62)', fontSize: '36px', padding: '10px', color: 'white' }}>ShopSmart</h1>
      <div style={{ padding: '10px', color: 'rgb(58 85 62)', fontWeight: 'bold' }}>Earn cashback while you shop.</div>
    </div>
  );
}
