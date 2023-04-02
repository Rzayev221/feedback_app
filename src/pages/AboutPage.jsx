import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
    <div className='card'>
    <h1> About the project</h1>
    <p>This is a react app</p>
    <p>Version: 1.1.1.1</p>
    <p>
        <Link to = '/'>Back to homepage</Link>
        </p>
  </div>
  </Card>
  )
}

export default AboutPage