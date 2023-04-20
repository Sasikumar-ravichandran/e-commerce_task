import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { getMealsList } from './store/action';
import { Input } from 'antd';
import { Image, List } from 'antd';
import { Modal } from 'antd';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const store = useSelector(state => state.mealList)
  const { Meta } = Card;
  const [userInput, setUserInput] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const dispatch = useDispatch()
  let navigate = useNavigate();


  useEffect(() => {
    dispatch(
      getMealsList({
        filter: userInput
      })
    )
  }, [userInput])

  const showModal = (item) => {
    setIsModalVisible(true);
    setModalData(item)
  };

  const handleOk = () => {
    dispatch({
      type: 'CHECKOUT_MEALS',
      data: modalData
    })
    navigate("/checkout")
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(store.allData, '+++++++++++++++++++')

  return (

    <div style={{ marginTop: '15px' }}>
      <div>
        <Row gutter={[8, 8]} style={{ width: '50%', marginLeft: '10px', marginBottom: '15px', alignItems: 'center' }}>
          <Col span={6}>
            <b>Search for Meals :</b>
          </Col>
          <Col span={8}>
            <Input value={userInput} placeholder='Search for meals...' onChange={(e) => setUserInput(e.target.value)} />
          </Col>
        </Row>
      </div>
      {store?.allData && store.allData.length > 0 &&
        <>
          <List
            grid={{ column: 3 }}
            renderItem={(item, index) => {
              return (
                <Card
                  className='meal__card'
                  title={item.strMeal}
                  key={index}
                  cover={<Image className='mealItem__images' src={item.strMealThumb} />}
                >
                  <div style={{ textAlign: 'center' }}>
                    <Button type="primary" onClick={() => showModal(item)}>
                      Buy now
                    </Button>
                  </div>
                </Card>
              );
            }}
            dataSource={store?.allData}
          ></List>

          <Modal title={modalData.strMeal} open={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="Check out">
            <Card
              ellipsis={false}
              cover={<Image className='mealItem__images' src={modalData.strMealThumb} />}
            >
              <Card.Meta description={<><b>Ingredients: </b>{modalData?.strIngredient1 + ', ' + modalData?.strIngredient2 + ', ' + modalData?.strIngredient3 + ', ' + modalData?.strIngredient4 + ', ' + modalData?.strIngredient5 + ', ' + modalData?.strIngredient6 + ', ' + modalData?.strIngredient7 + ', ' + modalData?.strIngredient8 + ', ' + modalData?.strIngredient9 + ', ' + modalData?.strIngredient10 + ', ' + modalData?.strIngredient11 + ', ' + modalData?.strIngredient12 + ', ' + modalData?.strIngredient13}</>}>
              </Card.Meta>
            </Card>
          </Modal>
        </>
      }
    </div >
  )
}

export default Home
