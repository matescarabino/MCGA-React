import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login/index'
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;