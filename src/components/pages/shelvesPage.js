import React, {Component} from 'react';
import styled from 'styled-components';

import Shelf from '../shelf';


const Wrapper = styled.div`
    margin-top: 100px;
`;

const ShelveTitle = styled.h2`
    text-align: center;
`;

const ShelvesWrapper = styled.div`

`;


export default class ShelvesPage extends Component {
    render() {
        return (
            <Wrapper>
                <ShelveTitle>Моя Полка</ShelveTitle>
                <ShelvesWrapper>
                    <Shelf></Shelf>
                </ShelvesWrapper>
            </Wrapper>
        );
    }
}