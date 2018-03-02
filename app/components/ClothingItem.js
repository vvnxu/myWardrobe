import React from 'react'

export default class ClothingItem extends React.Component {
  render() {
    const {
      available,
    brand,
    image,
      item_type,
      owner_id,
      size,
      id
    } = this.props

    return (
      <div className="ClothingItem">
        <img src={image}/>
      <h3>{ brand } - { item_type } </h3>
      <p>Size: { size } </p> 
      <p>
       Owner:
        <a href={`http://localhost:3000/users/${owner_id}`}> { owner_id } </a>
      </p>
      {
        available &&
      <form action={`http://localhost:3000/trades/${id}`} method="post">
      <button>borrow</button>
        </form>          
      }
      {!available && <p>Borrowed</p>
}

      </div>
    )
  }
}