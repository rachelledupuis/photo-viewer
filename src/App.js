import './App.css';
import { PhotoViewer } from './components/photoViewer/PhotoViewer';
import { ImageUrls } from './components/imageUrls/ImageUrls.jsx';
import { SelectImage } from './components/SelectImage';

function App() {
  return (
    <div>
      <h1>
        <PhotoViewer src={"https://picsum.photos/id/623/1600/900.jpg"}/>
      </h1>
      <div><ImageUrls/></div> 
    </div>
  );
}

export default App;
