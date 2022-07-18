import React from 'react';
import { useState } from 'react'; //import useState hook from react for using in functions
import { useEffect } from 'react';
//import {Component} from 'react'; //we need it for using Class
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

//functional component structure

const App = () => {
    const [searchVal, setSearchVal] = useState(''); //use array distructuring; [value - we will store, setValue function]
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    console.log('render');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') //moment when component mounted into DOM
            //it is a promis
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(monster => {
            return monster.name.toLocaleLowerCase().includes(searchVal);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchVal]);



    const onSearchChange = (event) => {
        const searchValString = event.target.value.toLocaleLowerCase();
        setSearchVal(searchValString);

    };
    return ( <div className = 'App' >
        <h1 className = 'app-title' > Monsters Rolodex Small Update < /h1> 
        <SearchBox onChangeHandler = { onSearchChange }
        placeholder = 'monsters search'
        className = 'monsters-search-box' / >
        <CardList monsters = { filteredMonsters }/> </div>
    );


}
export default App;

// class App1 extends Component {
//   constructor() {
//     super();
//       this.state = {
//         monsters: [],
//         searchVal: ''
//     //initialize local state
//       };
//     }

//   componentDidMount(){ 
//     fetch('https://jsonplaceholder.typicode.com/users')//moment when component mounted into DOM
// //it is a promis
//         .then((response) => response.json())
//         .then((users) => this.setState(()=> {
//           return {monsters: users}
//         },
//         ()=> {
//           console.log(this.state)
//         }
//         ));
//     }

// onSearchChange = (event) => {
//   console.log(event.target.value);
//   const searchVal = event.target.value.toLocaleLowerCase();
//   this.setState(()=>{
//    return {searchVal}
//   });
// }

// render() {
// console.log('render');
// const { monsters, searchVal } = this.state; //distructure, to get rig of this.state.monsters
// const { onSearchChange } = this; //distructure, to get rig of this.onSearchChange
// const monsterSearch = monsters.filter(el => {
//   return el.name.toLocaleLowerCase().includes(searchVal);
// });

//       console.log('render');
//       const { monsters, searchVal } = this.state; //distructure, to get rig of this.state.monsters
//       const { onSearchChange } = this; //distructure, to get rig of this.onSearchChange
//       const monsterSearch = monsters.filter(el => {
//         return el.name.toLocaleLowerCase().includes(searchVal);
//       });

//       return ( 
//         <div className = "App">
//           <h1 className="app-title">Monsters Rolodex</h1>

//             <SearchBox onChangeHandler={onSearchChange} placeholder='monsters search' className='monsters-search-box'/>
//             <CardList monsters={monsterSearch} />

//         </div>
//       );
//     }
// }

//export default App;

// function App() {
// return ( < div className = "App" >
//     <
//     header className = "App-header" >
//     <
//     img src = { logo }
//     className = "App-logo"
//     alt = "logo" / >
//     <
//     p >
//     Edit < code > src / App.js < /code> and save to reload. < /
//     p > <
//     a className = "App-link"
//     href = "https://reactjs.org"
//     target = "_blank"
//     rel = "noopener noreferrer" >
//     Learn React <
//     /a> < /
//     header > <
//     /div>
// );
// }






// class App extends Component {
//   constructor() {
//     super();

//     this.state = { //initialize local state
//       name: {firstName: 'Andy', lastName: 'Bin'},
//     }
//   }

//     render() {
//         return ( 
//         <div className = "App">
//           <header className = "App-header">
//             <img src = { logo } className = "App-logo" alt = "logo"/>

//             <p>My name is {this.state.name.firstName} {this.state.name.lastName}</p>
//             <button onClick={()=> {
//                 this.setState(()=> {
//                   return {
//                     name: {firstName: 'Lina', lastName: 'Vdovina'},
//                 };
//                  }, () => {console.log(this.state);}
//                 );
//               }}
//             >
//               Change name
//             </button>

//           </header> 
//         </div>
//       );
//   }
// }