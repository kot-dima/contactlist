import React from 'react';
import ReactDOM from 'react-dom';
import Search  from "./components/SearchComponent/search";
import ContactList from "./components/ConstacList/ContactList";

import './index.css';

class App extends React.Component{
    List=[
        { name:"Jack Sparrow", description:"Captain", avatar:82, gender:"men"},
        { name:"Cris Hollan", description:"Regiser", avatar:67, gender:"men"},
        { name:"Arnold Swarzeneger", description:"Terminator", avatar:65, gender:"men"},
        { name:"Amanda Hitchcok", description:"Produser", avatar:55, gender:"women"},
        { name:"Silvester Stalone", description:"Rembo", avatar:14, gender:"men"},
    ];

    render(){
    return(
        <div className="container bootstrap snippet">
            <Search></Search>
            <ContactList ContactList={this.List}></ContactList>
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('root'));

