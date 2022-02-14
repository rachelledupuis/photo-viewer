import './App.css';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { ImageUrls } from './ImagesUrls/ImageUrls';
import { SelectImage } from './SelectImage/SelectImage';

function App() {
  return (
    <div>
      <h1>
        <PhotoViewer src="https://picsum.photos/id/623/1600/900.jpg"/>
      </h1>
        <ImageUrls/>
    </div>
  );
}

export default App;
