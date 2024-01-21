import React from 'react';
import './App.css';

function BurritoRanking() {
  const burritos = [
    { name: "Maciel's Tortas & Tacos Downtown", location: "Memphis", type: "Chicken", rating: 9.5 },
    { name: "Los Altos Taqueria", location: "Mountain View", type: "Super, Chicken", rating: 9 },
    { name: "La Corneta Taqueria", location: "San Francisco", type: "Carnitas", rating: 9 },
    { name: "Taqueria Zarape", location: "Monterey", type: "Carnitas", rating: 9 },
    { name: "La Cueva", location: "Saratoga", type: "Carnitas", rating: 9 },
    { name: "Taqueria Cancun", location: "San Francisco", type: "Carnitas", rating: 9 },
    { name: "Lopez Taqueria 2", location: "San Jose", type: "Vegetarian", rating: 8.5 },
    { name: "The Black Door", location: "Sea Ranch", type: "Carnitas", rating: 8 },
    { name: "Cilantro", location: "San Francisco", type: "Carnitas", rating: 8 },
    { name: "Bandito Burrito", location: "Louisville", type: "Steak", rating: 8 },
    { name: "La Taqueria", location: "San Francisco", type: "Carnitas", rating: 8 },
    { name: "Parrilla", location: "Bend", type: "Fried Fish", rating: 8 },
    { name: "La Lupita", location: "Louisville", type: "Carnitas", rating: 8 },
    { name: "Four Queens", location: "Bryson City", type: "", rating: 8 },
    { name: "Paper Platez", location: "Mountain View", type: "Carnitas", rating: 8 },
    { name: "La Bamba", location: "Mountain View", type: "Carnitas", rating: 7.5 },
    { name: "La Salsa", location: "Mountain View", type: "Carnitas", rating: 7.5 },
    { name: "Jennifers Taqueria", location: "Mountain View", type: "V", rating: 7.5 },
    { name: "Super Burrito", location: "Bend", type: "Carnitas", rating: 7.5 },
    { name: "Padrinos", location: "St. Louis", type: "Carnitas", rating: 7.5 },
    { name: "Free Birds", location: "Santa Barbara", type: "Veggie", rating: 7.5 },
    { name: "Seoul Taco", location: "St. Louis", type: "Tofu", rating: 7 },
    { name: "El Mazatlan", location: "Louisville", type: "", rating: 7 },
    { name: "Mexico Lindo", location: "Clarksville", type: "", rating: 7 },
    { name: "Taco Temple", location: "San Luis Obispo", type: "Carnitas", rating: 7 },
    { name: "Las Muchachas", location: "Mountain View", type: "Wet Carnitas", rating: 7 },
    { name: "Mexico City 2", location: "Clarksville", type: "", rating: 7 },
    { name: "Iguanas Home Of The Burritozilla", location: "San Jose", type: "Burritozilla, Carnitas", rating: 7 },
    { name: "Taco Temple", location: "Maui", type: "V", rating: 7 },
    { name: "Taqueria Durango", location: "San Bruno", type: "", rating: 7 },
    { name: "El Maguey", location: "St. Louis", type: "Steak", rating: 7 },
    { name: "Super Cuca’s", location: "Santa Barbara", type: "California", rating: 7 },
    { name: "Pancheros", location: "Columbia", type: "Chicken", rating: 7 },
    { name: "Frontier Restaurant", location: "Albuquerque", type: "Wet Beef", rating: 7 },
    { name: "Fiesta Vallarta", location: "Los Altos", type: "Carnitas", rating: 6.5 },
    { name: "La Bamba", location: "KY", type: "Chicken", rating: 6.5 },
    { name: "Abelardo’s", location: "Nebraska", type: "V", rating: 6.5 },
    { name: "Taqueria Del Pancho", location: "MO", type: "Carnitas", rating: 6.5 },
    { name: "La Rosa", location: "Bend", type: "Steak", rating: 6.5 },
    { name: "Zombie Taco", location: "Louisville", type: "", rating: 6.5 },
    { name: "Fuzzy’s Taco Shop", location: "Columbia", type: "Chicken", rating: 6.5 },
    { name: "El Rancho", location: "St. Louis", type: "", rating: 6.5 },
    { name: "Chipotle", location: "Everywhere", type: "Carnitas", rating: 6.5 },
    { name: "Taqueria La Espuela", location: "Mountain View", type: "Carnitas", rating: 6.5 },
    { name: "Horace Burrito", location: "Madrid", type: "Carnitas", rating: 6 },
    { name: "Baja Fresh", location: "Palo Alto", type: "Carnitas", rating: 6 },
    { name: "Sunny’s Cantina", location: "St. Louis", type: "", rating: 6 },
    { name: "Lulu’s", location: "Los Altos", type: "Carnitas", rating: 6 },
    { name: "Teocalli", location: "Colorado", type: "Chicken", rating: 6 },
    { name: "Buc-ee’s", location: "Springfield", type: "", rating: 5.5 },
    { name: "Chavas Mexican", location: "Oklahoma", type: "", rating: 5.5 },
    { name: "El Torazo", location: "Louisville", type: "", rating: 5.5 },
    { name: "Unos Dos Tacos", location: "San Francisco", type: "Carnitas", rating: 5.5 },
    { name: "Taco Bell", location: "Everywhere", type: "XXL Stuffed", rating: 3.5 }
  ];
  

  const formatForUrl = (name, location) => {
    let formattedName = name.replace(/ /g, '+');
    let formattedLocation = location ? `+${location.replace(/ /g, '+')}` : '';
    return `https://www.google.com/maps/search/${formattedName}${formattedLocation}/`;
  };

  return (
    <>
      <div className="containerResume">
        <p className="subheader"> I Really Like Burritos...</p>
        <p className="subheaderFootnote">(Rating is out of 10)</p>
        <div className="subheaderContentBurrito">
          <ul>
            {burritos.map(burrito => (
              <li key={burrito.name} className="listBurritos">
                <a 
                  href={formatForUrl(burrito.name, burrito.location)}
                  target="_blank"
                  rel="noreferrer"
                  className="burritoList"
                >
                  {burrito.name}, {burrito.location}:  <strong>{burrito.rating}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BurritoRanking;