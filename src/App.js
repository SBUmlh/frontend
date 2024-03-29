import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
  SignUpPage, 
  SignInPage, 
  CourseListPage, 
  TopicsListPage, 
  TopicPage, 
  QuizPage,
  AnalyticsPage
} from './pages'
import { Layout } from './components'

const theme = createTheme({
  palette: {
    primary: {
      main: '#24232A',
    },
    secondary: {
      main: '#5A5960',
    },
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#aaa',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#aaa', 
        },
      },
    },
  }

});

function App() {
  const email = localStorage.getItem('userEmail')
  console.log(email)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            {email ? (
              <>
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/" element={<CourseListPage />} />
                <Route path="/course/:courseId" element={<TopicsListPage />} />
                <Route path="/course/:courseId/topic/:topicId" element={<TopicPage />} />
                <Route path="/course/:courseId/topic/:topicId/quiz/:quizId" element={<QuizPage />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/signup" replace />} />
            )}
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;