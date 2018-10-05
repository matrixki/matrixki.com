import Link from 'next/link'

class MobileMenu extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="mobile-menu-wrapper">
                <ul className="mobile-menu">
                    <li>
                        <Link href="/">
                            <a onClick = { () => { this.props.router.push('/'); } }>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a onClick = { () => { this.props.router.push('/blog'); } }>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://igtext.matrixki.com">
                            <a target="_blank">Igtext</a>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MobileMenu;