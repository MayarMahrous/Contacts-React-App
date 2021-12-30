import React, { Component } from 'react';
import './App.css';
import ListContacts from './ListContacts';
import * as ContactsAPI from './ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

// const contacts = [
//   {
//     "id": "karen",
//     "name": "Karen Isgrigg",
//     "handle": "karen_isgrigg",
//     "avatarURL": "http://localhost:5001/karen.jpg"
//   },
//   {
//     "id": "richard",
//     "name": "Richard Kalehoff",
//     "handle": "richardkalehoff",
//     "avatarURL": "http://localhost:5001/richard.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "handle": "tylermcginnis",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
// ];

class App extends Component {
  state = {
    contacts: [],
    screen: 'list'
  }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({
        contacts
      })
    })
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    ContactsAPI.remove(contact);
  }
  createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact])
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact} />
        )} />

        <Route exact path='/create' render={({history}) => (
          <CreateContact 
          onCreateContact={(contact)=>{
            this.createContact(contact);
            history.push('/')
          }}/>
        )} />
      </div>
    );
  }
}

export default App;
