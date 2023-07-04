import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export class ContactList extends Component {
  state = {};

  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <li key={uuidv4()}>{contact}</li>
        ))}
      </ul>
    );
  }
}
