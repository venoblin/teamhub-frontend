import './UserCard.css'
import { UserPropsType } from '../../types/props'
import Card from '../ui/Card/Card'

const UserCard = (props: UserPropsType) => {
  return (
    <Card className='user-card'>
      <div className='user-info'>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
        <p>Name: {props.user.name}</p>
      </div>

      <button className='success'>Invite</button>
    </Card>
  )
}

export default UserCard