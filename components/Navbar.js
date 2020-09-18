import Link from 'next/link'
const Navbar = () => (
    <nav>
        <div className="container">
            <h1>BitsPrice</h1>
            <div>
                <ul>
                    <li>
                        <Link href='/'><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href='/examples'><a>examples1</a></Link>
                    </li>
                    <li>
                        <Link href='/stylejsx'><a>style JSX1</a></Link>
                    </li>
                    <li>
                        <Link href='/about'><a>About</a></Link>
                    </li>
                    <li>
                        <Link href='/js'><a>Js Page: client side rendering fetching data</a></Link>
                    </li>
                    <li>
                        <Link href='/blog/first-post'><a>first post</a></Link>
                    </li>
                    <li>
                        <Link href='/blog/1'><a>post 1</a></Link>
                    </li>
                    <li>
                        <Link href='/blog/1/a-comment'><a>post detail slug comment</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
export default Navbar;