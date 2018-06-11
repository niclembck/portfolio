import React from 'react';
import styled from 'styled-components';

import LayoutStyles from '../../components/LayoutStyles/LayoutStyles';
import SelectedWork from '../../components/SelectedWork/SelectedWork';

const { CenteredContent } = LayoutStyles;

const Work = (props) => {
  return (
    <Container>
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
