import { Component } from 'react';
import withAuth from '../components/withAuth'

class DecodeJWT extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: props.userToken,
      userName: props.userName
    }

    this.changeUserName = this.changeUserName.bind(this)
  }

  changeUserName(event) {
    event.preventDefault()
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.userName}!</p>
        <input type="text" value={this.state.userName} onChange={this.changeUserName} />
      </div>
    )
  }
}

const ProtectedComponent = withAuth(DecodeJWT)

export default ProtectedComponent