import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.getVal = this.getVal.bind(this);
        this.state = {input: ""};
    }

    _handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.getVal();
        }
    }

    getVal() {
        var search = document.querySelector('input').value;
        const words = search.split(" ");
        search = words.map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
        }).join(" ");
        this.props.city(search);
    }

    render() {
        return (
            <div>
                <input onKeyDown={this._handleKeyDown}
                    type="text"
                    id="search-bar"
                    placeholder="Search Your City Here"
                />
            </div>
        );
    }
}