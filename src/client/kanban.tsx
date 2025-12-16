import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Kanban() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/') // go back to main incident list
  }

  return (
    <div className="kanban-page">
      <header className="kanban-header">
        <h1>Incident Kanban</h1>
        <button onClick={handleBack}>
          Back to List
        </button>
      </header>
    </div>
  )
}