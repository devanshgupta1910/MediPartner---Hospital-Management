import React from 'react'
const Language = ({lname,duration,fees,trainer,iname}) => {
  return (
    <>
      <div className='col-sm-3'>
        <div className='card' style={{'width':'350px'}}>
          <div className='card-body'>
          <img src={iname} className="card-img-fluid" alt='noimage' height="250px" width="300px" />
          <h1 className='card-title'> {lname} </h1>
          <h2 className='card-subtitle'>Duration : {duration} </h2>
          <h2 className='card-subtitle'>Fees : {fees}</h2>
        <h2 className='card-subtitle'>Trainer : {trainer}</h2>
        </div>
        </div>
      </div>
    </>
  )
}
export default Language