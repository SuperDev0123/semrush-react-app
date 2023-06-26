import React, { useContext, useState } from 'react'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import JumboCard from '@src/@jumbo/components/Common/JumboCard'
import CmtSearch from '@src/@coremat/CmtSearch'

const SearchView = () => {
  const { showBorder, onlyIcon, iconPosition, alignment } =
    useContext(CorematContext)
  const [value, setValue] = useState('')

  return (
    <JumboCard>
      <CmtSearch
        border={showBorder}
        onlyIcon={onlyIcon}
        iconPosition={iconPosition}
        align={alignment}
        placeholder="Search Keywords"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </JumboCard>
  )
}

export default SearchView
