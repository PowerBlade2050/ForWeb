import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import contenu page

const Page = () => (
    <section>
        <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/mes-projets" component={Projets} />
            <Route path="/power_blade_2050" component={PowerBlade} />
        </Switch>
    </section>
);
export default Page;
