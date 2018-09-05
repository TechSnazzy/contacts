import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
    {people.map(person => (
      <li key={person.name}>{person.name}</li>
    ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Sean' },
          { name: 'Stephanie' },
          { name: 'Macy' },
          { name: 'Milo' }
        ]}/>
        <ContactList contacts={[
          { name: 'Doyle' },
          { name: 'Cordie' },
          { name: 'Muffin' },
          { name: 'Daphne' },
          { name: 'Tigger' },
          { name: 'Babu' }
        ]}/>
      </div>
    );
  }
}

export default App;
