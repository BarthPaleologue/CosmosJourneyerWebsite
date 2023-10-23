import './App.scss';

import { View1 } from './View1'
import { View2 } from './View2';

export default function Home() {
  let i = 0;
  return (
    <main className='App'>
      <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' />
      
      <View1 />
      {/*<View2 />*/}
    </main>
  )
}
