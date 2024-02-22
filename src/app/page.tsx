import './App.scss';

import { View1 } from './View1'
import { View2 } from './View2';
import { ViewRoadmap } from './ViewRoadmap';

export default function Home() {
  let i = 0;
  const kofi =
  `<script>
kofiWidgetOverlay.draw('cosmosjourneyer', {
'type': 'floating-chat',
'floating-chat.donateButton.text': 'Support me!',
'floating-chat.donateButton.background-color': '#ffffff',
'floating-chat.donateButton.text-color': '#323842'
});
</script>`
  return (
    <main className='App'>
      <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' />

      <div dangerouslySetInnerHTML={{ __html: kofi }} />
      
      <View1 />
      <ViewRoadmap />
      <View2 />
    </main>
  )
}
