/**
 * Created by ming on 2016/3/3.
 */

import React from 'react';
import {Navbar,NavbarBrand,ButtonGroup,Button,ButtonToolbar,DropdownButton,Glyphicon,Input,Badge,OverlayTrigger,Tooltip} from 'react-bootstrap';
import './style.css'

const Menus = React.createClass({

    getInitialState() {
        return {
            isLoading: false,
            value1: '',
            value2: '',
            value3: ''
        };
    },

    handleClick() {
        this.setState({
            isLoading: true
        });
        setTimeout(()=> {
            this.setState({
                isLoading: false
            })
        }, 2000)
    },

    validationState(){
        let userc = /\w{6,10}/;

        let name = this.state.value1;
        if (name.length > 10 && !userc.test(name)) {
            return 'success'
        } else if (name.length > 5) {

            return 'warning';
        } else if (name.length > 0) {

            return 'error'
        }
    },

    validationState1(){
        let length2 = this.state.value2.length;
        if (length2 > 10) {
            return 'success'
        } else if (length2 > 5) {
            return 'warning';
        } else if (length2 > 0) {
            return 'error'
        }
    },

    handleChange (event) {
        event.preventDefault();
        this.setState({
            value1: this.refs.in.getValue(),
            value2: this.refs.pa.getValue(),
            value3: this.refs.pa2.getValue()
        });

    },
    render() {
        const tooltip = (
            <Tooltip className="tw">请输入密码！</Tooltip>
        );
        let isLoading = this.state.isLoading;
        return (
            <div>
                <Navbar>
                    <NavbarBrand><Glyphicon glyph="home"/> band</NavbarBrand>

                </Navbar>
                <Button
                    className="btn btn-success"
                    onClick={this.handleClick}
                    disabled={isLoading}
                >
                    {isLoading ? '关' : '开'}
                </Button>
                <ButtonToolbar>
                    <ButtonGroup bsSize="large" vertical>
                        <Button><Glyphicon glyph="star"/>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <DropdownButton title="4" id="0">4</DropdownButton>
                    </ButtonGroup>
                </ButtonToolbar>

                <span>提醒<Badge>12</Badge></span>
                <div className="main">

                    <form className="in" onSubmit={this.handleChange}>
                        <Input
                            type="text"
                            label="姓名"
                            placeholder="内容..."
                            hasFeedback help="内容检查"
                            ref="in"
                            value={this.state.value}
                            bsStyle={this.validationState()}

                        />
                        <Input
                            type="password"
                            label="密码"
                            ref="pa"
                            placeholder="输入密码"
                            value={this.state.value}
                            bsStyle={this.validationState1()}
                            onChange={this.handleChange}
                        />
                        <Input
                            type="password"
                            label="确认密码"
                            ref="pa2"
                            placeholder="再次输入密码"
                            onChange={this.handleChange}
                        />
                        <Input/>
                        <OverlayTrigger placement="right" overlay={tooltip} trigger="focus">
                            <Input type="text"  label="确认密码"/>
                        </OverlayTrigger>

                        <br/>
                        <Button type="submit" bsStyle="success">确认</Button>
                    </form>

                </div>

            </div>
        );
    }
});

export default Menus ;

