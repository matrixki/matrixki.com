import axios from 'axios';

class CatLabel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cat: [],
        };
    }

    componentDidMount(){
        if(this.props.catId){
            let url = 'https://blog.matrixki.com/wp-json/wp/v2/categories/'+this.props.catId;
            axios.get(url)
            .then( res => {            
                return res.data;
            } )
            .then( cat => {
                console.log(cat);
                this.setState((state, props) => ({
                    cat: cat,
                }));
            } );
        }
    }

    render(){
        return (
            <span className="cat-label">{this.state.cat.name}</span>
        );
    }
};
export default CatLabel;
