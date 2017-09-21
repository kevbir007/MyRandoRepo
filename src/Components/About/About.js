import React from 'react';
import {getLukeSkywalker, getPeople, getShips, getPlanets} from '../../starWars';


export default class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            luke: {},
            people: {},
            ships: {},
            planets: {}
        }
    }

componentDidMount() {
    getLukeSkywalker().then(luke => {
        this.setState({
            luke: luke
        })
    })

    getPeople().then(people => {
       console.log(people)
        this.setState({
            people
        })
    })

    getShips().then(ships => {
        console.log(ships)
        this.setState({
            ships
        })
    })

    getPlanets().then(planets => {
        console.log(planets)
        this.setState({
            planets
        })
    })
}
// need to loop over this.state.people, then save the names to a new array
// for(var i = 0; i < this.state.people.length; i++){

// }

    render() {
        return(
            <div>
                <h3>About Page</h3>
                <h1>{this.state.luke.name}</h1>

                
            </div>
        );
    }
}