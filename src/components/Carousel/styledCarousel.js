import styled from 'styled-components';

export const DivCarousel = styled.div`
background: url(${(props) => props.image});
background-size: cover;
background-position: center;
height:40vh;
margin: 0;
`;
