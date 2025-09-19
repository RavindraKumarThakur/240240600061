import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import { useState } from 'react';

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">🔗 URL Shortener</h1>
      <UrlForm setUrls={setUrls} />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;