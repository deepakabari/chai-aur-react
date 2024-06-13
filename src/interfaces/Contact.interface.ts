export interface Contact {
    name: string;
    phone: string;
}

export interface ContactsState {
    contacts: Contact[];
    activeContact: Contact | null;
}
