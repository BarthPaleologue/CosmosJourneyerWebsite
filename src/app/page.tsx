import './App.scss';

import { View1 } from './View1'
import { View2 } from './View2';
import { ViewRoadmap } from './ViewRoadmap';

export default function Home() {
  return (
    <main className='App'>      
      <View1 />
      <ViewRoadmap />
      <View2 />
    </main>
  )
}
