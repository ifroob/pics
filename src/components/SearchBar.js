import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit = event => {
        event.preventDefault(); // Prevents default behavior of page refresh on ENTER

        this.props.onSubmit(this.state.term);
        // Trying to reference undefined.state
        // this is equal to where the function is invoked.
        // Arrow function binds the code inside the function to the class
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            onChange={e =>
                                this.setState({
                                    term: e.target.value
                                })
                            }
                            value={this.state.term}
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
