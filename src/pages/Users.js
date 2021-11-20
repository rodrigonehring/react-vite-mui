import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

export default function HomePage() {
  return (
    <Box>
      <Header page="Users" user={{ name: 'friend' }} />

      <Button component={Link} to="/">
        home
      </Button>
    </Box>
  )
}
