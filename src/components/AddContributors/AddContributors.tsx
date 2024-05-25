import './AddContributors.css'
import { SetProjectPropsType } from '../../types/props'
import Users from '../Users/Users'

const AddContributors = (props: SetProjectPropsType) => {
  return (
    <div className='add-contributors'>
      <h2>Add contributors</h2>

      <Users isAddMode={true} project={props.project} />
    </div>
  )
}

export default AddContributors