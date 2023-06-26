import React, { useContext } from 'react'
import { Box } from '@material-ui/core'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import CmtTimelineContent from '@src/@coremat/CmtTimeLine/CmtTimelineContent'
import CmtTimeLineItem from '@src/@coremat/CmtTimeLine/CmtTimeLineItem'
import { coremat } from '@src/@fake-db/coremat-components'
import CmtTimeLine from '@src/@coremat/CmtTimeLine'
import CmtAvatar from '@src/@coremat/CmtAvatar'
import CmtImage from '@src/@coremat/CmtImage'

const TimelineView = () => {
  const { alignment } = useContext(CorematContext)
  const { timeline } = coremat

  return (
    <CmtTimeLine align={alignment}>
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
  )
}

export default TimelineView
