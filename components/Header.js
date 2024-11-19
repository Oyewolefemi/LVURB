import Link from 'next/link';

const Header = () => (
    <header className="header">
        <div className="logo">
            <h1>StoreX</h1>
        </div>
        <nav className="navigation">
            <Link href="/">Home</Link>
            <Link href="/all-stores">All Stores</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </header>
);

export default Header;
