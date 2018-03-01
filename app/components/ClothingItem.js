import React from 'react'

export default class ClothingItem extends React.Component {
  render() {
    const {
      brand,
      image,
      item_type,
      owner_id,
      size
    } = this.props

    return (
      <div>
        <img src={image}/>
        <h3>{ brand } - { item_type } </h3>
        <p>Size: { size } </p> 
        <p>
         Owner:
          <a href={`http://localhost:3000/wardrobes/${owner_id}`}> { owner_id } </a>

        </p>
      </div>
    )
  }
}