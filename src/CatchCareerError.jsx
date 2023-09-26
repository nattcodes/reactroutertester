import React from 'react'

import { Link, useRouteError } from 'react-router-dom'

const CatchCareerError = () => {
    const error = useRouteError()
  return (
    <div className="careers-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to='/'>Back to the Homepage</Link>
    </div>
  )
}

export default CatchCareerError