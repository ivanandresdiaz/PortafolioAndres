import styled from 'styled-components';

export const DivServiciosDesktop = styled.div`
width: 100%;
height: 600px;
padding:7rem;
`;
export const H2ServiciosDesktop = styled.h2`
font-size: 5rem;
margin: 2rem 0;
`;
export const DivServiciosLayout = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
`;

export const DivCardServicio = styled.div`
display:grid;
grid-template-rows: repeat(6, 1fr);
height: 350px;
`;
export const H2CardServicio = styled.h2`
color: #0F0E17;
font-size:3rem;
`;
export const PItem = styled.p`
color: #0F0E17;
font-size:2rem;
`;
export const ButtonCardServicio = styled.button`
  width:70%;
  font-size:1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0F0E17;
  color: #FF8906;
  border: none;
`;
