import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Cards, { Card } from '../src/index'
import './style.css'

const data = ['Alexandre', 'Thomas', 'Lucien']

const CustomAlertLeft = () => <span>Nop</span>
const CustomAlertRight = () => <span>Ok</span>
const LeftButton = () => <span>left</span>
const RightButton = () => <span>right</span>

storiesOf('Tinder card', module)
  .add('simple', () => (
    <div>
      <h1>react swipe card</h1>
      <Cards onEnd={action('end')} className='master-root'>
        {data.map(item => 
          <Card 
            onSwipeLeft={action('swipe left')} 
            onSwipeRight={action('swipe right')}>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
    </div>
  ))
  .add('custom alert', () => (
    <div>
      <h1>react swipe card</h1>
      <Cards
        alertRight={<CustomAlertRight />}
        alertLeft={<CustomAlertLeft />}
        onEnd={action('end')}
        className='master-root'>
        {data.map(item =>
          <Card>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
    </div>
  ))
  .add('with buttons', () => (
    <div>
      <h1>react swipe card</h1>
      <Cards
        alertRight={<CustomAlertRight />}
        alertLeft={<CustomAlertLeft />}
        onEnd={action('end')}
        className='master-root'>
        {data.map(item =>
          <Card
            buttonLeft={<LeftButton />}
            buttonRight={<RightButton />}
            onSwipeLeft={action('swipe left')}
            onSwipeRight={action('swipe right')}>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
    </div>
  ))
  .add('with custom alert timeout', () => (
    <div>
      <h1>react swipe card</h1>
      <Cards
        alertTimeout={1000}
        onEnd={action('end')}
        className='master-root'>
        {data.map(item =>
          <Card>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
    </div>
  ))