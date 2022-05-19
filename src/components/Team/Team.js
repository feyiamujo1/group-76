import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./team.css"

function Team() {
  const [teams, setTeams] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'http://fakerapi.it/api/v1/products?_quantity=10'

<<<<<<< HEAD
  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setStatusNote("")
          setTeams(response.data.data)
        } else {
          setStatusNote("Error while loading data, please Kindly refresh the page!")
        }
      })

  }, [])
  console.log(teams)

  return (
    <div className='teams'>
        <h2>Team Members</h2>
        <p className='error'>
          {statusNote}
        </p>
        <div className='team_container'>
         <table className='team_table'>
            <thead>
              <td>Id</td>
              <td>Full name</td>
              <td>Email</td>
              <td>Phone number</td>
              <td>Gender</td>
              <td>Images</td>
            </thead>
            {
              teams ? teams.map((teams, id) =>
                
                  <tr className='team_table'>
                    
                    <td>{teams.id}</td>
                    <td>{teams.fristname + " " + teams.lastname}</td>
                    <td>{teams.gmail}</td>
                    <td>{teams.phone}</td>
                    <td>{teams.gender}</td>
                    <td>{teams.image}</td>
                  </tr>
                
              )
                : null
            }
          </table>
        </div>
=======
  return (
    <div>
      <h2>
        Team Members
      </h2>
>>>>>>> 8fe9680a423bde1144a0e5a737555774edbfd4ec
    </div>
  )
}
export default Team 