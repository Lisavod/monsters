import './card.styles.css';
import React from 'react';


const Card = ({monster}) => {
    const {id, name, email} = monster
    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt={`monser ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>

        </div>
    )
    
};


export default Card;
//-------class component--------
// import {Component} from 'react';
// import './card.styles.css'

// class Card extends Component{

//     render (){
//         const {name, email, id} = this.props.monster;
//         return (
                    
//             <div className="card-container" key={id}>
//                 <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt={`monser ${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>

//             </div>
//         )
//     }
// }

// export default Card;
