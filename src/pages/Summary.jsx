import { Card, Row, Col, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

const Summary = () => {
  const store = useSelector(state => state.mealList)
  const [checkoutProduct, setCheckoutProduct] = useState(null)
  const [userInfo, setUserInfor] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    setCheckoutProduct(store?.selectedMeals)
    setUserInfor(store?.userInfo)
  }, [store])


  return (
    <div>
      {checkoutProduct && Object.keys(checkoutProduct).length > 0 ?
        <>
          <Card className='order__summary'
            title={'Order Details'}
          >
            <Row gutter={[8, 8]} style={{ width: '50%', marginLeft: '10px', marginBottom: '15px', alignItems: 'center' }}>
              <Col span={12} style={{ display: 'grid' }}>
                <h4>Shipping Address: </h4>
                <small><b>Name:</b> {userInfo.name}</small>
                <small><b>Address: </b>{userInfo.address}</small>
                <small><b>Mobile number: </b> {userInfo.mobileNumber}</small>
                <small><b>Country: </b> {userInfo.country}</small>
              </Col>
              <Col span={12} style={{ display: 'grid' }}>
                <h4>Order summary: </h4>
                <small><b>Meal Name: </b> {checkoutProduct.strMeal}</small>
                <small><b>Total Meal: </b> {1}</small>
                <small><b>Item price: </b> {(1 + (Math.random() * (100 - 1))).toFixed(2)}</small>
                <small><b>Grand total: </b> {(1 + (Math.random() * (100 - 1))).toFixed(2)}</small>
              </Col>
            </Row>
            <Button style={{ marginTop: '20px' }} type="primary" onClick={(e) => navigate("/")}>
              Goto Shopping
            </Button>
          </Card>

        </> : navigate("/")
      }
    </div>
  )
}

export default Summary
