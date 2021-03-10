import styled from '@emotion/styled/macro';

const FooterDiv = styled.footer`
  margin: 0;
  margin-top: 50px;
  margin-bottom: 150px;
`;

const FooterItem = styled.p`
  margin: 0 auto;
  text-align: center;
`;

function Footer() {
  return (
    <FooterDiv>
      <hr />
      <FooterItem>Contact: huangj2@oregonstate.edu</FooterItem>
      <FooterItem>Power by React</FooterItem>
    </FooterDiv>
  );
}

export default Footer;
