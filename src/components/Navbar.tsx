import Link from "next/link";
import './components.css'
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-blue-800">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center"> {/* New div to contain the logo and text */}
                    <a href="/" className="titleb"> {/* Anchor tag wrapping both Image and Link */}
                        <Image
                            src="https://raw.githubusercontent.com/gaureshpai/GGReplicater/main/public/logo.png"
                            alt="GGReplicater Logo"
                            width={32}  // Set the width of the image
                            height={32} // Set the height of the image
                            className="mr-2" // Add margin to separate the logo from the text
                        />
                        GGReplicater
                    </a>
                </div>

                <div className="button-container">
                    {/* Buttons for website, Twitter, and GitHub */}
                    <a href="https://gauresh.vercel.app" target="_blank" rel="noopener noreferrer" className="buttons">
                        Website
                    </a>
                    <a href="https://twitter.com/hseruag" target="_blank" rel="noopener noreferrer" className="buttons">
                        Twitter
                    </a>
                    <a href="https://github.com/gaureshpai" target="_blank" rel="noopener noreferrer" className="buttons">
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}
