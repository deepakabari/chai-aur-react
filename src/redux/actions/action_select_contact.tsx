function selectContact(contact: any) {
    return {
        type: "CONTACT_SELECTED",
        payload: contact,
    };
}
export default selectContact;
