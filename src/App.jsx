import { useEffect, useState } from 'react'
import Tile from './components/Tile'
import Display from './components/Display'
import Navbar from './components/Navbar'

function App() {
  const [students, setStudents] = useState([])
  const social = {
    github: "https://github.com/sobhit-chauhan",
    twitter: "https://twitter.com/sobhit_chauhan",
    linkedin: "https://www.linkedin.com/in/sobhit-chauhan/",
    youtube: "https://www.youtube.com/"
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://freetestapi.com/api/v1/students`);
      const data = await response.json();
      setStudents(data);
    }
    fetchData();
  }, [])

  return (
    <>
      <div>
        <Navbar/>
        <Display students={students} />
      </div>

    </>
  )
}

export default App
