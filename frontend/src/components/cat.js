import React from 'react';
import styled from 'styled-components';

// const Layout = styled.a
// max-width: 150px;

const StyledCat = styled.a`

  width: 100px;
  margin: 0 auto;
  `
  



const catGif = () => {
    
    return(
        <StyledCat >
            <img src="https://media.tenor.com/images/dab9fdca9a4f9125b5fae019ec84550c/tenor.gif" style = {{width: "100%"}}/>
        </StyledCat>
    );
    }

export default catGif;