import './App.css'
import Header from './components/header'
import Breadcrumbs from './components/breadcrumbs'
import Contact from './components/contact'
import RequestQuote from './components/RequestQuote'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <Header />
       <main>
        <Breadcrumbs />
        <Contact />
        <RequestQuote/>
      </main>
      <Footer/> 
    </div>
  )
}

export default App
