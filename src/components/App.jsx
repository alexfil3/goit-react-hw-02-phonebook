import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
    console.log(data);
    console.log(this.state.contacts);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
