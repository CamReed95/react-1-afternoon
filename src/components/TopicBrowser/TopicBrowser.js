import React, { component } from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterBrowser';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';



export default class TopicBrowser extends Component {
    render() {
        return (
        <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
        </div>
        )
    }
}

