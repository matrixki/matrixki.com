import Layout from '../components/layout';
import {withRouter} from 'next/router';
import axios from 'axios';
import PostImage from '../components/post-image';
import CatLabel from '../components/cat-label';
import TagLabel from '../components/tag-label';
import Link from 'next/link';


class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            post: false,
        };
    }

    componentDidMount() {
        // get post data
        let url = 'https://blog.matrixki.com/wp-json/wp/v2/posts/'+this.props.router.query.postId;
        axios.get(url)
        .then( res => {            
            return res.data;
        } )
        .then( post => {
            console.log(post);
            this.setState({
                post: post,
            });
            document.body.classList.remove('header-transparent');
        } );
    }

    render(){
        return (
            <Layout>
                { this.state.post &&
                <div className="post-page">
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
                                        <li className="breadcrumb-item">
                                            <Link href="/blog">
                                                <a onClick = { () => { this.props.router.push('/blog'); } }>Blog</a>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            { this.state.post.title.rendered }
                                        </li>
                                    </ol>
                                </nav>                        
                            </div>
                            <div className="col col-md-10 offset-md-1">
                                <article className="post-article">
                                    {   
                                        this.state.post.categories.length > 0 && this.state.post.categories.map(
                                            cat => 
                                            <CatLabel catId={ cat } key={ cat }></CatLabel>
                                        )
                                    }
                                    <h1 className="post-title">{ this.state.post.title.rendered }</h1>
                                    <h2 className="post-excerpt" dangerouslySetInnerHTML={{__html: this.state.post.excerpt.rendered}}></h2>
                                    <PostImage media={ this.state.post.featured_media ? this.state.post.featured_media : false } />
                                    <div className="post-content" dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}}></div>
                                    {   
                                        this.state.post.tags.length > 0 && this.state.post.tags.map(
                                            tag => 
                                            <TagLabel tagId={ tag } key={ tag }></TagLabel>
                                        )
                                    }
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </Layout>
        );
    }
};
export default withRouter(Post);
