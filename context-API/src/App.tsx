import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Student1 from './pages/s1/Student-1'
import Student2 from './pages/s2/Student-2'
import Student3 from './pages/s3/Student-3'
import Teacher1 from './pages/t1/Teacher-1'
import Teacher2 from './pages/t2/Teacher-2'
import Teacher3 from './pages/t3/Teacher-3'
import { GlobalContextProvider, StudentContextProvider, TeacherContextProvider } from './contexts'
function App() {
  return (
<GlobalContextProvider>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<StudentContextProvider />}>
          <Route path='student-1' element={<Student1 />}></Route>
          <Route path='student-2' element={<Student2 />}></Route>
          <Route path='student-3' element={<Student3 />}></Route>
        </Route>

        
        <Route path='/teacher' element={<TeacherContextProvider />}>
          <Route path='teacher-1' element={<Teacher1 />}></Route>
          <Route path='teacher-2' element={<Teacher2 />}></Route>
          <Route path='teacher-3' element={<Teacher3 />}></Route>
        </Route>



      </Routes>
    </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
