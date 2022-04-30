import React from 'react'
import { connect } from 'react-redux'
 const Alert = ({alerts}) => {
  return (
      alerts.length > 0 && alerts !==null &&
      alerts.map(alert=>(
          <div key={alert.id}
          className='container'>
          <p className={`alert alert-${alert.alertType}`} >{alert.msg}</p>
          </div>
      ))
  )
}

 const mapStateToProps = state => ({

        alerts: state.alert
    
})
export default connect(mapStateToProps)(Alert)