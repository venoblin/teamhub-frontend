import './UserCard.css'
import { UserCardPropsType } from '../../types/props'
import Card from '../ui/Card/Card'

const UserCard = (props: UserCardPropsType) => {
  return (
    <Card className='user-card'>
      <div className='user-info'>
        <p>Name: {props.user.name}</p>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
      </div>

      {props.isAddMode && 
        <button className='success'>Invite</button>
      }
    </Card>
  )
}

export default UserCard