import { useState } from 'react'
import { ContributorType, ContributionType } from '../types/contributor'

const useUserContributor = (): [ContributorType[] | ContributionType[], React.Dispatch<React.SetStateAction<ContributorType[] | ContributionType[]>>] => {
  const [userContributor, setUserContributor] = useState<ContributorType[] | ContributionType[]>([])

  return [userContributor, setUserContributor]
}

export default useUserContributor