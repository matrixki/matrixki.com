import Layout from '../components/layout';
import {withRouter} from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import PostImage from '../components/post-image';


class Blog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount(){
        axios.get('https://blog.matrixki.com/wp-json/wp/v2/posts?per_page=9')
        .then( res => {            
            return res.data;
        } )
        .then( posts => {
            console.log(posts);
            this.setState((state, props) => ({
                posts: posts,
            }));
            document.body.classList.remove('header-transparent');
        } );
    }

    render(){
        return (
            <Layout>
                <div className="blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <a onClick = { () => { this.props.router.push('/'); } }>Home</a>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Blog
                                    </li>
                                </ol>
                            </nav>                        
                            </div>
                            <div className="col-12">
                                <h1 className="section-title">Mike's Blog</h1>
                            </div>
                            { this.state.posts.length > 0 && this.state.posts.map(
                                post =>
                                <div className="col-md-4 col-sm-6" key={post.id}>
                                    <div className="post-block">
                                        <Link href={`/post?postId=${post.id}`}>
                                            <a onClick = { () => { this.props.router.push(`/post?postId=${post.id}`); } }>
                                                <PostImage media={ post.featured_media ? post.featured_media : false } />
                                                <h2 className="post-title">{post.title.rendered}</h2>
                                                <p className="excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                                            </a>
                                        </Link>
                                    </div>    
                                </div>
                            ) }
                        </div>
                    </div>
                </div>    
            </Layout>
        );
    }
};
export default Blog;
