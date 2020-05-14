import React from 'react';
import styled from 'styled-components';
import Button from './Components/Button/Button';
import Surface from './Components/Surface/Surface';
import Title from './Components/Titles/Title';

function App() {

  const primary = '#e524af'
  const secondary = '#18D8AA'

  const Section = styled.div`
    height: 100%;
    display: inline-flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: center;
  `

  return (
    <div style={{
      padding: '0 3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Surface>
        <Section direction='column'>
          <Title>Button Samples</Title>
          <Section>
            <Button color={secondary} border='pill'>Pill Button</Button>
            <Button type='outlined' color={primary} border='pill'>Pill Button</Button>
            <Button disabled color={primary}>Disabled Button</Button>
            <Button type='outlined' color={secondary}>Normal Button</Button>
          </Section>
        </Section>
      </Surface>

      <Surface>
        <Section direction='column'>
          <Title>Typography Samples</Title>
          <div>

          </div>
        </Section>
      </Surface>
    </div>
  );
}

export default App;
