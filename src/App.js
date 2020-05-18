import React from 'react';
import styled from 'styled-components';
import Button from './Components/Button/Button';
import Surface from './Components/Surface/Surface';
import Title from './Components/Typography/Title';

function App() {

  const primary = '#e524af'
  const secondary = '#18D8AA'

  const Section = styled.div`
    height: 100%;
    width: 100%;
    display: inline-flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: center;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'}
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
          <Title variant='h4'>Button Samples</Title>
          <Title variant='h6' style={{color: primary, paddingLeft: '2px'}}>Incomplete</Title>
          <Section wrap>
            <Button border='pill'>Pill Button</Button>
            <Button type='outlined' border='pill'>Pill Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button type='outlined'>Normal Button</Button>
          </Section>
        </Section>
      </Surface>

      <Surface>
        <Section direction='column'>
          <Title variant='h4'>Typography Samples</Title>
          <Title variant='h6' style={{color: primary, paddingLeft: '2px'}}>Incomplete</Title>
        </Section>
        <Section direction='column'>
          <Title variant='h1'>h1: Heading</Title>
          <Title variant='h2'>h2: Heading</Title>
          <Title variant='h3'>h3: Title</Title>
          <Title variant='h4'>h4: Title</Title>
          <Title variant='h5'>h5: Title</Title>
          <Title variant='h6'>h6: Subtitle</Title>
        </Section>
      </Surface>
    </div>
  );
}

export default App;
