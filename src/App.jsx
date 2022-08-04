import React from 'react';
// import axios from "axios";

function App() {
  // const [isLogged, setIsLogged] = useState(false);
  // // if the api return data, save it to a state.
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.post(import.meta.env.VITE_API_URL, {
  //         email: "prueba1@gmail.com",
  //         password: "prueba123",
  //       });
  //       res.data.token ? setIsLogged(true) : setIsLogged(false);
  //     } catch (error) {
  //       setIsLogged(false);
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // return (
  //   <div>
  //     <h1>Hello World!!!</h1>
  //     {
  //       isLogged ? <p className="font-bold">Bienvenido Usuario: Pepito</p> : null
  //     }
  //   </div>
  // );

  return <h1>Hello world!</h1>;
}

export default App;
