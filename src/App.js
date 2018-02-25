import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Slider, Progress, Box, Subhead, Panel, Drawer, Donut, Row, Column, Banner, Heading, Avatar, Badge, BackgroundImage } from 'rebass'

class App extends Component {
  render() {
    return (
      <div className="App">


        <h1>Avatar</h1>
        <Avatar
          size={32}
          src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
        />

        <h1>Background Image</h1>
        <BackgroundImage
          ratio={1/2}
          src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
        />

        <h1>Heading</h1>
        <Heading>
          Hello
          <Badge>
            Beep
          </Badge>
        </Heading>


        <h1>Banner</h1>
        <Banner
          color='white'
          bg='gray8'
          backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
          <Heading
            f={[ 4, 5, 6, 7 ]}>
            Hello
          </Heading>
        </Banner>

        <h1>Column</h1>
        <Row>
          <Column>Column</Column>
          <Column>Column</Column>
          <Column>Column</Column>
        </Row>

        <h1>Donut</h1>
        <Donut
          value={2/3}
          strokeWidth={3}
          size={256}
          color='blue'
        />


        <h1>Panel</h1>
        <Panel color='blue'>
          <Panel.Header
            color='white'
            bg='blue'>
            Hello
          </Panel.Header>
          <Box p={3}>
            <Subhead>
              Panel
            </Subhead>
          </Box>
          <Panel.Footer color='blue'>
            Footer
          </Panel.Footer>
        </Panel>

        <h1>Progress</h1>
      <Progress
        value={1/3}
      />

      <h1>Slider</h1>
      <Slider />


      </div>
    );
  }
}

export default App;
