import Form from "./components/Form.jsx";
import Cv from "./components/Cv.jsx";
import "./styles/App.css";
// import { useReducer, useState } from "react";
import { useReducer } from "react";

function App() {
  const defaultData = {
    name: "Gonzalo",
    lastName: "Gomez",
    email: "example@example.com",
    phone: 1115151515,
    city: "Buenos Aires",
    state: "BA",
    portfolio: "www.google.com",
    company: "CERN",
    role: "Researcher",
    startedWorking: new Date(2020, 1, 3),
    stoppedWorking: new Date(2020, 12, 4),
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
    universityName: "Universidad de Buenos Aires",
    degree: "Fisíco de particulas",
    graduationYear: new Date(2018, 10, 5),
    educationSummary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati optio repellendus",
    certs: "Cambridge English Test C2",
    skills:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, nisi suscipit animi a repudiandae sequi ",
    interests:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, nisi suscipit animi a repudiandae",
  };

  // const [counter, setCounter] = useState(0);
  const [data, dispatch] = useReducer(reducer, defaultData);

  function reducer(state, action) {
    console.log({ state }, { action });
    switch (action.type) {
      case "CHANGE": {
        return { ...state, [action.name]: action.value };
      }
      case "RESET":
        return { [action.name]: action.value };
      default:
        throw new Error("fail");
    }
  }

  function handleChange(e) {
    const targetValue = e.target.value;
    const data = { type: "CHANGE", name: e.target.name, value: targetValue };
    console.log(data);
    dispatch(data);
  }

  return (
    <div className="app-wrapper">
      <aside className="aside">
        <Form handleEvent={handleChange} />
      </aside>
      <main className="main">
        <Cv data={data} />
      </main>
    </div>
  );
}

export default App;
