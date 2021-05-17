import styled from 'styled-components';

const ShelfImgWrapper = styled.div`
    width: 100%;
    height: 230px;
`;

const ShelfElement = styled.li`
    width: 100%;
    max-width: 150px;
    margin-right: ${props => props.margin || "0"};
    margin-top: ${props => props.margin || "0"};
    @media (max-width: 576px) {
        margin-top: 20px;
        margin-right: 20px;
    }
`;

const ShelfImg = styled.img`
    max-width: 100%;
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

const ShelfTitle = styled.h5`
    text-align: center;
    margin: 0;
    margin-top: 10px;
`;

const ShelfItem = (props) => {
    const {url, title, shelfPage} = props;
    return(
        <ShelfElement margin={shelfPage ? "40px" : 0} className="shelf__elem">
            <ShelfImgWrapper className="shelf__img-wrapper">
                <ShelfImg className="shelf__img" src={url}/>
            </ShelfImgWrapper>
            <ShelfTitle className="shelf__title">{title}</ShelfTitle>
        </ShelfElement>
    )
};

export default ShelfItem;