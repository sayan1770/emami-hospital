import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
export default function Layout({ children }) {

  const router = useRouter();

  const isLoginPage = router.pathname === '/';
  return (
    <>
    <div
    
  >
   {!isLoginPage && <Sidebar />}
   {!isLoginPage && <Header />}
      <main>
        {children}
      </main>
    </div>
    {!isLoginPage && <Footer />}
    </>
  );
}
