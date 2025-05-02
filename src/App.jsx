
import './App.css'
import React, { Suspense,createContext } from 'react'

const LoadingTaskCom =React.lazy(()=>import('./AddTask'));
export const Details =createContext('');
function App() {
  return (
    <>

      <div className="card">
      <Details.Provider value={{title:'To-Do List'}}>
        <Suspense fallback={<><p>Loading</p></>}>
        <LoadingTaskCom />
        </Suspense>       
         </Details.Provider>

      </div>
     
    </>
  )
}

export default App
