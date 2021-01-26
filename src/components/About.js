import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>This is a simple app to add and delete tasks. 
                It also allows you to add reminders. 
                Go ahead and try it out.</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
