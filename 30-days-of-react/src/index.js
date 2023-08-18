import React from 'react'
import ReactDOM from 'react-dom'
import profileImage from './download.jpg'

const root = document.getElementById('root')

//Styles

const skillStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,100px)',
    gap: '2rem',
}
const grid = {
    padding: 2,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    borderRadius: 6,
}
const pictureStyle = {
    borderRadius: '50%',
    width: 100,
    height: 100,
}
const card = {
    backgroundColor: 'ghostwhite',
    margin: '2rem',
    boxShadow: '1px 1px 1px rgba(200,200,200,0.1),-1px -1px 1px rgba(200,200,200,0.1)',
    padding:'2rem'
}

const skills = (
    <div>
        <h2>SKILLS</h2>
        <ul style={skillStyles}>
            <li style={grid}>HTML</li>
            <li style={grid}>CSS</li>
            <li style={grid}>JS</li>
            <li style={grid}>Scss</li>
            <li style={grid}>React</li>
            <li style={grid}>Redux</li>
            <li style={grid}>Node</li>
            <li style={grid}>MangoDB</li>
            <li style={grid}>Python</li>
            <li style={grid}>Flask</li>
            <li style={grid}>Django</li>
            <li style={grid}>NumPy</li>
            <li style={grid}>Pandas</li>
            <li style={grid}>Data Analysis</li>
            <li style={grid}>MYSQL</li>
            <li style={grid}>Docker</li>
            <li style={grid}>Git</li>
        </ul>
    </div>
)

const App = (
    <div style={card}>
        <img src={profileImage} alt='profile' style={pictureStyle} />
        <h1>Peter Rabbit</h1>
        <p>Software Engineer</p>
        {skills}
        <small>Joined on Aug 1,2023</small>
    </div>
)


ReactDOM.render(App, root)