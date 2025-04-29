import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Country from './components/country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from Restcountries API
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  // Filter countries based on search query
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Country List</h1>
            <input
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ul>
              {filteredCountries.map((country) => (
                <li key={country.cca3}>
                  <Link to={`/country/${country.name.common}`}>{country.name.common} - {country.capital ? country.capital[0] : 'No Capital'}</Link>
                </li>
              ))}
            </ul>
          </div>
        } />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
