import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

const NewPage = lazy(() => import('./pages/HomePage/NewPage.tsx'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage.tsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.tsx'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<NewPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
