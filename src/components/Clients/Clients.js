import React,{useState,useEffect} from 'react'
import "./client.css"
import axios from 'axios'

function Clients() {
  const [client, setClient] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/companies?_quantity=1'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setStatusNote("")
          setClient(response.data.data)
        } else {
          setStatusNote("Error while loading data, please Kindly refresh the page!")
        }
      })

  }, [])
  console.log(client)

  return (
    <div className='clients'>
      <h3>Clients</h3>
      <p className='error'>
        {statusNote}
      </p>
      <div className='clients_container'>
        <table className='clients_table'>
          <tr className='clients_table'>
            <th>Id</th>
            <th className='clients_th'>Full name</th>
            <th className='clients_th'>Email</th>
            <th className='clients_th'>Phone number</th>
            <th className='clients_th'>Gender</th>
            <th className='clients_th'>Images</th>
          </tr>
          {
            client ? client.map((client, id) =>
              <tr className='client_table_tr'>
                
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.gender}</td>
                  <td className='clients_card_image'>
                    <img src={client.image} alt="client"/></td>
                  
              </tr>
            )
              : null
          }
        </table>
      </div>

    </div>
  )
}

export default Clients