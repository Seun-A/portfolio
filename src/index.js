import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom';

import App from './App';
import HomePage from './pages/home/home.page';
import comingSoon from './assets/coming-soon.svg'
import ContactPage from './pages/contact/contact.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />

          {/* No Match */}
          <Route 
            path='*'
            element = {
              <div className='page text-light text-center coming-soon d-flex flex-column align-items-center justify-content-center'>
                <img src={comingSoon} alt='Coming Soon'/> 
                <h1 className='p-5'>Page In Progress...</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
