import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DynamicWaypoints from '../DynamicWaypoints/DynamicWaypoints';

const test1 = [
  {
    label: 'SORT-OE',
    content: <div>
               <div style={{ overflow: 'hidden' }}>
                <img src="/images/thumb-sortoe.jpg" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
               </div>
               <Link to="/work/sortoe" className="animatedLink">SORT-OE</Link>
               <p style={{ marginTop: 0 }}>Something</p>
             </div>,
    topOffset: '0',
    bottomOffset: '20%'
  }
];
const test2 = [
  {
    label: 'Earbits Card',
    content: <div>
               <div style={{ overflow: 'hidden' }}>
                <img src="/images/thumb-earbits.jpg" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
               </div>
               <Link to="work/earbits" className="animatedLink">Earbits Radio</Link>
               <p style={{ marginTop: 0 }}>UX / UI Design</p>
             </div>,
    topOffset: '0',
    bottomOffset: '20%'
  }
];
const test3 = [
  {
    label: 'Illustration Card',
    content: <div>
               <div style={{ overflow: 'hidden' }}>
                <img src="/images/thumb-doodles.jpg" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
               </div>
               <Link to="work/illustrations" className="animatedLink">Illustrations</Link>
               <p style={{ marginTop: 0 }}>Something</p>
             </div>,
    topOffset: '0',
    bottomOffset: '20%'
  }
];
const test4 = [
  {
    label: 'UCSF Card',
    content: <div>
               <div style={{ overflow: 'hidden' }}>
                <img src="/images/thumb-ucsfmc.jpg" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
               </div>
               <Link to="/" className="animatedLink">UCSF Medical Center</Link>
               <p style={{ marginTop: 0 }}>Something</p>
             </div>,
    topOffset: '0',
    bottomOffset: '20%'
  }
];

const SelectedWork = (props) => {
  return (
    <div>
      <h1>Selected Work</h1>
      <Row>
        <Cell>
          <DynamicWaypoints data={ test1 } />
        </Cell>
        <Cell>
          <DynamicWaypoints data={ test2 } />
        </Cell>
        <Cell>
          <DynamicWaypoints data={ test3 } />
        </Cell>
        <Cell>
          <DynamicWaypoints data={ test4 } />
        </Cell>
      </Row>
    </div>
  );
};

export default SelectedWork;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Cell = styled.div`
  flex: 1;
`;
