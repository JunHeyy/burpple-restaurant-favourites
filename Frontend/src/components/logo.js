import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 800px; /* Adjust size as needed */
  margin: 20px;
  height: 500px;
`;

const Logo = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '0 auto'
    }}>
        <LogoImage
            src="https://www.burpple.com/assets_dev/web/header/burpple-logo-4a7d4c6d11e7051be5519a1fef5f402febc7e9da4231e0cc9cb448b86f0245be.svg"
            alt="Burpple Logo"
            style={{ width: '200px', height: 'auto' }}
        />
    </div>
);

export default Logo;
