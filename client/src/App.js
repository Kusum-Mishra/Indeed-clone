// App.js

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllPosts from './pages/AllPosts';
import CreatePost from './pages/CreatePost';
import { routePath } from './routes/route';

// Optional: customize the MUI theme here
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.posts} element={<AllPosts />} />
          <Route path={routePath.create} element={<CreatePost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
