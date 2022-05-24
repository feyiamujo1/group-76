import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./team.css"

function Team() {
  const [teams, setTeams] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/persons?_quantity=10'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          setStatusNote("")
          setTeams(response.data.data)
        } else {
          setStatusNote("Error while loading data, please Kindly refresh the page!")
        }
      })
  }, [])

  return (
    <div className='teams'>
        <h2>Team Members</h2>
        <p className='error'>
          {statusNote}
        </p>
        <div className='team_container'>
         <table className='team_table'>
            <tr className='team_table_tr table_heading'>
              <th className='teams_th'>Id</th>
              <th className='teams_th'>Full name</th>
              <th className='teams_th teams_email_head'>Email</th>
              <th className='teams_th teams_phone_head'>Phone number</th>
              <th className='teams_th teams_gender_heading'>Gender</th>
            </tr>
            {
              teams ? teams.map((teams) =>
                  <tr className='team_table'>
                    <td>{teams.id}</td>
                    <td className='teams_card_image'><img src={teams.image} alt="team"/><span>{teams.firstname + " " + teams.lastname}</span></td>
                    <td className='teams_email'>{teams.email}</td>
                    <td className='teams_phone'>{teams.phone}</td>
                    <td className='teams_gender'>{teams.gender}</td>                      
                  </tr>
              )
                : null
            }
          </table>
        </div>
    </div>
  )
}
export default Team 