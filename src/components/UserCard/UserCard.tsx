import './UserCard.css'
import { UserCardPropsType } from '../../types/props'
import { UserContext } from '../../contexts/UserContext'
import Card from '../ui/Card/Card'
import useToggle from '../../hooks/useToggle'
import { useContext } from 'react'
import { UtilitiesContext } from '../../contexts/UtilitiesContext'
import PopUpMessage from '../PopUpMessage/PopUpMessage'

const UserCard = (props: UserCardPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [isClicked, toggleIsClicked] = useToggle()

  const inviteHandler = async () => {
    try {
      await utilitiesContext?.load(
        userContext?.postNotification({
        notification: 'Invited to contribute.',
        type: 'invitation',
        user_id: props.user?.id!,
        sender_id: userContext.user.id!,
        project_id: props.project?.id || null
      }))
      toggleIsClicked()
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error inviting user!' />)
    }
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