import React from 'react'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
import Routes from './Routes'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  )
}

export default App