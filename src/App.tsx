import './App.css';

import {
  Avatar,
  Box,
  Card,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';

import AchievementList from './components/AchievementList';

const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Stack direction="row" spacing={2}>
          <Box sx={{ paddingTop: '10px' }}>
            <Avatar
              src="./carrot_anonymous.jpg"
              sx={{ width: '200px', height: '200px' }}
            />
            <Stack direction="column" spacing={'1px'}>
              <Typography variant="h5" fontWeight={500}>
                임혜진
              </Typography>
              <Typography>#지구환경과학부</Typography>
              <Typography>#IN?F?P?</Typography>
              <Typography>#대학원_탈주</Typography>
              <Typography></Typography>
            </Stack>
          </Box>
          <Card sx={{ width: 400 }}>
            <Typography
              sx={{ padding: '10px' }}
              variant="h5"
              component="div"
              fontWeight={900}
            >
              인생 업적
            </Typography>
            <AchievementList />
          </Card>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
