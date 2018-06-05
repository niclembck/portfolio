import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import HeroContainer from '../../components/HeroContainer/HeroContainer';
import SelectedWork from '../../components/SelectedWork/SelectedWork';

const { CenteredContent } = LayoutStyles;

const Work = (props) => {
  return (
    <Container>
      <HeroContainer>
        <div
          style={{
            backgroundColor: 'burlywood',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
          Work
        </div>
      </HeroContainer>
      <CenteredContent>
        <SelectedWork />
      </CenteredContent>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  flex: 1;
`;
