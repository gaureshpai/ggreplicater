import Link from "next/link";
import './Navbar.css'
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-blue-800">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <Link href="/" className="titleb">
                        <Image
                            src="/logo.png"
                            alt="AIReplicater Logo"
                            width={32}
                            height={32}
                            className="mr-2"
                        />
                        AI Replicater
                    </Link>
                </div>

                {/* <div className="button-container">
                    <Link href="https://gauresh.vercel.app" target="_blank" rel="noopener noreferrer" className="buttons">
                        Website
                    </Link>
                    <Link href="https://twitter.com/hseruag" target="_blank" rel="noopener noreferrer" className="buttons">
                        Twitter
                    </Link>
                    <Link href="https://github.com/gaureshpai" target="_blank" rel="noopener noreferrer" className="buttons">
                        GitHub
                    </Link>
                </div> */}
            </div>
        </nav>
    );
}
