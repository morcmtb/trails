import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './organisms/header';
import { Home } from './pages/Home';

export const Layout = ({ children, ...rest }) => (
    <div style={{ background: '#f6f7eb' }}>
        <Header />
        {children}
    </div>
);

export function Router() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    );
}
