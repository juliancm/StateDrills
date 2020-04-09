import React from 'react'

class HelloWorld extends React.Component {
  constructor (props) {
    super(props)
    this.state = {who: 'World'}
    this.clickWorld = this.clickWorld.bind(this)
    this.clickFriend = this.clickFriend.bind(this)
    this.clickReact = this.clickReact.bind(this)
  }


  clickWorld() {
    this.setState({who: 'World'})
  }

  clickFriend() {
    this.setState({who: 'Friend'})
  }

  clickReact() {
    this.setState({who: 'React'})
  }

  render () {
    return(
      <div>
        Hello {this.state.who}!
        <button onClick={this.clickWorld}>World</button>
        <button onClick={this.clickFriend}>Friend</button>
        <button onClick={this.clickReact}>React</button>
      </div>
    )
  }

}

export default HelloWorld

