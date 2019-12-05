import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList, onDelete }) => {
    console.log('Array =>', ContactList);
    const listItem = ContactList.map((item) => {
        return (
            <ContactItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                description={item.description}
                gender={item.gender}
                onDelete={() => onDelete(item.id)}
                starStatus={item.starStatus}
            ></ContactItem>
        );
    })
    return (
        <Fragment>
            <h2>ContactList</h2>
            {listItem}
        </Fragment>

    );
}

export default ContactList;