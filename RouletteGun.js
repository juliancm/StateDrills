import React from 'react'

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {luck: 'spinning',
                  chamber: null,
                  spinningTheChamber: false}
    this.testLuck = this.testLuck.bind(this)
  }

  testLuck() {
    this.setState({spinningTheChamber: true})
    let random = Math.ceil(Math.random() * 8)
    setTimeoout(() => this.setState({chamber: random, spinningTheChamber: false}). 2000)
  }

  render() {
    return(
      <div>
        <p>{this.state.luck}</p>
        <button onClick = {this.testLuck}>Dare</button>
      </div>
    )
  }
}

export default RouletteGun
