import React,{useState} from 'react'
import Products from './Products';

const App = () => {
  console.log('testing App')
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  console.log(data);
  const YOUR_APP_ID = "0795af5f";
  const YOUR_APP_KEY ="1c3b931e0e59ac89bca4cfb374b87570";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/> <br/>
          
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}

export default App;