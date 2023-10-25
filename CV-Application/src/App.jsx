import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import FormOptions from './components/FormOptions'
function App() {
  const [basicInfo, setBasicInfo] = useState({
      name: "",
      address:"",
      email: "",
      phoneNumber: "",
  })
  const [education, setEducation] = useState({
      schoolName: "",
      titleOfStudy:"",
      start: "",
      finish: "",
      location:"",
  })
  const [workExperience, setWorkExperience] = useState({
      companyName: "",
      positionTitle: "",
      start: "",
      finish: "",
      location:"",
      description: "",
  })
  return (
    <>
      <Form setBasicInfo={setBasicInfo} setEducation={setEducation} setWorkExperience = {setWorkExperience} />
      <button onClick={() => {
        console.log(basicInfo);
      }}>click</button>
    </>
  )
}

export default App
