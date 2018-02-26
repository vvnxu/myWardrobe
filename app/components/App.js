import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      info:'getting from express.....'
    }
  }

  componentDidMount(){
    
    let localDomain='http://localhost:3000/details'

    let hostedDomain='https://mysterious-castle-42894.herokuapp.com/details'

    fetch('https://mysterious-castle-42894.herokuapp.com/details')//full heroku url
      .then(res=>res.json()).then(res=>this.setState({info:res.info}))

    fetch(hostedDomain,{
      body: JSON.stringify({
        info:'from client to server'
      }),
      method: 'POST',
      headers: {
        'content_type':'application/json'
      }
    })
  }//life cycle of the react app


  render() {
    return <div>
      <h1>hello world</h1>
      <label>example component</label>
      <PasswordInput />
      <h2>{this.state.info}</h2>
    </div>
  }

}


  render() {
    return <div>
      <select name=" " id="">
      <option>Select your size</option>
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="10">10</option>
      <option value="12">12</option>
      <option value="14">14</option>
      {/* </select> <br> */}
      </select> <br/>

      <select name="" id=""><option>your favorite</option></select> <br />

      <button>submit</button>
      
    </div>
  }

}
