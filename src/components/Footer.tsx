"use client";
import './components.css'
export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-box">
                <p>&copy; {new Date().getFullYear()} Gauresh G Pai. All rights reserved.</p>
            </div>
        </footer>
    );
}
