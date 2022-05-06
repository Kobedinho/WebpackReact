import React, { Component } from 'react';

class CardUserData extends Component {
    render() {
        return (
            <div className='card_userdata'>
                <ul>
                    <li>${data.email}</li>
                    <li>${data.location.country}</li>
                </ul>
            </div>
        );
    }
}

export default CardUserData;