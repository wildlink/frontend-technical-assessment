import React from 'react';

// "https://www.jcpenney.com/cart"
// "https://www.macys.com/my/bag"

export function App(): React.ReactElement | null {
  console.log('[x] content script: App rendered');

  // wait for the async task to complete
  // query for the div with the id "shopsmart-div"
  // if it exists, save the text to a state variable
  // render the text in a p tag

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#f0f0f0',
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 1000,
        borderRadius: '8px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1>ShopSmart</h1>
      <p>Earn cashback while you shop.</p>
    </div>
  );
}
