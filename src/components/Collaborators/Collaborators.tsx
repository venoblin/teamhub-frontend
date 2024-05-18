import './Collaborators.css'
import { ContributionType, ContributorType } from '../../types/contributor'

const Collaborators = (props: {contributors: ContributorType[] | ContributionType[]}) => {
  return (
    <div className='collaborators'>
      {props.contributors.length ? (
          props.contributors.map((c) => (
            <p>(c.user.username)</p>
          ))
        ) : (
          <p>No collaborators!</p>
        )}
    </div>
  )
}

export default Collaborators