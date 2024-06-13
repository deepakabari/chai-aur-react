import { Component } from "react";
import { connect } from "react-redux";
import { Contact, ContactsState } from "../../interfaces/Contact.interface";

interface ContactDetailProps {
    contact: Contact | null;
}

class ContactDetail extends Component<ContactDetailProps> {
    render() {
        if (!this.props.contact) {
            return <div>Click one of the contacts to see details.</div>;
        }
        return (
            <div className="contact-detail">
                <h4>Details for: {this.props.contact.name}</h4>
                <div>Phone: {this.props.contact.phone}</div>
            </div>
        );
    }
}

function mapStateToProps(state: ContactsState) {
    return {
        contact: state.activeContact,
    };
}

export default connect(mapStateToProps)(ContactDetail);
