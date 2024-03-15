// routes.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';
import Grid from './components/Grid';
import NotFound from './components/NotFound';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/form" element={<Form />} />
                <Route path="/grid" element={<Grid />} /> {/* Adicionado rota para o componente Grid */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
