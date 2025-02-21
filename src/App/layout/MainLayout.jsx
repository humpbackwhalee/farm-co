import { Outlet } from 'react-router';

import Header from '../ui/Header.jsx';
import Footer from '../ui/Footer.jsx';

// This is the main layout component that wraps all your pages
function MainLayout() {
  return (
    <div> 
      <Header />
      <main> 
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;