import React, { useEffect, useState } from 'react';
import SpinnerComponent from '../components/ui/Spinner.component';
import CoinsComponent from '../components/coins/Coins.component';
import axios from 'axios';
import { baseURL } from '../constants/api';



const HomePage = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(baseURL)
      .then((response) => {
        setLoading(false)
        setData(response.data)
      })
      .catch((error) => {
        setError("An Error occured")
      }
      )

  }, []);






  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-center">
          <h5>A place to manage all of your trade information and actions</h5>
          <span>Do not forget to always using asset and risk management!!!!</span>
        </div>

      </div>
      <div className="row pt-3">
        <div className="col-12">
          
          {loading ? <SpinnerComponent /> : error !== "" ? <h1>{error}</h1> : <CoinsComponent data={data} />  }

        </div>

      </div>


    </div>
  )
}

export default HomePage
