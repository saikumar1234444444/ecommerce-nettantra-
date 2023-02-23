import {useParams} from 'react-router-dom'
import {useContext, useState} from 'react'
import Context from '../../context/Context'
import Header from '../Header'

import './index.css'

const items = [
  {
    id: '1',
    name: 'watches',
    cost: 120,
    rating: 4,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    brand: 'Rolex',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.-sTmiOpyaF9qOVIAcWqA4wHaHa&pid=Api&P=0',
  },
  {
    id: '2',
    name: 'watches',
    cost: 80,
    rating: 4,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    brand: 'Titan',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://3.bp.blogspot.com/-SByVNZa38Ow/TVYjwQ-qcwI/AAAAAAAAADs/I8kPHtWs-t8/s1600/rolex-datejust-ii-watch.jpg',
  },
  {
    id: '3',
    name: 'watches',
    cost: 70,
    brand: 'Fastrack',
    rating: 4,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    data: 'Buy it with 20% discount',
    imageUrl: 'https://images6.alphacoders.com/349/349397.jpg',
  },
  {
    id: '4',

    name: 'shoes',
    cost: 400,
    brand: 'Puma',
    rating: 4,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://moneyinc.com/wp-content/uploads/2018/07/Puma-Thunder-Spectra-9-Shoes-for-Men-750x385.jpg',
  },
  {
    id: '5',
    name: 'shoes',
    cost: 400,
    brand: 'Adidas',
    rating: 3,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.auf3-jqJFnKON9KjCYO0OAHaHa&pid=Api&P=0',
  },
  {
    id: '6',
    name: 'shoes',
    cost: 300,
    brand: 'Nike',
    rating: 5,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://www.suzukinozomu.com/images/large/best%20nike%20running%20shoes-688xad.jpg',
  },
  {
    id: '7',
    name: 'shirts',
    cost: 200,
    rating: 4,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    brand: 'Denim',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://ae01.alicdn.com/kf/HTB1wF89IXXXXXciXVXXq6xXFXXXL/Menschwear-Men-s-Cotton-Solid-White-Short-Sleeve-Dress-Shirt-MSS120.jpg',
  },
  {
    id: '8',
    name: 'shirts',
    cost: 90,
    brand: 'Hunter',
    rating: 3,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://5.imimg.com/data5/WO/TV/MY-5002636/mens-denim-shirt-500x500.jpg',
  },
  {
    id: '9',
    cost: 100,
    name: 'shirts',
    brand: 'Us polo',
    rating: 4,
    review:
      'nice product too good,best price to purchase,buy the product before sale ends',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.UI46nImTaOGYW1s3_TePQgHaJc&pid=Api&P=0',
  },
]

const Item = () => {
  const [popup, setPopup] = useState(false)
  const {id} = useParams()
  const filterData = items.filter(each => each.id === id)
  const {imageUrl, brand, rating, cost, review} = filterData[0]
  const {addToCart} = useContext(Context)
  const handleClick = () => {
    const newArray = filterData

    addToCart(newArray)
    setPopup(true)
  }

  return (
    <>
      <Header />
      <div className="separate">
        <div className="item-container">
          <img src={imageUrl} alt="item" className="item" />
          <div className="details">
            <h1 className="item-heading">{brand}</h1>
            <h1 className="item-heading">Rs.{cost}</h1>
            <div className="button">
              <p>{rating}</p>
              <img
                src="https://clipartmag.com/images/star-no-background-16.png"
                alt="star"
                className="star"
              />
            </div>
            <p>{review}</p>
            <button type="button" className="cart-button" onClick={handleClick}>
              Add to cart
            </button>
            {popup ? <p className="popup-para">product added to cart</p> : null}
          </div>
        </div>
      </div>
    </>
  )
}
export default Item
