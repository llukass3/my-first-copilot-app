import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Country = () => {
    const { countryName } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        setIsLoading(true); // Set loading to true when fetching starts
        setError(null); // Reset error state

        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setCountryInfo(response.data[0]);
                } else {
                    setError('Country not found');
                }
            })
            .catch(() => {
                setError('Country not found');
            })
            .finally(() => {
                setIsLoading(false); // Set loading to false when fetching is complete
            });
    }, [countryName]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{countryInfo.name.common}</h1>
            <p><strong>Capital:</strong> {countryInfo.capital ? countryInfo.capital[0] : 'No Capital'}</p>
            <p><strong>Population:</strong> {countryInfo.population}</p>
            <p><strong>Region:</strong> {countryInfo.region}</p>
            <p><strong>Languages:</strong> {countryInfo.languages ? Object.values(countryInfo.languages).join(', ') : 'No Languages'}</p>
        </div>
    );
};

export default Country;