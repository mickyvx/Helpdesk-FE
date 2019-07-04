import React, { Component } from 'react'
import { Layout, Row, Col, Form, Input, Button } from 'antd'
import fetch from 'isomorphic-unfetch'
import css from 'antd/dist/antd.css'

class AuthenticationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginError: false
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      fetch('http://localhost:3333/user/login',  {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': "application/json"
        },
        body: JSON.stringify(values)
      })
      .then(async res => await res.json())
      .then(data => {
        if(data.token) {
          localStorage.setItem('userToken', data.token)
        }
      })
      .catch(err => {
        if(err) this.setState({loginError: true})
      })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    
    return (
        <Row type="flex" justify="center">
          <Col span={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{required:true}]
                })(<Input name="username" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{required:true}]
                })(<Input name="password" type="password" />)}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
    )
  }
}

export default Form.create({ name: "authForm" })(AuthenticationForm)