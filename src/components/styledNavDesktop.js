import styled from 'styled-components';

export const NavDesktopContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 55% 45%;
  justify-items: center;
  align-items: center;
  color: white;
  width:100%;
  height:88px;
  background-color: #0F0E17;
`;

export const ButtonDesktopurriculum = styled.button`
  background-color: #FF8906;
  color: white;
  width: 200px;
  height: 48px;
  border: none;
`;
export const ImgLogo = styled.img`
  height:45px;
`;
export const ContainerLinksNav = styled.div`
  width:100%;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr) ;
`;

export const ContainerButtonDesktop = styled.div`
  height:100%;
  width:100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
`;
