import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);  

  const handleSubmit = async (term, perPage = 10) => {
    const result = await searchImages(term, perPage);
    setImages(result);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header / Nav Bar */}
      {/* <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <span className="text-white text-xl">🖼️</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ImageFinder
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>✨</span>
            <span>Powered by Unsplash</span>
          </div>
        </div>
      </header> */}

      {/* Your existing components */}
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;