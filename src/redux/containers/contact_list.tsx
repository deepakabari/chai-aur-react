import { Component } from "react";
import { connect } from "react-redux";
import selectContact from "../actions/action_select_contact";
import { Dispatch, bindActionCreators } from "redux";
import { Contact, ContactsState } from "../../interfaces/Contact.interface";

interface ContactListProps {
    contacts: Contact[];
    selectContact: (contact: Contact) => void;
}

class ContactList extends Component<ContactListProps> {
    renderList() {
        return this.props.contacts.map((contact) => {
            return (
                <li
                    key={contact.phone}
                    onClick={() => this.props.selectContact(contact)}
                    className="list-group-item active-contact"
                >
                    {contact.name}
                </li>
            );
        });
    }
    render() {
        return <ul className="list-group col-sm-4 dark">{this.renderList()}</ul>;
    }
}

function mapStateToProps(state: ContactsState) {
    return {
        contacts: state.contacts,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ selectContact: selectContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
