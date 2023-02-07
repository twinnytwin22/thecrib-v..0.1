'use client'
import React from 'react'

const StatusLabel = ( value: any, type: any ) => {
    console.log(value)
  switch (value) {
    case 'completed':
      return <span style={{ color: 'green' }}>{value}</span>
    case 'inProgress':
      return <span style={{ color: 'blue' }}>{value}</span>
    case 'inQueue':
      return <span style={{ color: 'red' }}>{value}</span>
    default:
      return null
  }
}

export default StatusLabel
