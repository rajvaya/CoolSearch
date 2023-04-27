import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import SearchBox from "../components/SearchBox";
import TableView from "../components/Table";
import { Country } from '../types';


const Hero = () => {

  const [countries, setCountries] = useState<Country[]>([]);  

  function getData() {
    axios.get('https://restcountries.com/v3.1/all?fields=name,currencies,capital,languages,independent,flag,tld,unMember,status,region,subregion,maps,population,timezones,flags,area,coatOfArms,landlocked')
      .then(response => {
        setCountries(response.data);
        console.log(countries)
      })
      .catch(error => {
        console.log(error);
      });
  }

useEffect(() => {
  getData();
})

  return (
    <div className="hero min-h-screen w-screen">
      <div className="hero-content text-center text-neutral-content m-8">
        <div className="flex flex-col">
        <SearchBox />
           { countries.length != 0 ?  (<TableView countries={countries} />) : (<div>Loading...</div>)}
        </div>
      </div>
    </div>
  );
};

export default Hero;
