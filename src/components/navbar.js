import Link from 'next/link';

export default () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/quemSomos">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/servicos">
                    <a>Contact</a>
                </Link>
            </li>
            {/* <li>
                <Link as="/post/first" href="/post/[id]">
                    <a>First Post</a>
                </Link>
            </li>
            <li>
                <Link as="/post/second" href="/post[id]">
                    <a> Second Post</a>
                </Link>
            </li> */}
        </ul>
    </header>
);