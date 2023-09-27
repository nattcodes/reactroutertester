
import { Link, useLoaderData } from 'react-router-dom'


const Careers = () => {
    const careers = useLoaderData();
  return (
    <div className="careers">
        {careers.map((career, index ) => (
            <Link to={String(index)} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))}
    </div>

  )
}
export const careerLoader = () => {

    // Check if the data is in Local Storage
  const storedData = localStorage.getItem("careerData");
  if (storedData) {
    const data = JSON.parse(storedData);
    return data.careers;
  }

    const result = 
    fetch('apiurl.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then((res) =>{ 
        if(!res.ok){
           throw Error(' Could Not Fetch Careers')
        }else{
            return res.json();
        }
    })
    .then((data) => {
        localStorage.setItem('careerData', JSON.stringify(data));  
      });
    
    return result;
}

export default Careers