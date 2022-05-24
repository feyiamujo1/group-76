import React,{useState,useEffect} from 'react'
import "./client.css"
import axios from 'axios'

function Clients() {
  const [clients, setClient] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/companies?_quantity=1'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          setStatusNote("")
          setClient(response.data.data)
        } else {
          setStatusNote("Error while loading data, please Kindly refresh the page!")
        }
      })
  }, [])

  return (
    <div className='clients'>
      <h3>Clients</h3>
      <p className='error'>
        {statusNote}
      </p>
      <div className='clients_container'>
        <table className='clients_table'>
          <tr className='clients_table_tr table_heading'>
            <th className='clients_th'>Id</th>
            <th className='clients_th'>Client</th>
            <th className='clients_th email_heading'>Email</th>
            <th className='clients_th phone_heading'>Phone</th>
            <th className='clients_th gender_heading'>Gender</th>
            {/* <th className='clients_th'>Images</th> */}
          </tr>
          {
            clients ? clients.map((client, id ) => (
              <tr className='client_table_tr'>
              <td>{id + 1}</td>
              <td className='clients_card_image'>
                  <img src={client["contact"].image} alt="client"/>
                  <span>{client["contact"].firstname} {client["contact"].lastname}</span>
                </td>
                <td className='email_body'>{client["contact"].email}</td>
                <td className='phone_body'>{client["contact"].phone}</td>
                <td className='gender_body'>{client["contact"].gender}</td> 
            </tr>
            ) )
            : null
          }
        </table>
      </div>

    </div>
  )
}

export default Clients