import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);      // Track error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.todos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Display different states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <table className="min-w-full table-auto border-collapse text-left">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 font-semibold text-sm text-gray-600">ID</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-600">Description</th>
            <th className="px-4 py-2 font-semibold text-sm text-gray-600">UserID</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {
            if (index < 10) {
              return <tr className="hover:bg-gray-50 border-b" key={item.id}>
                <td className="px-4 py-2 text-gray-800">{item.id}</td>
                <td className="px-4 py-2 text-gray-800">{item.todo}</td>
                <td className="px-4 py-2 text-gray-800">{item.userId}</td>
              </tr>
            }
          }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
