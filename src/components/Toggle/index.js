import React, { useState } from 'react';
import {FiSun} from 'react-icons/fi';

import { Container } from './style';

function Toggle(props) {
  // 
  const [dark, setDark] = useState(true);

    const handleTheme = () => {
        setDark(!dark)
        console.log(dark);
        return handleTheme
    }

  return (  
      <Container darkness={dark}>
          <FiSun onClick={handleTheme} />
      </Container>
  )
}

export default Toggle;

