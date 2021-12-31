import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListContacts extends Component {
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired
    }
    state = {
        query: ''
    }
    handleChange = (query) => {
        this.setState({
            query: query
        })
    }
    clearSearch = () => {
        this.handleChange('');
    }
    render() {
        const { query } = this.state;
        const { contacts, onDeleteContact } = this.props;
        const showContactsList = query ? contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase())) : contacts;
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type="text"
                        placeholder='Search Contatcs'
                        value={this.state.query}
                        onChange={(event) => this.handleChange(event.target.value)} />
                    <Link
                        to='/create'
                        className='add-contact'>Add Contact</Link>
                </div>


                {showContactsList.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now Showing {showContactsList.length} of {contacts.length} total</span>
                        <button onClick={this.clearSearch}>Show All</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {contacts.length > 0 ? showContactsList.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                style={{ backgroundImage: `url(${contact.avatarURL})` }}>
                            </div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className='contact-remove' onClick={() => onDeleteContact(contact)}>
                                Remove
                            </button>
                        </li>
                    ))
                        : <p>No Contacts Found</p>}
                </ol>
            </div>

        )
    }

}

// ListContacts.propTypes = {
//     contacts: propTypes.array.isRequired,
//     onDeleteContact: propTypes.func.isRequired
// }

// class ListContacts extends Component{
//     render(){
//         console.log(this.this.props.contacts);
//         return(
//             <ol className='contact-list'>
//                   {this.this.props.contacts.map((contact)=>(
//                       <li key={contact.id} className='contact-list-item'>
//                           <div className='contact-avatar' 
//                           style={{backgroundImage: `url(${contact.avatarURL})`}}>
//                           </div>
//                           <div className='contact-details'>
//                                 <p>{contact.name}</p>
//                                 <p>{contact.handle}</p>
//                           </div>
//                           </li>
//                   ))
//             }
//             </ol>
//         )
//     }
// }

export default ListContacts;
