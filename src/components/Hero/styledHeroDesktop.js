import styled from 'styled-components';

export const DivLayoutHeroDesktop = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 90%;
  margin: 0 auto;
  padding: 6rem 0;
`;
export const ImgHero = styled.img`
object-fit: cover;
object-position: center;
max-width:400px;
max-height:400px;
width: 100%;
`;
export const H2White = styled.h2`
font-size: 6rem;
  color: white;
`;
export const PWhite = styled.p`
font-size: 2.5rem;
  color: #A7A9BE;
`;
export const DivContainerImgHero = styled.div`
display: flex;
justify-content:center;
`;
export const DivContainerWords = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;
