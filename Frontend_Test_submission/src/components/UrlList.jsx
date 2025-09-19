function UrlList({ urls }) {
  return (
    <div className="space-y-4">
      {urls.map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-md shadow-sm border">
          <p className="text-sm text-gray-600">Original: <a href={item.originalUrl} className="text-blue-500">{item.originalUrl}</a></p>
          <p className="text-sm text-gray-800">Shortened: <a href={item.originalUrl} className="text-green-600">{item.shortUrl}</a></p>
        </div>
      ))}
    </div>
  );
}

export default UrlList;