import '../styles/Bugs.css'
import { useRef } from 'react'
import { ProjectPropsType } from '../types/props'
import useToggle from '../hooks/useToggle'
import Panel from './ui/Panel'
import BugCard from './BugCard'

const Bugs = (props: ProjectPropsType) => {
  const [showInfo, setShowInfo] = useToggle()
  const bugInfoRef = useRef<HTMLParagraphElement | null>(null)

  const clickHandler = () => {
    // bugInfoRef.current?.classList.toggle('hide-font-size')
    console.log(bugInfoRef.current?.innerText)
  }
  
  return (
    <Panel className='bugs'>
      <h2>Bugs</h2>
      <div>
        {props.project?.bugs.length ? (
          props.project?.bugs.map(singleBug => (
            <div key={String(singleBug.id)}>
              <p className='bug'>{singleBug.bug}</p>
              
              {singleBug.bug_info &&
                <div className='bug-info'>
                  <p ref={bugInfoRef}>{singleBug.bug_info}</p>
                  <button onClick={clickHandler}>View bug info</button>
                </div>
              }
            </div>
          ))
        ) : (
          <p>No bugs!</p>
        )}
      </div>
    </Panel>
  )
}

export default Bugs