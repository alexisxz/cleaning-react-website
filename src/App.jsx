import { Route, Routes } from 'react-router-dom'
import CleaningHome from './routes/CleaningHome'
import Home from './routes/Home'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cleaning' element={<CleaningHome />} />
        </Routes>
    )
}

export default App