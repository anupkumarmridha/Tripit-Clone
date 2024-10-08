import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './redux/store.ts'
import { Provider } from 'react-redux'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
</React.StrictMode>,
)
