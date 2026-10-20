import React from 'react'
import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-white'

const Button = ({ to, children, className = '' }) => {
  if (to) {
    return (
      <Link to={to} className={`${base} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={`${base} ${className}`}>
      {children}
    </button>
  )
}

export default Button
