import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  slappers = () => {
    this.setState({count: this.state.count + this.props.count})
  }

  render() {
    return (
      <div>
        <p>Butt is {this.state.count}</p>
        <button onClick={this.slappers}>Slappers</button>
      </div>
    )
  }
}

export default Counter
