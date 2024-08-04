import React from 'react'
import {useEffect, useState} from 'react'

function MenuData({type}) {

    const [menuItem, setMenu] = useState([]);
 
    //const endpoint = '/complexSearch'
    const url = new URL(process.env.REACT_APP_API_URL);
    const params = {
      apiKey: process.env.REACT_APP_API_KEY,
      type: type,
      number: 9,
    };
    Object.keys(params).forEach(key=> url.searchParams.append(key, params[key]));
  
    useEffect(() => {
      fetchData(url);
  }, [type])

 async function fetchData (url) {
    const res = await fetch(url);
    const data = await res.json();
    setMenu(data.results);
 }

    return (
    <table className='menu-container'>
      {menuItem.map((item) => {
        return(
          <div className='menu-card'>
            <img src={item.image} alt={item.title}/>
            <div className='menu-item-header'>
            <h3>{item.title}</h3>
            <p>${Number(Math.random() * (25-6)+6).toFixed(2)}</p>
            </div>
        </div>
        );
    })}
    </table>
  );
}

export default MenuData;