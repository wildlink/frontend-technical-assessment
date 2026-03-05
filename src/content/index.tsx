import React from 'react';
import ReactDOM from 'react-dom/client';
import { CashbackBadge } from './components/CashbackBadge';

function mount() {
  const host = document.createElement('div');
  host.id = 'shopsmart-root';
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: 'open' });
  const mountPoint = document.createElement('div');
  shadow.appendChild(mountPoint);

  const root = ReactDOM.createRoot(mountPoint);
  root.render(<CashbackBadge rate={null} />);
}

mount();
