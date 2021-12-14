import React from 'react';
import {
  FooterContainer,
  CompanyContent,
  Highlight,
  PhoneLink,
} from './Footer.styles';

function Footer({ address, phoneNumber }) {
  var currentYear = new Date();

  return (
    <FooterContainer>
      <CompanyContent>
        <p>Copyright &#169; {currentYear.getFullYear()}</p>
        <Highlight to={'/'}>LogoIpsum</Highlight>
        <p>
          {address.street} {address.city}, {address.state} {address.zipCode}
        </p>
        <PhoneLink href={`tel:${phoneNumber}`}>{phoneNumber}</PhoneLink>
      </CompanyContent>
    </FooterContainer>
  );
}

export default Footer;
