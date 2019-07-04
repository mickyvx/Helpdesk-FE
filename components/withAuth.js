import { Component } from "react";

const withAuth = (WrappedComponent) => {
    class AuthWrapper extends Component {

    constructor() {
      super()

      this.state = {
        userToken: '',
        userName: ''
      }

      this.componentDidMount.bind(this)
    }

    componentDidMount() {
      this.setState = {
        userToken: localStorage.getItem('userToken'),
        userName: localStorage.getItem('userName')
      }
    }

    render() {
      return (
        <WrappedComponent userName={this.state.userName} userToken={this.state.userToken} />
      )
    }
  }
  return AuthWrapper
}

export default withAuth