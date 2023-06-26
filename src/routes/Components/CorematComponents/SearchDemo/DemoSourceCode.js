import React, { useContext } from 'react'

import { SourceCodeComponent } from '@src/@jumbo/components/CorematDemosComponents'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'

const DemoSourceCode = () => {
  const { showBorder, onlyIcon, iconPosition, alignment } =
    useContext(CorematContext)

  const getSourceCode = () => {
    return `
const [value, setValue] = useState('');

<CmtSearch
  border={${showBorder}}
  onlyIcon={${onlyIcon}}
  iconPosition="${iconPosition}"
  align="${alignment}"
  placeholder="Search Keywords"
  value={value}
  onChange={e => setValue(e.target.value)} />
`
  }

  return <SourceCodeComponent sourceCode={getSourceCode()} />
}

export default DemoSourceCode
