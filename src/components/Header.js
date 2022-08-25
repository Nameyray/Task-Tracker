import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
   <header className='header'>
    <h1>{title}</h1>
    <Button color='#34d399' text='Add' onClick= {onclick}/>
   
   </header>
  )
}

Header.defaultProps = {
  title : 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {  
//   color: '#064E3B', backgroundColor: '#34D399', textAlign: 'center'
// } 

export default Header
