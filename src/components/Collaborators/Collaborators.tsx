import './Collaborators.css'
import { ContributionType, ContributorType } from '../../types/contributor'

const Collaborators = (props: {collaborators: ContributorType[] | ContributionType[]}) => {
  return (
    <div className='collaborators'>
      {props.collaborators.length ? (
          props.collaborators.map((c) => (
            <p>(c.user.username)</p>
          ))
        ) : (
          <p>No collaborators!</p>
        )}
    </div>
  )
}

export default Collaborators