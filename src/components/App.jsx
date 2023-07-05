import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const dataWithId = {
      id: uuidv4(),
      ...data,
    };

    this.state.contacts.map(({ name }) => name).includes(data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [dataWithId, ...prevState.contacts],
        }));
  };

  filterHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilterChange = () =>
    this.state.contacts.filter(({ name }) =>
      name
        .split(' ')
        .join('')
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );

  deleteHandler = e => {
    const filter = this.state.contacts.filter(
      contact => contact.id !== e.currentTarget.parentNode.id
    );
    this.setState({ contacts: filter });
    console.log(filter);
    console.log(e.currentTarget.parentNode.id);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterHandler} value={this.state.filter} />
        <ContactList
          contacts={this.onFilterChange()}
          onDelete={this.deleteHandler}
        />
      </div>
    );
  }
}
