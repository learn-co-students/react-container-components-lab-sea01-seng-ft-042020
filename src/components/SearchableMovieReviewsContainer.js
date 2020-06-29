import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + "&query=";

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviews extends Component {
    state = {
        reviews: '',
        searchTerm: ''
    }

    handleChange = (e) => {
        return this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(json => this.setState({
           reviews: json
        }))
    }

    

    render() {
        return(
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input value={this.state.searchTerm} onChange={this.handleChange} placeholder={"Search for a review"}></input>
                    <button type="submit" >Search</button>
                </form>
            </div>
        )
    }

}

export default SearchableMovieReviews