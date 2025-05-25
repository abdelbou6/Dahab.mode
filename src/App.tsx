import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Spinner from './components/ui/Spinner';
import ScrollToTop from './components/utils/ScrollToTop';

// Lazy-loaded pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const HelpPage = lazy(() => import('./pages/HelpPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="products" element={
            <Suspense fallback={<Spinner />}>
              <ProductsPage />
            </Suspense>
          } />
          <Route path="products/:id" element={
            <Suspense fallback={<Spinner />}>
              <ProductDetailPage />
            </Suspense>
          } />
          <Route path="cart" element={
            <Suspense fallback={<Spinner />}>
              <CartPage />
            </Suspense>
          } />
          <Route path="checkout" element={
            <Suspense fallback={<Spinner />}>
              <CheckoutPage />
            </Suspense>
          } />
          <Route path="account" element={
            <Suspense fallback={<Spinner />}>
              <AccountPage />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<Spinner />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="help" element={
            <Suspense fallback={<Spinner />}>
              <HelpPage />
            </Suspense>
          } />
          <Route path="login" element={
            <Suspense fallback={<Spinner />}>
              <LoginPage />
            </Suspense>
          } />
          <Route path="register" element={
            <Suspense fallback={<Spinner />}>
              <RegisterPage />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<Spinner />}>
              <NotFoundPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;