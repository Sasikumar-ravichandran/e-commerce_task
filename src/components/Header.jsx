import { Col, Menu, Row } from 'antd'
import React from 'react'
import { HomeFilled } from "@ant-design/icons";
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div className='app__header'>
            <Row>
                <Col span={10}><Menu mode='horizontal' style={{borderBottom:'none'}} items={[{
                    label: <Link to='/'><HomeFilled /></Link>,
                    key: 'Home'
                }]} /></Col>
                <Col style={{margin:'auto'}} span={14}><h2> E-commerce App</h2></Col>
            </Row>

        </div>
    )
}

export default Header
