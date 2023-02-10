import { Box, Paper } from '@mui/material'

const LoginPage = () => {
  return (
    <Box display={'flex'} height={'100vh'} bgcolor={'#f7fafb'}>
      <Box flex={2}></Box>

      <Box flex={1}>
        <Paper
          elevation={2}
          sx={{
            width: '378px',
            margin: 'auto',
            borderRadius: '10px',
            position: 'absolute',
            top: '50%',
            right: '25%',
            transform: 'translate(50%,-50%)',
            height: '590px',
            padding: '20px',
            boxShadow: '1px 3px 30px 2px #e6edf4',
          }}></Paper>
      </Box>
    </Box>
  )
}

export default LoginPage
