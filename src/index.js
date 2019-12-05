import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./components/SearchComponent/search";
import ContactList from "./components/ConstacList/ContactList";

import './index.css';

class App extends React.Component {
    state = {
        List: [
            { id: 1, name: "Jack Sparrow", description: "Captain", avatar: 82, gender: "men", starStatus:false},
            { id: 2, name: "Cris Hollan", description: "Regiser", avatar: 67, gender: "men" ,starStatus:false},
            { id: 3, name: "Arnold Swarzeneger", description: "Terminator", avatar: 65, gender: "men" ,starStatus:true},
            { id: 4, name: "Amanda Hitchcok", description: "Produser", avatar: 55, gender: "women",starStatus:false },
            { id: 5, name: "Silvester Stalone", description: "Rembo", avatar: 14, gender: "men",starStatus:true  },
        ]
    }


    onDelete = id => {
        /*console.log("onDelete =>", id)*/
        const index = this.state.List.findIndex(elem => elem.id === id);

        let newList = [];
        let counter =0;

        for (let i = 0; i < this.state.List.length; i++) {
            if (i !== index) {
                newList[counter] = this.state.List[i];
                counter++;
            }
        }
        this.setState(state=>{
        return {
            List: newList
        };
    });
    }

    render() {
        return (
            <div className="container bootstrap snippet">
                <Search></Search>
                <ContactList
                    ContactList={this.state.List}
                    onDelete={this.onDelete}
                ></ContactList>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

