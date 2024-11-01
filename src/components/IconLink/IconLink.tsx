import './IconLink.css'
import { Link } from 'react-router-dom'

const IconLink = (props: any) => {
  return (
    <Link to={props.to}></Link>
  )
}

export default IconLink