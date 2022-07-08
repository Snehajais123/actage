import React from 'react'
import './style/table.css'
import { Table1data } from './data'
import HealthBookForm from './HealthBookForm';

const th=["Table Name","Date","Time","Reading","Unit","View"];
function Tabledetail(props){
  return  (
    Table1data.map((item)=>{
      return (
        <tr>
        <th scope="row"><img src={item.image} alt="logo" />{item.tableName}</th>
        <td>{item.Date}</td>
        <td>{item.Time}</td>
        <td>{item.Reading}</td>
        <td>{item.Unit}</td>
        <td><img src="images/Eye.png" alt="logo" /></td>
        </tr>
      )
    })
  )
}
function Doctor() {
  return (
    <div className='table-box'>
       <h3>Doctor</h3>
    <p>Dashboard/ <span>Doctor</span></p>
<span>Show <select id="cars" name="cars" size="1" >
  <option value="volvo">1</option>
  <option value="saab">2</option>
  <option value="fiat">3</option>
</select>entries</span>

<table className="table table-striped">
<thead>
  <tr>
    {th.map((heading)=><th scope="col">{heading}</th>)}
  </tr>
</thead>
<tbody>
  <Tabledetail data={Table1data}/>
</tbody>
</table>
<HealthBookForm />
  </div>
  )
}

export default Doctor
