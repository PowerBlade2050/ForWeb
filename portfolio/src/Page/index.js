import React from 'react';
import { Routes, Route } from 'react-router';

// Import contenu page
import Accueil from './Accueil';
import PowerBlade from './PowerBlade';
import Projets from './Projets';

const Page = () => (
    <section>
        <Routes>
            <Route exact path="/" component={Accueil} />
            <Route path="/mes-projets" component={Projets} />
            <Route path="/power_blade_2050" component={PowerBlade} />
        </Routes>
    </section>
);
export default Page;
