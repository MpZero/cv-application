import Form from "./components/Form.jsx";
import Cv from "./components/Cv.jsx";
import "./styles/App.css";
import { useReducer } from "react";

function App() {
  const defaultData = {
    name: "Gonzalo",
    lastName: "Gomez",
    email: "example@example.com",
    phone: "1115151515",
    personalLocation: "city, ST",
    portfolio: "https://github.com/MpZero",
    company: "CERN",
    role: "Researcher",
    location: "Location, LO",
    startedWorking: "YY-MM-DD",
    stoppedWorking: "YY-MM-DD",
    workSummary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quidem saepe tempora, excepturi voluptas est quaerat quod ",
    company2: "",
    role2: "",
    startedWorking2: "",
    workSummary2: "",
    company3: "",
    role3: "",
    startedWorking3: "",
    workSummary3: "",
    educationName: "Universidad de Buenos Aires",
    degree: "degree",
    educationLocation: "Location, LO",
    graduationDate: "01-12-16",
    educationSummary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati optio repellendus",
    certs: "Cambridge English Test C2",
    skills:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, nisi suscipit animi a repudiandae sequi ",
    interests:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, nisi suscipit animi a repudiandae",
  };

  const [data, dispatch] = useReducer(reducer, defaultData);

  function reducer(state, action) {
    // console.log({ state }, { action });
    return { ...state, [action.name]: action.value };
  }

  function handleChange(e) {
    const targetValue = e.target.value;
    const data = { type: "CHANGE", name: e.target.name, value: targetValue };
    dispatch(data);
  }

  return (
    <div className="app-wrapper">
      <aside className="aside">
        <Form data={data} handleEvent={handleChange} />
      </aside>
      <main className="main">
        <Cv data={data} />
      </main>
    </div>
  );
}

export default App;
