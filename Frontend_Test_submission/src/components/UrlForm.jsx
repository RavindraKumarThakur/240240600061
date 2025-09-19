import { useState } from 'react';

function UrlForm({ setUrls }) {
  const [originalUrl, setOriginalUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!originalUrl) return;

    // Replace with your backend endpoint
    const res = await fetch('http://localhost:3000/api/url/shorturl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: originalUrl })
    });

    const data = await res.json();
    setUrls(prev => [...prev, data]);
    setOriginalUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="url"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter a long URL"
        className="flex-1 px-4 py-2 border rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Shorten
      </button>
    </form>
  );
}

export default UrlForm;