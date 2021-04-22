import React, { Component ,useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';







function ExerciseList(){
    
    const [arrayExercises, setExercises] = useState([])

    const getExercises = async() => {
      await axios.get('http://localhost:5000/exercises/')
            .then(response => {
                setExercises(response.data)
                console.log(response);
            })
            .catch((err)=>console.log(err))
    
            console.log(arrayExercises);
    }


    useEffect(() => {
        getExercises()
    },[])
    

    return(
        <div className="mt-5">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Created</th>
                        <th>"</th>
                        <th>"</th>
                    </tr>
                </thead>
                <tbody>
            {
                
                arrayExercises.map((element,i)=>(
                    <tr>
                        <td>{i}</td>
                        <td>{element.username}</td>
                        <td>{element.description}</td>
                        <td>{element.duration}</td>
                        <td>{element.date.split("",10)}</td>
                        <td><Link to={"/edit/"+element._id}><button type="button" class="btn btn-primary">Edit</button></Link></td>
                        <td><Link onClick={()=>{axios.delete('http://localhost:5000/exercises/'+element._id)}}><button type="button" class="btn btn-danger">Delete</button></Link></td>
                    </tr>
                
                ))
            
            }
            </tbody>
            </table>
        </div>
        
    )

}
export default ExerciseList