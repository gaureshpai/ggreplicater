"use client";
import Link from 'next/link';
import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-box">
                <p>&copy; {new Date().getFullYear()} <Link href="https://gauresh.vercel.app" className='hehe'>Gauresh G Pai</Link>. All rights reserved.</p>
            </div>
        </footer>
    );
}
