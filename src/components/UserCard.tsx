import '../styles/UserCard.css'
import { UserPropsType } from '../types/props'
import Card from './ui/Card'

const UserCard = (props: UserPropsType) => {
  return (
    <Card>
      <h3>{props.user.username}</h3>
      <h3>{props.user.email}</h3>
      <h3>{props.user.name}</h3>
    </Card>
  )
}

export default UserCard