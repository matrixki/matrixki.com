import Router from 'next/router';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import MobileMenu from '../components/mobile-menu';
import style from "../css/style.scss";

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.title = 'Mike\'s personal Blog';
        let today = new Date();
        this.year = today.getFullYear();
    }

    render() {

        return ( 
            <div>
                <Head>
                    <title>{ this.title }</title>
                    <link rel="icon" type="image/png" href="/static/img/favicon_mike.png"/>

                    {/* Required meta tags */}
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    {/* Bootstrap CSS */}
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                    {/* font awesome 5 CSS */}
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
                    {/* custom main CSS */}
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>

                <Header />
                <MobileMenu />
                { this.props.children }
                <Footer year={this.year} />
            </div>
        );
    }
}

export default Layout;