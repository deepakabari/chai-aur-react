import Contact_details from "../../redux/containers/contact_details";
import Contact_list from "../../redux/containers/contact_list";
import "./style.css"

function Contact() {
    return (
        <div>
            <Contact_list />
            <Contact_details />
        </div>
    );
}

export default Contact;
