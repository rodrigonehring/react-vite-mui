import React from 'react'
import { Box } from '@mui/material'

export default function Header({ user, page }) {
  return (
    <Box component="header" p={2} display="flex" alignItems="center" justifyContent="space-between">
      <Box typography="button" mb={2}>
        Page: {page}
      </Box>
      <Box typography="h5">hello {user ? user.name : 'Guest'}</Box>
    </Box>
  )
}
