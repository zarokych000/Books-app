import React, {Component} from 'react';
import styled from 'styled-components';
import ShelfItem from '../shelfItem';

const ShelfList = styled.div`
    padding: 5px 10px;
    border: 2px solid black;
`;

export default class Shelf extends Component {
    render() {
        return (
            <ShelfList className="shelf">
                <ShelfItem/>
            </ShelfList>
        );
    }
}