import React, { Component } from 'react';
import getData from '../utils/getData';
import github from '@images/github.png';
import twitter from '@images/twitter.png';
import instagram from '@images/instagram.png';
class Card extends Component {
    //data= await getData();
    constructor() {
        super()
        this.state = { data: {}, loading: true};
    }
    componentDidMount() {
        getData()
            .then( json => { 
                this.setState({ data: json, loading: false }) 
            })
            .catch(error => console.error(error));
    }
    getImage(){
        return <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new -580 439 577.9 194"
                    viewBox="0 0 100 100" >
                    <circle cx="50" cy="50" r="40"></circle>
                </svg>
    }
    render() {
        if (this.state.loading){
            return (
                <div>
                    loading!
                </div>
            )
        }
        else{
            console.log("State ",this.state)
            return (
                <div className='card'>
                    Hello React!
                    <div className='card_details'>
                        <div className='card_photo center circle'>
                            <img src={this.state.data.picture.large} alt={this.state.data.name.first}/>
                            {this.getImage()}
                        </div>
                        <p className='card_title'>Hi, My name is</p>
                        <p className='card_value'>{this.state.data.name.first} {this.state.data.name.last}</p>
                    </div>
                    <div className='card_userdata'>
                        <ul>
                            <li>{this.state.data.email}</li>
                            <li>{this.state.data.location.country}</li>
                        </ul>
                    </div>
                    <div className='card_social'>
                        <a href="https://twitter.com/gndx">
                        <img src={twitter} />
                        </a>
                        <a href="https://github.com/gndx">
                        <img src={github} />
                        </a>
                        <a href="https://instagram.com/gndx">
                        <img src={instagram} />
                        </a>
                    </div>
                </div>
            );
        }
    }
}

export default Card;