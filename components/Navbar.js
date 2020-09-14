import Link from 'next/link'
const Navbar = () => (
    <html lang="en">
        <nav>
            <div className="container">
                <h1>BitsPrice</h1>
                <div>
                    <ul>
                        <li>
                            <Link href='/'><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href='/about'><a>About</a></Link>
                        </li>
                        <li>
                            <Link href='/blog/first-post'><a>first post</a></Link>
                        </li>
                        <li>
                            <Link href='/blog/1'><a>post 1</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </html>
);
export default Navbar;