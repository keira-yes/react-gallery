import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw new Error(response.statusText)
        }
      })
      .then(data => this.setState({users: data}))
      .catch(error => console.log(error.message))
  };

  componentDidMount() {
    this.getUsers()
  }

  render() {
    const {users} = this.state;

    return (
      <ul>
        {users.map(item => {
          return (
            <div key={item.id}>{item.name}</div>
          )
        })}
      </ul>
    )
  }
}

export default Users;