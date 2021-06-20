import styled from 'styled-components';

export const DivContainerDesktop = styled.div`
  margin: 4rem auto;
  width:98%;
`;
export const H2BlackDesktop = styled.h2`
  font-size:4rem;

`;
export const PBlackDesktop = styled.p`
  display: flex;
  align-items:flex-end;
  font-size:1.6rem;
`;
export const DivCardProyectDesktop = styled.div`
background:url(${(props) => props.image});
width:100%;
height:100%;
background-size: cover;
background-position: center;
`;
export const DivItemsProjects = styled.div`
display: grid;
height:600px;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 5rem;
.item-1{
  grid-column-start: 1;
  grid-column-end: 3;
  display:flex;
  justify-content: center;
  align-items: flex-end;
}
.item-2{
  grid-column-start: 1;
  grid-column-end: 2;
  display:flex;
  justify-content: center;
  align-items: flex-end;
}
.item-3{
  grid-column-start: 2;
  grid-column-end: 3;
  display:flex;
  justify-content: center;
  align-items: flex-end;
}
`;
export const DivContainerWordsDesktop = styled.div`
margin: 5rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
`;
export const DivCard = styled.div`
width:80%;
height: 200px;
max-width: 330px;
background-color:#0F0E17;
box-shadow: 12px 16px 32px 0px #00000040;
padding: 3rem;
`;
export const H4White = styled.h4`
font-size:2.5rem;
color:white;
`;
export const PWhite = styled.p`
font-size: 1.4rem;
color:#A7A9BE;
`;
export const ButtonVerProyecto = styled.button`
color: white;
height:35px;
padding: 5px 10px;
background-color: #FF8906;
border: 1px solid #FF8906;
&:hover {
  background-color: #d17103;
}
`;
export const ButtonVerCodigo = styled.button`
border: 1px solid #FF8906;
padding: 5px 10px;
color: #FF8906;
background-color:transparent;
height:35px;
&:hover {
  background-color: #FF8906;
  color: white;
}
`;
export const DivButtons = styled.div`
display: flex;
justify-content: space-around;
margin: 1rem 0;
`;

