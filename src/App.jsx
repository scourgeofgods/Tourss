import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getTours = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(false);
      setTours(data);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getTours();
  }, []);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (tours.length <= 0) {
    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-6 bg-secondary p-5">
            <h1>There is No Guide</h1>
            <button className="btn btn-primary" onClick={() => getTours()}>
              Bring Back
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1>Tours Guide</h1>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-2  g-2 justify-content-center m-2">
          <Tours tours={tours} removeTours={removeTours} />
        </div>
      </div>
    </div>
  );
}

export default App;
