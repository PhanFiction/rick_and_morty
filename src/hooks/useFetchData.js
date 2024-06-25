/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
const api = import.meta.env.VITE_API;

export function useFetchMultipleCharacters(data) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/character/${[...data]}`);
        const jsonData = await response.json();
        if (Array.isArray(jsonData)) {
          setCharacters(jsonData);
        } else {
          // by default, returns obj of { results, info }
          setCharacters(jsonData.results);
        }
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [data]);

  return characters;
}

export function useFetchSingleCharacter(data) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/character/${data}`);
        const jsonData = await response.json();
        setCharacter(jsonData);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [data]);

  return character;
}

export function useSearchLocation(data) {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    // take user input
    // query user input to search location
    // select user input when clicked
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
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

export function useFetchData(page) {
  const [data, setData] = useState([]);

  // Search location to display characters
  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/character?page=${page}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, [page]);

  return data;
}