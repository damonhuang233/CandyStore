import styled from '@emotion/styled/macro';

const MainNavbar = styled.div`
  background-color: rgba(255, 248, 220, 0.7);
  padding: 12px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(125, 0, 0, 0.8);
`;

const Title = styled.div`
  height: 60px;
  color: white;
  font-size: 36px;
  text-shadow: 2px 2px 8px #FF0000;
  margin: 5px;
`;

const Icon = styled.img`
  float: left;
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;
`;

function Navbar() {
  return (
    <MainNavbar>
      <Icon src="icon.svg" alt="candy icon" />
      <Title>
        Penny Candy Store
      </Title>
    </MainNavbar>
  );
}

export default Navbar;
