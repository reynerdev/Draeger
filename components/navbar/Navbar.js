import React from 'react';
import Image from 'next/image';
import { ContainerLayout } from '../layout';
import { backgrounds, primary, neutral, typeScale } from '../../utils';
import styled from 'styled-components';
const Navbar = () => {
  return (
    <FullPage>
      <ContainerLayout>
        <Nav>
          <LogoWrapper>
            <Image
              width="100%"
              height="100%"
              src="/images/draeger.svg"
              alt="LogoDraeger"
            />
          </LogoWrapper>
          <NavMenu>
            <li className="nav-item">Home</li>
            <li className="nav-item">Llamadas</li>
            <li className="nav-item">Equipos</li>
          </NavMenu>
          <Profile className="profile">
            <img
              width="20%"
              src="/images/profilePic.jpg"
              alt="Profil Picture"
            />
          </Profile>
        </Nav>
      </ContainerLayout>
    </FullPage>
  );
};

const FullPage = styled.div`
  background-color: ${primary.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  & li {
    list-style: none;
    margin: 0px;
  }
`;

const Nav = styled.div`
  display: flex;
  height: 50px;
`;

const LogoWrapper = styled.div`
  display: flex;
`;

//List of buttons
const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  margin-left: 30px;
  padding: 0px;
  font-size: ${typeScale.paragraph};
  font-weight: 400;
  color: ${neutral[700]};
  & .nav-item {
    ${'' /* background-color: pink; */}
    flex-grow: 1;
    padding: 0 20px;
  }
`;

const Profile = styled.div`
  display: flex;
  margin-left: auto;
`;
export default Navbar;
