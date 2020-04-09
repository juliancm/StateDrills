import React from 'react'

class TheDate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      datetime: new Date(),
      chicken: 'licker'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({datetime: new Date()})
      console.log(this.state.chicken)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        {this.state.datetime.toLocaleString()}
      </div>
    )
  }
}

export default TheDate
