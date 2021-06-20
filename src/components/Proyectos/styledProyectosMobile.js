import styled from 'styled-components';

export const DivProyectoMobile = styled.div`
margin: 4rem 0;
`;
export const H2Black = styled.h2`
margin: 1rem 0;

  font-size: 2.5rem;
`;
export const PBlack = styled.p`
margin: 1rem 0;
  font-size: 1.6rem;
`;
export const DivContainerCardMobile = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width:100%;
margin: 40px  auto;
`;
export const ImgCardProyect = styled.img`
height: 170px ;
object-fit: cover;
object-position: center;
width:100%;
`;
export const DivContainerDescriptionCardMobile = styled.div`
box-shadow: 12px 16px 32px 0px #00000040;
  width:90%;
  padding: 2rem;
  margin: 0px auto;
  margin-top:-40px;
  background-color:#0F0E17;
`;
export const H4White = styled.h4`
margin: 1rem 0;
color: #FFFFFF;
font-size:2rem;
`;
export const PWhite = styled.p`
margin: 1rem 0;
color: #A7A9BE;
font-size:1.4rem;
`;
export const DivButtons = styled.div`
display: flex;
flex-direction: column;
`;
export const ButtonVerProyecto = styled.button`
margin: 1rem 0;
color: white;
height:50px;
background-color: #FF8906;
border: 1px solid #FF8906;
&:hover {
  background-color: #d17103;
}
`;
export const ButtonVerCodigo = styled.button`
border: 1px solid #FF8906;
color: #FF8906;
background-color:transparent;
margin: 1rem 0;
height:50px;
&:hover {
  background-color: #FF8906;
  color: white;
}
`;
