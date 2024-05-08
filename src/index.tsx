import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </Provider>
  </React.StrictMode>
);
