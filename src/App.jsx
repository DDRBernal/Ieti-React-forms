import "./App.css";
import { registerUser } from "./services/registerUser";
import { useState } from "react";

export function App() {
  /* const onSubmit = (data) => {
    registerUser(data);
  }; */

/*   const [email, name, age, password, passwordCheck, terms] = useState(["", ""]), setEmail = email[1],
   setName = name[1], setAge = age[1],
   setPassword=password[1], setPasswordCheck=passwordCheck[1],
   setTerms=terms[1]; */

   
  /*  const {email, setEmail, name, setName,
          age, setAge, password, setPassword,
          passwordCheck, setPasswordCheck,
          terms, setTerms,
          isCorrect, setIsCorrect,
          error, setError} = useState({email: "", name: "", age: "", password:"",passwordCheck:"",
                                              terms:"", isCorrect:false, error:false})[0]; */

  const [email, setEmail] = useState(""), [name, setName] = useState(""),[age,setAge]= useState(""),
  [password,setPassword]= useState(""), [passwordCheck,setPasswordCheck]= useState(""),[terms,setTerms]= useState(""),
  [errorEmail,setErrorEmail]= useState(""), [errorName,setErrorName]= useState(""),
  [errorPass,setErrorPass]= useState(""),[errorPCheck,setErrorPCheck]= useState(""),
  [errorTerms,setErrorTerms]= useState(""),[errorAge,setErrorAge]= useState("");
  let isCorrect = false;
   

  
  

 
  const handleInputE = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setErrorEmail("email is required");
    } else if (!/\S+@\S+\.\S+/.test(value)) {

      setErrorEmail("email is invalid");
    } else setErrorEmail("");
  };


  const handleSubmitForm = (event) => {
    event.preventDefault();
    const value = event.target.value;
    registerUser(value);
  };


  const handleNameInput = (event) => {
    const value = event.target.value;
    setName(value);
    if (!value) {
      setErrorName("name is required");
    } else setErrorName("");
  };

  
  const handlePassCheck = (event) => {
    const value = event.target.value;
    setPasswordCheck(value);
    if (value !== password) {
      setErrorPCheck("passwords do not match");
    } else setErrorPCheck("");
  };

  const handleAgeinput = (event) => {
    const value = event.target.value;
    setAge(value);
    if (value < 18) {
      setErrorAge("you must be above 18 to register");
    } else setErrorAge("");
  };

  const handlePass = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (!value) {
      setErrorPass("password is required");
    } else if (value.length < 6) {
      setErrorPass("password is too short");
    } else setErrorPass("");
  };


  

  if (
    email !== '' &&
    name !== '' &&
    age !== '' &&
    password !== '' &&
    passwordCheck !== '' &&
    terms
  ) {
    isCorrect = true;
  }

  const handleTerms = (event) => {
    const value = event.target.checked;
    setTerms(value);
    if (!value) {
      setErrorTerms("please read and accept the terms and conditions");
    } else setErrorTerms("");
    
  };


  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>
            Email
            <input type="email" placeholder="Email" value={email} onChange={handleInputE} />


            {errorEmail && <span className="error" role="alert">{errorEmail}</span>}
          </label>
        </div>
        <div>
          <label>
            Name
            <input type="text" placeholder="Name" value={name} onChange={handleNameInput}  />
            {errorName && <span className="error" role="alert">{errorName}</span>}
          </label>
        </div>
        <div>
          <label>
            Age
            <input type="number" placeholder="Age" value={age} onChange={handleAgeinput} />
            {errorAge && <span className="error" role="alert">{errorAge}</span>}
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" placeholder="Password" value={password} onChange={handlePass}/>
            {errorPass && <span className="error" role="alert">{errorPass}</span>}
          </label>
        </div>
        <div>
          <label>
            Password check
            <input type="password" placeholder="Password check" value={passwordCheck} onChange={handlePassCheck}/>
            {errorPCheck && <span className="error" role="alert">{errorPCheck}</span>}
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value={terms} onChange={handleTerms} />
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
            {errorTerms && <span className="error" role="alert">{errorTerms}</span>}
          </label>
        </div>
        <button disabled={!isCorrect}>Sign up</button>
      </form>
    </div>
  );
}
