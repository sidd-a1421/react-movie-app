import React from 'react'

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className='pattern'>
        <div className='wrapper'>
          <header>
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          </header>
          <p>Search</p>
        </div>
      </div>
    </main>
  )
}

export default App
