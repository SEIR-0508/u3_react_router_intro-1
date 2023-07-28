//
import { Route, Routes } from 'react-router-dom'
//in order to make the routes, need to import components
import Home from './Home'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const Main = () => {
    //all js goes here:
    const userName="JenN1"
    const dayOfWeek="Wednesday"

  return (
    <div className="routes-container">
      <Routes>
        {/* Routes go here! */}
        <Route path="/" element={<Home username={userName} dayOfWeek={dayOfWeek}/>}/>
        <Route path="/componentA" element={<ComponentA/>}/>
        <Route path="/componentb" element={<ComponentB/>}/>
      </Routes>
    </div>
  )
}
export default Main
