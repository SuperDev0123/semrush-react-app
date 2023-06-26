import React, { useContext } from 'react'

import { SourceCodeComponent } from '@src/@jumbo/components/CorematDemosComponents'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'

const DemoSourceCode = () => {
  const { alignment } = useContext(CorematContext)

  const getSourceCode = () => {
    return `
<CmtTimeLine align="${alignment}">
  {timeline.map((item, index) => (
    <CmtTimeLineItem
      key={index}
      head={
        <Box>
          <CmtAvatar src={item.avatar} />
          <Box component="p" mb={0} mt={2}>
            {item.time}
          </Box>
        </Box>
      }
      point={<CmtImage src={item.point} alt={item.title} />}
      content={
        <CmtTimelineContent isWrapper={true}>
          <Box component="h2" fontSize={20} mt={0} mb={3}>
            {item.title}
          </Box>
          <Box component="p" mt={0}>
            {item.description}
          </Box>
        </CmtTimelineContent>
      }
    />
  ))}
</CmtTimeLine>
`
  }

  return <SourceCodeComponent sourceCode={getSourceCode()} />
}

export default DemoSourceCode
