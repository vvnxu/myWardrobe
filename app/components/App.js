import React from 'react'
import ClothingItem from './ClothingItem'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      info:'getting from rails.....',
      items: [],
      selectedSize: null,
      selectedBrand: null
    }
  }

  componentDidMount(){
    

    const apiDomain = 'http://localhost:3000/api'
    const apiURL = `${apiDomain}/wardrobes`

    fetch(apiURL, {
      // body: JSON.stringify({
      //   info:'from client to server'
      // }),
      method: 'GET',
      headers: {
        'content_type':'application/json'
      }
    })
    // fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        const items = resJson
        const sizes = items.map(item => item.size)
        const brands=items.map(item=> item.brand)
        this.setState({
          items: items,
          sizes: sizes,
          brands:brands
        })
      })

  }//life cycle of the react app

  onChangeSize(event) {
    var size = event.target.value
    this.setState({selectedSize: size})
  }
  onChangeBrand(event) {
    var brand = event.target.value
    this.setState({selectedBrand: brand})
  }


  render() {
    const { brands, items, sizes } = this.state
    // const items = this.state.items
    // const sizes = this.state.sizes
    // const brands = this.state.brands  
    const { selectedBrand, selectedSize} = this.state
    // var selectedBrand = this.state.selectedBrand
    // var selectedSize = this.state.selectedSize
    let showItems = items
    // var showItems = items

    if (selectedBrand) {
      showItems = showItems.filter(item =>
        item.brand === selectedBrand
      )
    }
  
    if (selectedSize) {
      showItems = showItems.filter(item =>
        item.size.toString() === selectedSize.toString()
      )
    }
    
    // if (selectedSize) {
    //   showItems = showItems.filter(function(item) {
    //     if (item.size === selectedSize) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   })
    // }
    if (!sizes || !items || !brands) {
      return <div></div>
    }

    return <div>
      <select name="" id="" onChange={this.onChangeSize.bind(this)}>
      <option value="">Select your size</option>
      {
        sizes.map(size => <option value={size}>{size}</option>)
      }
      {/*
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="10">10</option>
      <option value="12">12</option>
      <option value="14">14</option>*/}
      {/* </select> <br> */}
      </select> <br/>

      <select name="" id="" onChange={this.onChangeBrand.bind(this)}>
        <option value="">your favorite brand</option>
        {
          brands.map(brand => <option value={brand}>{brand}</option>)
        }
      </select> <br />

      {
        showItems.map(item =>
          <ClothingItem
            brand={item.brand}
            image={item.image}
            item_type={item.item_type}
            owner_id={item.owner_id}
            size={item.size}
            />
        )
      }
      
    </div>
  }

}
