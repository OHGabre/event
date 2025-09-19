import React, { useState } from 'react'
import './App.css'

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: '2025-10-15',
      location: 'San Francisco, CA',
      description: 'Annual technology conference featuring the latest innovations'
    },
    {
      id: 2,
      title: 'Music Festival',
      date: '2025-08-20',
      location: 'Austin, TX',
      description: 'Three-day music festival with multiple artists and stages'
    }
  ])

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newEvent.title && newEvent.date && newEvent.location) {
      setEvents([...events, {
        id: Date.now(),
        ...newEvent
      }])
      setNewEvent({ title: '', date: '', location: '', description: '' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Event.app</h1>
        <p>Manage your events effortlessly</p>
      </header>

      <main>
        <section className="add-event">
          <h2>Create New Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newEvent.location}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="description"
                placeholder="Event Description"
                value={newEvent.description}
                onChange={handleInputChange}
                rows="3"
              />
            </div>
            <button type="submit">Add Event</button>
          </form>
        </section>

        <section className="events-list">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <h3>{event.title}</h3>
                <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App