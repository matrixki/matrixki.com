import axios from 'axios';

class tagLabel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tag: [],
        };
    }

    componentDidMount(){
        if(this.props.tagId){
            let url = 'https://blog.matrixki.com/wp-json/wp/v2/tags/'+this.props.tagId;
            axios.get(url)
            .then( res => {            
                return res.data;
            } )
            .then( tag => {
                console.log(tag);
                this.setState((state, props) => ({
                    tag: tag,
                }));
            } );
        }
    }

    render(){
        return (
            <span className="tag-label">{this.state.tag.name}</span>
        );
    }
};
export default tagLabel;
