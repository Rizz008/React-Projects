import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = (id) => {
    let newTour = data.filter((tour) => tour.id !== id)
    setData(newTour)
    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

  if (data.length === 0) {
    return <section>
      <div className="title">
        <h2>no tours left</h2>
        <div className="underline"></div>
        <button className="btn" onClick={() => fetchData()}>refresh</button>
      </div>
    </section>
  }

  return <main>
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <Tours data={data} handleClick={handleClick} />
    </section>
  </main>
}

export default App
