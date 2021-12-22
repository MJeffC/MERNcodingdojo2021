import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            hairColor: this.props.hairColor
        };
    }

    BirthdayButton = () => {
        this.setState({ age: this.state.age + 1});
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.lastName}, {this.state.firstName}</h1>
                <h4>Age: {this.state.age}</h4>
                <h4>Hair Color: {this.state.hairColor}</h4>
                <button onClick={this.BirthdayButton}>Birthday Button for {this.state.firstName} {this.state.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;