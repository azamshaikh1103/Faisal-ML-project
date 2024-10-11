import axios from "axios";
import { useState } from "react";

export default function Form() {
  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [cp, setCp] = useState();
  const [trestbps, setTrestbps] = useState();
  const [chol, setChol] = useState();
  const [fbs, setFbs] = useState();
  const [restecg, setRestecg] = useState();
  const [thalach, setThalach] = useState();
  const [exang, setExang] = useState();
  const [oldpeak, setOldpeak] = useState();
  const [slope, setSlope] = useState();
  const [ca, setCa] = useState();
  const [thal, setThal] = useState();

  const [result, setResult] = useState([]);

  return (
    <>
      <div className=" flex flex-col gap-5">
        <div className=" text-black text-2xl font-semibold">This is form</div>

        <input
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sex"
          onChange={(e) => setSex(e.target.value)}
        />
        <input
          type="text"
          placeholder="CP"
          onChange={(e) => setCp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Threstbps"
          onChange={(e) => setTrestbps(e.target.value)}
        />
        <input
          type="text"
          placeholder="chol"
          onChange={(e) => setChol(e.target.value)}
        />
        <input
          type="text"
          placeholder="fbs"
          onChange={(e) => setFbs(e.target.value)}
        />
        <input
          type="text"
          placeholder="restecg"
          onChange={(e) => setRestecg(e.target.value)}
        />
        <input
          type="text"
          placeholder="thalach"
          onChange={(e) => setThalach(e.target.value)}
        />
        <input
          type="text"
          placeholder="exang"
          onChange={(e) => setExang(e.target.value)}
        />
        <input
          type="text"
          placeholder="oldpeak"
          onChange={(e) => setOldpeak(e.target.value)}
        />
        <input
          type="text"
          placeholder="slope"
          onChange={(e) => setSlope(e.target.value)}
        />
        <input
          type="text"
          placeholder="ca"
          onChange={(e) => setCa(e.target.value)}
        />
        <input
          type="text"
          placeholder="thal"
          onChange={(e) => setThal(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          // axios.post("http://localhost:8000/predict", {
          //   age: age,
          //   sex: sex,
          //   cp: cp,
          //   trestbps: trestbps,
          //   chol: chol,
          //   fbs: fbs,
          //   restecg: restecg,
          //   thalach: thalach,
          //   exang: exang,
          //   oldpeak: oldpeak,
          //   slope: slope,
          //   ca: ca,
          //   thal: thal,
          // });

          const result = {
            age: age,
            sex: sex,
            cp: cp,
            trestbps: trestbps,
            chol: chol,
            fbs: fbs,
            restecg: restecg,
            thalach: thalach,
            exang: exang,
            oldpeak: oldpeak,
            slope: slope,
            ca: ca,
            thal: thal,
          };

          console.log(result);

            setResult(result);
        }}
      >
        Submit
      </button>
      <div className=" text-3xl font-semibold mt-20">Result</div>
      <div className=" mt-10">Result : {result}</div>
    </>
  );
}
