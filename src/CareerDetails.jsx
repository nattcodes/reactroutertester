import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
    const career = useLoaderData();
  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint perferendis assumenda est ad officiis. Fugit voluptates blanditiis aspernatur dignissimos aperiam saepe quibusdam ipsum voluptatibus expedita iusto ea asperiores hic, qui temporibus laborum eveniet eaque eum eligendi maxime dolorem! Pariatur voluptas beatae quas, provident praesentium cumque voluptatem inventore ullam numquam.</p>
        </div>
    </div>
  )
}
export const careerDetailsParameter = ({params}) => {
  const {id} = params;

  const url = 'apiurl.json';
  const result = fetch(url , {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
  .then((res) =>{ 
      if(!res.ok){
          throw Error(' Could Not Find The Career')
      }else{
          return res.json();
      }
  })
  .then((data) => data.careers[id])

  return result;
}


export default CareerDetails