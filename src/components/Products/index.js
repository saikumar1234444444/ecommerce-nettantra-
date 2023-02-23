import {useState} from 'react'

import SingleItem from '../SingleItem'
import Header from '../Header'

import './index.css'

const items = [
  {
    id: '1',
    name: 'watches',
    cost: 120,
    rating: 4,
    review: 'nice product too good,best price to purchase',
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
    review: 'nice product too good',
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
    review: 'nice product too good',
    data: 'Buy it with 20% discount',
    imageUrl: 'https://images6.alphacoders.com/349/349397.jpg',
  },
  {
    id: '4',

    name: 'shoes',
    cost: 400,
    brand: 'Puma',
    rating: 4,
    review: 'nice product too good',
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
    review: 'nice product too good',
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
    review: 'nice product too good',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://www.suzukinozomu.com/images/large/best%20nike%20running%20shoes-688xad.jpg',
  },
  {
    id: '7',
    name: 'shirts',
    cost: 200,
    rating: 4,
    review: 'nice product too good',
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
    review: 'nice product too good',
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
    review: 'nice product too good',
    data: 'Buy it with 20% discount',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.UI46nImTaOGYW1s3_TePQgHaJc&pid=Api&P=0',
  },
]

const Products = () => {
  const [search, setSearch] = useState('')
  const list = items.filter(single =>
    single.name.toLowerCase().includes(search.toLowerCase()),
  )
  const getSearch = event => {
    setSearch(event.target.value)
  }

  return (
    <>
      <Header />
      <div className="product-container">
        <div className="search-header">
          <h1 className="product-heading">Search products here</h1>
          <input
            type="search"
            className="search"
            placeholder="search products"
            onChange={getSearch}
            value={search}
          />
        </div>
        <div className="items-container">
          <ul className="ul-container">
            {list.map(item => (
              <SingleItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Products
