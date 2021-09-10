import React from 'react'


class ClassForm extends React.Component {
  constructor() {
    super()
    this.state = {name: "", email: "", password: ""}
  }

  handleName(e) {
    this.setState({name: e.target.value})
  }

  handleEmail(e) {
    this.setState({email: e.target.value})
  }

  handlePassword(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({name: "", email: "", password: ""})
    console.log(this.state.name, this.state.email, this.state.password)
    
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>

          <input name="name" className= "input" type="text" placeholder= "Name" value={this.state.name} onChange={(e) => this.handleName(e)}  /><br />
          <input name="email" className= "input" type="email" placeholder= "E-mail" value={this.state.email} onChange={(e) => this.handleEmail(e)}  /><br />
          <input name="password" className= "input" type="password" placeholder= "Password" value={this.state.password} onChange={(e) => this.handlePassword(e)}  /> <br />
          <input className= "sub" type="submit" />

        </form>
      </div>

    )
  }
}

export default ClassForm;