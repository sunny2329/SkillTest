import { useEffect, useState } from 'react';
import Display from './components/Display';
import Navbar from './components/Navbar';

function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://freetestapi.com/api/v1/students`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched or if there is an error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Display students={students} isLoading={isLoading} /> {/* Pass isLoading to Display */}
      </div>
    </>
  );
}

export default App;
