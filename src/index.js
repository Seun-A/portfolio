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
import ContactPage from './pages/contact/contact.component';
import ProjectsPage from './pages/projects/projects.component';

import notFound from './assets/page-not-found.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />

          <Route path='/projects' element={<ProjectsPage />}>
            <Route index element={ <div>All <br />Coming Soon...</div> } />
            <Route path=':js' element={ <div>JAVASCRIPT <br />Coming Soon...</div> } />
            <Route path=':html-css' element={ <div>HTML CSS <br />Coming Soon...</div> } />
            <Route path=':react-js' element={ <div>REACT <br />Coming Soon...</div> } />
            <Route path=':others' element={ <div>OTHER <br />Coming Soon...</div> } />
          </Route>

          {/* No Match */}
          <Route 
            path='*'
            element = {
              <div className='page text-light text-center coming-soon d-flex flex-column align-items-center justify-content-center'>
                <img src={notFound} alt='Coming Soon'/> 
                <h1 className='p-5'>Page Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
