import { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";
import Footer from './Footer';

function App() {
  const alphabetList = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));

  let [firstLetter, setFirstLetter] = useState("A");
  let [lastLetter, setLastLetter] = useState("A");

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="App text-8xl font-extrabold text-center text-white select-none">
          <FadeIn delay={100}>
            <div>
              What are some words
            </div>

            <div>
              that start with
              <select className="ml-8 mt-6 bg-slate-900" onChange={e => setFirstLetter(e.target.value)}>
                { alphabetList.map(a => <option value={a} key={a}>{a}</option>) }
              </select>
            </div>

            <div>
              and end with
              <select className="ml-8 mt-4 bg-slate-900" onChange={e => setLastLetter(e.target.value)}>
                { alphabetList.map(a => <option value={a} key={a}>{a}</option>) }
              </select>
              <Link to={`/first=${firstLetter}&last=${lastLetter}`}>
                <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-8 rounded-lg mt-8 ml-8">?</button>
              </Link>
            </div>

            <Footer />
          </FadeIn>

        </div>
      </div>
    </div>
  );
}

export default App;
