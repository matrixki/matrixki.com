import Link from 'next/link';
import {withRouter} from 'next/router';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        };
        this.mobileMenuTrigger = this.mobileMenuTrigger.bind(this);
        this.handleHeaderBackground = this.handleHeaderBackground.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleHeaderBackground);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleHeaderBackground);
    }

    handleHeaderBackground(event) {
        let scrollTop = window.scrollY;
        if(window.location.pathname !== '/'){
            return;
        }
        if(scrollTop>60){
            document.body.classList.remove('header-transparent');
            this.setState({headerTransparent: false});
        }
        else{
            document.body.classList.add('header-transparent');
            this.setState({headerTransparent: true});
        }
    }

    mobileMenuTrigger(event) {
        event.preventDefault();
        if(!this.state.menuOpen){
            document.body.classList.add('menu-open');
            this.setState({menuOpen: true});
        }
        else{
            document.body.classList.remove('menu-open');
            this.setState({menuOpen: false});
        }
        
    }

    render(){
        return (
            <header id="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col header-left">
                            <Link href="/">
                                <a className="logo-text" onClick = { () => { this.props.router.push('/'); } }>
                                    <span>M</span>
                                </a>
                            </Link>
                        </div>
                        <div className="col header-right">
                            <a href="#" className="btn mobile-menu-trigger d-md-none" onClick={this.mobileMenuTrigger}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </a>
                            <ul className="header-menu d-none d-sm-none d-md-block">
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
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);