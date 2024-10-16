import React from 'react'
import { Link } from 'react-router-dom'


function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        <form>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
             type="text"
             name='username'
             style={styles.input} 
             />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" 
            name='password'
            style={styles.input}
            />
          </div>
          <button type='submit' style={styles.button}  onMouseEnter={handleMouseEnter} 
  onMouseLeave={handleMouseLeave}>Login</button>
          <p style={styles.link}>
            Dont't have an account? <Link to='/'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'url("https://i.pinimg.com/originals/e6/16/50/e61650efc5d6acff4c558aab0830d07a.jpg") no-repeat center ',
    backgroundSize: 'cover', 
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    width: '320px',
  },
  title: {
    textAlign: 'center',
    color:'white',
    marginBottom:'20px',
    fontWeight:'bold',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    color: '#333',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6a11cb',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',  
  },
  link: {
    textAlign: 'center',
    color: 'white',
    marginTop: '15px', 
  },
  label:{
    color: 'white', 
    marginBottom: '5px',
    display: 'block', 
  },
  buttonHover: {
    backgroundColor: '#5a0db2', 
  },
};

const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = '#5a0db2';
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = '#6a11cb';
};

export default LoginPage