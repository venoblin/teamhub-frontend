import './UserCard.css'
import { UserCardPropsType } from '../../types/props'
import Card from '../ui/Card/Card'
import useToggle from '../../hooks/useToggle'

const UserCard = (props: UserCardPropsType) => {
  const [isClicked, toggleIsClicked] = useToggle()

  const inviteHandler = () => {
    toggleIsClicked()
  }
  
  return (
    <Card className='user-card'>
      <div className='user-info'>
        <p>Name: {props.user.name}</p>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
      </div>

      {props.isAddMode && 
        (!isClicked ? (
          <button className='success' onClick={inviteHandler}>Invite</button>
          ) : (
          <button disabled>Invited</button>
        ))
      }
    </Card>
  )
}

export default UserCard