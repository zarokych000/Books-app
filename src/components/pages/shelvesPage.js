import React, {Component} from 'react';
import styled from 'styled-components';
import BookService from '../../service/bookService';

import Shelf from '../shelf';


const Wrapper = styled.div`
    margin-top: 100px;
`;

const ShelveTitle = styled.h2`
    text-align: center;
`;

const ShelvesWrapper = styled.div`
    padding: 0 20px;
`;


export default class ShelvesPage extends Component {
    render() {
        const bookService = new BookService();

        bookService.getResource()
        
        return (
            <Wrapper>
                <ShelveTitle>Полки</ShelveTitle>
                <ShelvesWrapper>
                    <Shelf></Shelf>
                </ShelvesWrapper>
            </Wrapper>
        );
    }
}