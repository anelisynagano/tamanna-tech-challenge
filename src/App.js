import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import City from "./components/City";

function App() {
  const [cities, setCities] = useState([]);
  const [cityQuery, setCityQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [fromLocalSt, setFromLocalS] = useState(false);

  const getFromLocalStorage = () => {
    const lclStorage = localStorage.getItem("cities");
    if (lclStorage !== null) {
      setCities(JSON.parse(lclStorage));
    } else {
      setCities([]);
    }
  };

  useEffect(getFromLocalStorage, []);

  const handleSubmitQuery = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityQuery}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        if (cities !== null) {
          setCities([res.data, ...cities]);
        } else {
          setCities([res.data]);
        }
        setError(false);
        setIndex(0);
        setFromLocalS(!fromLocalSt);
      })
      .catch((err) => setError(true));
    setCityQuery("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSubmitQuery();
  };

  useEffect(() => {
    if (fromLocalSt) {
      localStorage.setItem("cities", JSON.stringify(cities));
    } else {
      const lclStorage = localStorage.getItem("cities");
      setCities(JSON.parse(lclStorage));
    }
  }, [fromLocalSt]);

  const handleDelete = (id) => {
    const filteredCities = cities.filter((city) => city.city.id !== id);
    setCities(filteredCities);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleInput = (e) => {
    setCityQuery(e.target.value);
  };

  return (
    <div className='App'>
      <form onSubmit={onFormSubmit}>
        <input type='text' value={cityQuery} onChange={handleInput} />
        <input type='submit' value='🔍' />
      </form>
      <p>{error ? "City not found :( Please try again" : ""}</p>
      {cities === null ? (
        <p>Please search for a city!</p>
      ) : (
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          variant='dark'
          keyboard
        >
          {cities.length > 0 &&
            cities.map((city, index) => (
              <Carousel.Item key={city.city.id}>
                <City
                  handleDelete={handleDelete}
                  id={city.city.id}
                  cityInfo={city}
                  index={index}
                />
              </Carousel.Item>
            ))}
        </Carousel>
      )}
    </div>
  );
}

export default App;
