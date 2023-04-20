import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Select, DatePicker, Button } from 'antd';
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const store = useSelector(state => state.mealList)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [checkoutProduct, setCheckoutProduct] = useState(null)

  useEffect(() => {
    setCheckoutProduct(store.selectedMeals)
  }, [store])

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    dispatch({
      type: 'ORDER_DETAILS',
      data: values
    })
    navigate("/orderSummary")
  };


  console.log(checkoutProduct, '################')

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      {checkoutProduct && Object.keys(checkoutProduct).length > 0 ?
        <>
          <div>
            <h3>{checkoutProduct.strMeal}</h3>
            <img className='checkout_meal__image' src={checkoutProduct.strMealThumb}></img>
          </div>
          <div style={{ marginTop: '60px' }}>
            <h5>Shipping Info</h5>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form onFinish={onFinish} style={{ width: '35%' }}>
              <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please input your full name' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input your address' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="mobileNumber" name="mobileNumber" rules={[{ required: true, message: 'Please input your mobileNumber' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please select your country' }]}>
                <Select>
                  <Select.Option value="usa">USA</Select.Option>
                  <Select.Option value="canada">Canada</Select.Option>
                  <Select.Option value="uk">UK</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Place Order</Button>
              </Form.Item>
            </Form>
          </div>
        </>
        :
        <>
          <p>There is no meal to check out</p>
          {navigate("/")}
        </>
      }
    </div>
  )
}

export default CheckOut
