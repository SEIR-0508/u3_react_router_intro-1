import Header from './components/Header'
import Main from './components/Main'
import './App.css'

function App() {
  return (
    <div className="app">

      <div className="app-header">
        {/* to bring component in: */}
        <Header/>
      </div>
      <main className="app-main">
        {/* to bring component in: */}
        <Main/>
      </main>
      
    </div>
  )
}

export default App
