import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Careers = () => {
    const careers = useLoaderData();
  return (
    <div className="careers">
        {careers.map((career) => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))}
    </div>

  )
}
export const careerLoader = () => {
    const url = "http://localhost:4000/careers";
    const result = 
    fetch(url)
    .then((res) =>{ 
        if(!res.ok){
           throw Error(' Could Not Fetch Careers')
        }else{
            return res.json();
        }
    })
    .then((data) => data)

    return result;
}

export default Careers