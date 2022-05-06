import React, { Component } from 'react';
import getData from '../utils/getData';
class CardDetails extends Component {
    data= await getData();
    render() {
        return (
            <div className='card_details'>
                <div className='card_photo center circle'>
                    <img src="${data.picture.large}" alt="${data.name.first}"/>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;" xml:space="preserve">
                        <circle cx="50" cy="50" r="40" />
                    </svg>
                </div>
                <p className='card_title'>Hi, My name is</p>
                <p className='card_value'>${data.name.first} ${data.name.last}</p>
            </div>
        );
    }
}

export default CardDetails;