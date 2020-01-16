import React from "react";
import unsplash from "../api/unsplash";

import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

// Event handlers
// Binding - use arrow function syntax (to make sure this has appropriate value)
// Rendering lists - map function
// Defining a key for the root element of the list (use id for key property)
// Ref system - reach into the DOM to interact with a particular element/node using ref property
// Grids in CSS - lay out elements on the DOM

class App extends React.Component {
    // Initialize props to what you expect you will get
    state = { images: [] };

    // Promise (.then())
    // Async await (below)
    onSearchSubmit = async term => {
        const response = await unsplash.get("search/photos", {
            params: {
                query: term
            }
        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
