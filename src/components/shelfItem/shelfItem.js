import styled from 'styled-components';

const ShelfElement = styled.div`
    width: 100%;
    max-width: 100px;

    padding: 10px;
    
    background: #eee;
`;

const ShelfImgWrapper = styled.div`
    
`;

const ShelfImg = styled.img`
    max-width: 100%;
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

const ShelfItem = () => {
    return(
        <ShelfElement>
            
        </ShelfElement>
    )
};

export default ShelfItem;