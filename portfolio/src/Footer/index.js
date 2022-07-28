import React from "react";

const Footer = () => {
    const now = new Date;
    const year = now.getFullYear();
    return (
        <footer className="footer">
             <ul className="footer_list">
                <li>Mon Github</li>
                <li>Mon LinkedIn</li>
                <li>Mon Instagram</li>
            </ul>
            <p className="footer_content">
                By NeoCortexFr &copy; {year}.
            </p>
        </footer>
    );
};
export default Footer;