import ShelfItem from '../shelfItem';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import More from './dot-menu.svg';
import Pencil from './pencil.svg';
import Trash from './trash.svg';

const shortId = require('shortid');


const ShelfWrapper = styled.div`
    &:first-child {
        margin-top: 75px;
    }
    margin-top: 55px;

    display: flex;
    flex-direction: column;
    border: 2px solid gray;
`;

const ShelfControl = styled.div`
    margin: auto;
    margin-top: 10px;
    width: 100%;
    max-width: 450px;
`;

const ShelfSettings = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
`;

const BigIconWrapper = styled(IconWrapper)`
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

const ShelfTitle = styled.h4`
    text-align: center;
`;

const ShelfMore = styled.li`
    display: flex;
    align-items: center;
    width: 40px;
    cursor: pointer;

    @media (max-width: 576px) {
        position: absolute;
        bottom: 0;
        right: 0;
    }

`;

const ShelfList = styled.ul`
    position: relative;

    display: flex;
    justify-content: space-around;
    padding: 30px 10px;

    list-style: none;

    @media (max-width: 576px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;


const Shelf  = (props) => {
    const {shelf, title, onDelete} = props;
        
    const items = shelf.map(({title: bookTitle, author, url}, i) => {
        const id = shortId.generate();
        if (i < 5) {
            return (
                <ShelfItem
                    key={id} 
                    url={url}
                    title={bookTitle}
                    author={author}
                />
            );  
        }

        return null;
    });

    return (
        <ShelfWrapper>
            <ShelfControl>
                <ShelfTitle>{title}</ShelfTitle>
                <ShelfSettings>
                    <BigIconWrapper>
                        <Icon src={Pencil}/>
                    </BigIconWrapper>
                    <IconWrapper
                        onClick={onDelete}>
                        <Icon src={Trash}/>
                    </IconWrapper>
                </ShelfSettings>
            </ShelfControl>
            <ShelfList className="shelf">
                {items}
                <ShelfMore>
                    <Link to={`shelves/${title}`} style={{width: "100%"}}>
                        <img src={More} alt="more"/>
                    </Link>
                </ShelfMore>
            </ShelfList>
        </ShelfWrapper>
    );
}

export default Shelf;