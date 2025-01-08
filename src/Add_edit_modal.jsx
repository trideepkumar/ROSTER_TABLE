// src/components/EventModal.jsx
import React, { useState, useEffect } from 'react'
import { Modal, Box, Typography, Button, TextField, FormControlLabel, Radio, RadioGroup, FormControl } from '@mui/material'

const EventModal = ({ open, handleClose, event }) => {
  const [formData, setFormData] = useState({
    caregiver: '',
    title: '',
    description: '',
    allDay: false,
    startDate: '',
    endDate: '',
  })

  useEffect(() => {
    if (event) {
      setFormData({
        caregiver: event.careGiver || '',
        title: event.title || '',
        description: event.description || '',
        allDay: event.allDay || false,
        startDate: event.start || '',
        endDate: event.end || '',
      })
    } else {
      // Reset the form when no event is provided
      setFormData({
        caregiver: '',
        title: '',
        description: '',
        allDay: false,
        startDate: '',
        endDate: '',
      })
    }
  }, [event])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleRadioChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      allDay: e.target.value === 'true',
    }))
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          {event ? 'Edit Event' : 'Add Event'}
        </Typography>

        <TextField
          label="Caregiver"
          name="caregiver"
          value={formData.caregiver}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          multiline
          fullWidth
          rows={3}
          sx={{ mb: 2 }}
        />

        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <RadioGroup
            row
            name="allDay"
            value={formData.allDay.toString()}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="true" control={<Radio />} label="All Day" />
            <FormControlLabel value="false" control={<Radio />} label="Set Time" />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Start Date & Time"
          name="startDate"
          type="datetime-local"
          value={formData.startDate}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="End Date & Time"
          name="endDate"
          type="datetime-local"
          value={formData.endDate}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  )
}

export default EventModal
