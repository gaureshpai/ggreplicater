"use client";
import './components.css'
export default function Footer() {
    return (
        <footer className="bg-blue-800 w-full p-4 mt-8">
            <div className="container mx-auto text-center text-white">
                <p>&copy; {new Date().getFullYear()} Gauresh G Pai. All rights reserved.</p>
            </div>
        </footer>
    );
}
