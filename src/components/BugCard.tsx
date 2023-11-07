import '../styles/BugCard.css'
import { useRef } from 'react'
import { BugPropsType } from '../types/props'
import useToggle from '../hooks/useToggle'
import Card from './ui/Card'

const BugCard = (props: BugPropsType) => {
  const [showInfo, setShowInfo] = useToggle()
  const bugInfoRef = useRef<HTMLParagraphElement | null>(null)

  const clickHandler = () => {
    // bugInfoRef.current?.classList.toggle('hide-font-size')
    console.log(bugInfoRef.current?.innerText)
  }
  
  return (
    <Card>
      <p>{props.singleBug.bug}</p>

      {props.singleBug.bug_info &&
        <div className='bug-info'>
          <p ref={bugInfoRef}>{props.singleBug.bug_info}</p>
          <button onClick={clickHandler}>View bug info</button>
        </div>
      }
    </Card>
  )
}

export default BugCard