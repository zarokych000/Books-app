import React, {Component} from 'react';
import styled from 'styled-components';
import ShelfItem from '../shelfItem';

export default class Shelf extends Component {
    render() {
        return (
            <div>
                <ShelfItem/>
            </div>
        );
    }
}