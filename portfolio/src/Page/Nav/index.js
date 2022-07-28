import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/mes-projets">Mes Projets</Link></li>
            <li><Link to="/power_blade_2050">Power Blade</Link></li>
        </ul>
    </nav>
);
export default Nav;
