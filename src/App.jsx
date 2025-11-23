import './App.css'
 import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'

import Tickets from './Components/Tickets/Tickets'

import { Suspense, useState } from 'react'
import Footer from './Components/Footer/Footer';


const fetchTickets = async ()=>{
  const res = await fetch ("/ticket.json")
  return res.json()
}

function App() {
  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)
  const ticketPromise = fetchTickets()

  return (
    <>
    <Navbar></Navbar>
    <Banner 
    inProgressCount={inProgressCount}
    resolvedCount={resolvedCount}></Banner>
      
    
    <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
      <Tickets ticketPromise={ticketPromise}
      setInProgressCount={setInProgressCount}
      setResolvedCount={setResolvedCount}>
        
      </Tickets>
      

    </Suspense>
    <Footer/>


     <ToastContainer/>
    </>
  )
}

export default App