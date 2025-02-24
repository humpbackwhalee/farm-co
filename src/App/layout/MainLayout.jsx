import { Outlet } from 'react-router';

import Header from '../ui/Header.jsx';
import Footer from '../ui/Footer.jsx';

import { ThemeProvider } from '../components/ThemeContext.jsx';

// This is the main layout component that wraps all your pages
function MainLayout() {
  return (
    <ThemeProvider>
      <Header />
      <main className='min-h-screen font-poppins'>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MainLayout;