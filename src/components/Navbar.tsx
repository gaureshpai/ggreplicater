import Link from "next/link";
import './Navbar.css'
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-blue-800">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <a href="/" className="titleb">
                        <Image
                            src="https://raw.githubusercontent.com/gaureshpai/GGReplicater/main/public/logo.png"
                            alt="GGReplicater Logo"
                            width={32}
                            height={32}
                            className="mr-2"
                        />
                        GGReplicater
                    </a>
                </div>

                <div className="button-container">
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
