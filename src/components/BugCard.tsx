import '../styles/BugCard.css'
import { MouseEventHandler } from 'react'
import { BugPropsType } from '../types/props'
import useToggle from '../hooks/useToggle'
import Card from './ui/Card'

const BugCard = (props: BugPropsType) => {
  const [isShown, toggleShown] = useToggle()

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (evt) => {
    
    toggleShown()
  }
  
  return (
    <Card>
      <p>{props.singleBug.bug}</p>

      {props.singleBug.bug_info &&
        <div className='bug-info'>
          <button onClick={clickHandler}>View bug info</button>

          {isShown && 
            <p>{props.singleBug.bug_info}</p>
          }
        </div>
      }
    </Card>
  )
}

export default BugCard