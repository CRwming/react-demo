/**
 * Created by ming on 2016/3/8.
 */
import React from 'react';
import { Input, Button } from 'react-bootstrap';
import './style.css'

const Form = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      password2: ''
    };
  },
  handleChange() {
    this.setState({
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
      password2: this.refs.password2.getValue()
    });
  },


  render() {
    return (
      <div className="form" >
                <form >
                    <Input
      type="email"
      label="邮箱"
      ref="email"
      placeholder="输入邮箱地址"
      labelClassName="col-xs-6"
      onChange={this.handleChange}
      />
                    <Input
      type="password"
      label="密码"
      ref="password"
      placeholder="输入密码"
      onChange={this.handleChange}
      labelClassName="col-xs-6"

      />
                    <Input
      type="password"
      label="确认密码"
      ref="password2"
      onChange={this.handleChange}
      placeholder="再次输入密码"
      labelClassName="col-xs-6"
      />
                    <Button bsStyle="success" type="submit">确定</Button>

                </form>

            </div>
      );
  }
});

export default Form;
