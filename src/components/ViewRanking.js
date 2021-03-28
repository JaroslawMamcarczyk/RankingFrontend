import { Component } from "react";

class ViewRanking extends Component{
    render(){
        return <div>
{this.props.rankingCategory.value}
{this.props.rankingMovies.value}

        </div>
    }
}
export default ViewRanking