import React, {Component} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

export default class CreateUser extends Component {

  constructor(props){
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
    }


  }

  componentDidMount(){
    this.setState({
      username:'test user'
    })
  }

  onChangeUsername(e){
    this.setState({
      username:e.target.value
    })
  }
ri

  onSubmit(e){
    e.preventDefault()

    const user = {
      username: this.state.username,
    }

    console.log(user);

    axios.post("http://localhost:5000/users/add",user)
      .then(res => console.log(res.data))

    window.location = '/'

  }
    render() {
      return (
      <div>
       <h3>Create New User</h3>
       <form onSubmit={this.onSubmit}>

         <div className="form-group">
         <label>Username:</label>
         <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}></input>
          <div className="form-group mt-2">
            <input type="submit" value="Create User" className="btn btn-primary"/>
          </div>
          </div>
       </form>
       </div>
      )
    }
  }