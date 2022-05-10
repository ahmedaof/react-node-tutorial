import React from 'react'
import { useSelector } from 'react-redux'
 const Alert = () => {
     const alerts = useSelector(state =>state.alert);
  return (
    alerts.msg && alerts.msg.length > 0 && alerts.msg !==null &&
      alerts.msg.map(alert=>(
          <div
          className='container'>
          <p className={`alert alert-${alerts.alertType}`} >{alert.msg}</p>
          </div>
      ))
  )
}

//  const mapStateToProps = state => ({

//         alerts: state.alert
    
// })
export default Alert ;