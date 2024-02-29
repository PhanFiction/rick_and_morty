/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
const api = import.meta.env.VITE_API;

export function useSearchLocation(data) {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    // take user input
    // query user input to search location
    // select user input when clicked
    // send a request to the server to display the information of the characters from the location that is clicked
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        console.log('planet ', data);
        const response = await fetch(`${api}/location/?&name=${data}`);
        const jsonData = await response.json();
        setLocations(jsonData);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [data]);

  return locations;
}

export function useFetchData(endpoint, page) {
  const [data, setData] = useState([]);

  // Search location to display characters
  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/${endpoint}?page=${page}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [endpoint, page]);

  return data;
}