import React, { Component } from 'react';
import Search from "../Search/Search";
import ResultCard from "../ResultCard/ResultCard"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      geolocation: "",
      isLoading: true,
      results: []
    }
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
    this.fetchData()
  }

  fetchData() {
    this.setState({
      isLoading: true,
    })

    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=bakeries,bubbletea,cakeshop,candy,chocolate,churros,cupcakes,desserts,donuts,gelato,icecream,jpsweets,milkshakes,popcorn,shavedice,shavedsnow&open_now=true&sort_by=distance&location=${this.state.searchValue}`, {
      headers: {
        "Authorization": "Bearer TYCF7uGO6Qb1VJa6hlijizEu_F99iKMVftuIHRAj3UXu8_FqdNszuEhRtv431m3l271i6KfeJVNrFklwl65A1AQItCSo3_Id_IynZLY5UkfMCezBsNty4LAU7TucWnYx"
      }
    })
      .then(response => response.json())
      .then(parsedJSON => this.setState({
        results: parsedJSON,
        isLoading: false
      }))
      .catch(error => console.log('Parsing failed ' + error))

    console.log(this.state.results.businesses)
  }

  handleHover = (event) => {
    event.currentTarget.style.backgroundColor = '#ccc';
  }

  render() {
    const { isLoading, results } = this.state;
    const milesPerMeter = 0.000621371192;

    return (
      <div className="App">
        <div id="search-div">
          <Search value={this.state.searchValue} onChange={this.handleChange} id="search" />
          <label htmlFor="id">Enter your address, city, or zip code to search; or allow the website to see your location</label>
        </div>
        <div id="resultsDiv">
          {
            !isLoading && results.businesses ? this.state.results.businesses.map((bizniz, index) => {
              return <ResultCard key={index} name={bizniz.name} img={bizniz.image_url} distance={(bizniz.distance * milesPerMeter).toFixed(1)} price={bizniz.price} rating={bizniz.rating} yelp={bizniz.url} onHover={this.handleHover} lat={bizniz.coordinates.latitude} long={bizniz.coordinates.longitude} />
            }) : null
          }

        </div>
      </div>
    )
  }
}

export default App;
