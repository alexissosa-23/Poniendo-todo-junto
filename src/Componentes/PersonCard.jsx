import React, { Component } from 'react';

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    };
  }

  handleBirthday = () => {
    this.setState(prevState => ({
      age: prevState.age + 1
    }));
  }

  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div style={{ margin: '20px', textAlign: 'left' }}>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.handleBirthday}>Birthday Button for {firstName} {lastName}</button>
      </div>
    );
  }
}

export default PersonCard;
