import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import contenu page
import Accueil from './Accueil';
import PowerBlade from './PowerBlade';
import Projets from './Projets';

const Page = () => (
    <section className='page'>
        <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="mes-projets" element={<Projets />} />
            <Route path="power_blade_2050" element={<PowerBlade />} />
        </Routes>
    </section>
);
export default Page;
