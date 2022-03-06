import { useState } from "react";
import "./med.scss";
import Card from './view/components/card/Card'

const medications: Array<Meds> = [
  {
    name: "RashAid",
    id: 1,
    price: 90,
    img: "https://beleafpharma.co.il/wp-content/uploads/2020/02/Artboard-13-300x300.jpg",
  },
  {
    name: "skinburn",
    id: 2,
    price: 45,
    img: "https://beleafpharma.co.il/wp-content/uploads/2021/05/WhatsApp-Image-2021-04-21-at-18.08.53-300x300.jpeg",
  },
  {
    name: "laserrash",
    id: 3,
    price: 79,
    img: "https://beleafpharma.co.il/wp-content/uploads/2020/08/000-1-300x300.jpg",
  },
];

interface Meds {
  name: string;
  price: number;
  img: string;
  id: number;
}

function App() {
  const [genralCounter, setGeneralCounter] = useState(0);
  const [info, setInfo] = useState({ text: "", phone: "" });

  function handleTextInput(ev: any) {
    console.log(ev.target.value);
    setInfo({ ...info, text: ev.target.value });
  }

  function handlePhoneInput(ev: any) {
    setInfo({ ...info, phone: ev.target.value });
  }

  function handleSubmit(ev: any) {
    ev.preventDefault();
    console.dir(ev);
    const form = ev.target;
    const obj: any = {};
    for (let i = 0; i < form.length; i++) {
      console.log(form[i].value, form[i].name, form[i].type);
      if (form[i].type !== "submit") {
        obj[form[i].name] = form[i].value;
      }
    }
    console.log(obj);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number of counts:{genralCounter}</h1>
        <h2>Enter info</h2>
        <input type="text" name="" id="" onBlur={handleTextInput} />
        <input
          type="text"
          placeholder="phone number"
          onBlur={handlePhoneInput}
        />
        <p>{info.text}</p>
        <p>{info.phone}</p>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <input type="text" name="phone" placeholder="phone number" />
          <input type="email" name="email" placeholder="email"/>
          <button type="submit"></button>
        </form>
        <h2>Medications</h2>
        {medication.map((medication, index) => {
          const { name, price, img, id } = medication; //deconstractor

          return (
            <Card
              key={index}
              info={{ name, Price, img, id }}
              setGeneralCounter={setGeneralCounter}
              genralCounter={genralCounter}
            />
          );
        })}
      </header>
    </div>
  );
}

export default Med;
