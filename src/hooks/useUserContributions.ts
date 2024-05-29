import { useState } from 'react'
import { ContributionType } from '../types/contributor'

const useUserContributor = (): [ContributionType[], React.Dispatch<React.SetStateAction<ContributionType[]>>] => {
  const [userContributor, setUserContributor] = useState<ContributionType[]>([])

  return [userContributor, setUserContributor]
}

export default useUserContributor