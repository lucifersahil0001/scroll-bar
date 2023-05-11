import   React from 'react';


export default function Carousol() {

  const users = [
    {
      "id": 1,
      "url": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Pritesh Kumar , IIT Delhi",
      "company": "CTO @ FunctionUp",
      "experience": "9 Yrs Exp.",
    },
    {
      "id": 2,
      "url": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Anubhav Singh , IIT Kanpur",
      "company": "Co-founder @ Dubdub.ai",
      "experience": "7 Yrs Exp.",
    },
    {
      "id": 3,
      "url": "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Aviral Sharma , IIT Delhi",
      "company": "Data Scientist Manager @ Optum",
      "experience": "7 Yrs Exp.",
    },
    {
      "id": 4,
      "url": "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Rahul Garg , IIT Kanpur",
      "company": "Co-founder @ Dubdub.ai",
      "experience": "7 Yrs Exp.",
    },
    {
      "id": 5,
      "url": "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Uddhav Bamba , IIT Dhanbad",
      "company": "Applied Scientist @ Amazon",
      "experience": "3 Yrs Exp.",
    },
    {
      "id": 6,
      "url": "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=6000",
      "name": "Anchal Jaiswal,IIT Kanpur",
      "company": "Senior Data Scientist @ Tredence",
      "experience": "7 year Exp",
    },
    {
      "id": 7,
      "url": "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      "name": "Rahul Sankhwar,IIT Kanpur",
      "company": "Senior Data Scientist @ Sharechat",
      "experience": "6 year Exp",
    },
   
    
  ]
  return (
    <div className="Carousol">
      <div className="wrapper">
   {
     users.map((props) => {
       return (
       <div className="cards" key={props.id}>
        <img src={props.url} alt="person" height="120px"  className="imageset" width="120px" /> 
        <h1 className="heading">{props.name}</h1>
        <h1 className="heading-2">{props.company}</h1>
        <h1 className="heading-3">{props.experience}</h1>
         </div>
       )
     })
   }
   </div>
    </div>
  );
}