import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';



import { orange } from '@material-ui/core/colors';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    color: 'lime',
    padding: '5px 30px',
    borderRadius: 0,
    background: 'linear-gradient(45deg, #333, #999)',
    margin: '15 15',

  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#a9ff27',
    }
  }
})

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          style={{
            border: '1px solid #020100',
            borderRadius: '0%',
            margin: '5px'
          }}

          checked={checked}
          icon={< DeleteIcon />}
          checkedIcon={< SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          size="medium"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary" justify="space-between">
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
          </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
          </Typography>
            <ButtonStyled />

            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6} xl={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6} xl={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6} xl={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>

            <Grid>
              <Paper style={{ width: 250, margin: 20 }}>
                <TextField
                  variant="standard"
                  color="secondary"
                  type="date"
                />
                <TextField
                  variant="filled"
                  color="secondary"
                  type="time"
                  label="The Time"
                />
                <TextField
                  variant="standard"
                  color="primary"
                  type="email"
                  placeholder="Enter Email"
                />
                <CheckboxExample />
              </Paper>
            </Grid>

            <Button
              startIcon={<SaveIcon />}
              endIcon={<SaveIcon />}
              style={{
                color: '#a9ff27',
                background: '#000000',
                borderRadius: 0,
                fontSize: 24
              }}
              // disabled
              size="large"
              variant="contained"

            >Hello World</Button>
            <br />

            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                size="large"
                variant="contained"
                color="primary"
              >
                Save
          </Button>
              <Button
                endIcon={<DeleteIcon />}
                size="large"
                variant="contained"
                color="secondary"
              >
                Discard
          </Button>
            </ButtonGroup>

          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
