import {Link} from 'react-router-dom'

import './index.css'

const SingleItem = props => {
  const {item} = props
  const {id, imageUrl, brand, data} = item

  return (
    <Link to={`/item/${id}`} className="link">
      {' '}
      <li className="li-container">
        <img src={imageUrl} alt="item" className="item-image" />
        <h1 className="single-heading">{brand}</h1>
        <p>{data}</p>
      </li>
    </Link>
  )
}

export default SingleItem
