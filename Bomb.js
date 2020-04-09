import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
    this.updateBomb = this.updateBomb.bind(this)
  }

  componentDidMount() {
    setInterval(
      () => this.setState({count: this.state.count + 1})
      , 1000)
  }

  componentWillUnmount() {
  }

  updateBomb() {
    if (this.state.count === 8) {
      return 'BOOM'
      } else if (this.state.count % 2) {
      return 'tick'
    }
    return 'tock'
  }

  render() {
    return (
      <div>
        <p>{this.updateBomb()}</p>
      </div>
    )
  }
}

export default Bomb
