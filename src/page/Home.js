import React, {Component} from 'react'
import TableInput from '../components/TableInput'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Home extends Component{
constructor(){
  super();
  this.state = {
    nama: '',
    email: '',
    password: '',
    containerData: [],
  }

}

componentDidMount(){
  console.log('ini compoenet did mount')
  console.log('nama saya : '+ this.state.nama)

}
handleClick() {
  const data = {
    nama : this.state.nama,
    email: this.state.email,
    password: this.state.password
  }
  let datacontainer = this.state.containerData
  datacontainer.push(data)

  axios.get('http://locahost:8000/products')
  .then((res)=>{
      alert("input berhasil")
  })
  .catch((err)=>{
      alert("server sedang bermasalah coba lagi besok")
  })
  this.setState({
    containerData: datacontainer,
    nama: '',
    email: '',
    password: ''
  })

}

// componentDidUpdate(){
//   console.log('ini componentDidUpdate')
// }
componentWillUnmount(){
  console.log('ini compoentWillUnmount')
}

handleChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}

render(){
  const handleClickdalam = ()=> {
    alert('janga juga klik dalam')  
  }
  return(
    <div>
        <ul>
            <li><Link to="/about">About</Link></li>
        </ul>
      <TableInput title="FORM INPUT" nama="risano" data={this.state.containerData}/>
      {/* <h1>hello world fullstack web</h1>
      <h2>title</h2>
      <button onClick={this.handleClick}>clik</button> */}
      <h1>Input Biodata</h1>
      {/* <h4>{this.state.nama}</h4> */}
      <ul>
        <li>
          Nama : <input type="text" value={this.state.nama} placeholder="Input Nama" name="nama" onChange={(e)=>this.handleChange(e)}/>
        </li>
        <li>
          Email: <input type="email" value={this.state.email} placeholder="Input Email" name="email" onChange={(e)=>this.handleChange(e)} />
        </li>
        <li>
          Password: <input type="password" value={this.state.password} placeholder="****" name="password" onChange={(e)=>this.handleChange(e)} />
        </li>
      </ul>
      <button onClick={()=>this.handleClick()}>Simpan</button>
    </div>
  )
}
}

export default Home;