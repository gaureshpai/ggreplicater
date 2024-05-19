import Link from "next/link";
import './components.css'
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-blue-800">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-white text-2xl font-bold">
                    GGReplicater
                    <Image
                        src=""
                        alt="GGReplicater Logo"
                        width={32}  // Set the width of the image
                        height={32} // Set the height of the image
                        className="ml-2" // Add additional classes if needed
                    />
                </Link>


                <div className="flex space-x-4">
                    {/* Buttons for website, Twitter, and GitHub */}
                    <a href="https://gauresh.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                        Website
                    </a>
                    <a href="https://twitter.com/hseruag" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                        Twitter
                    </a>
                    <a href="https://github.com/gaureshpai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}
