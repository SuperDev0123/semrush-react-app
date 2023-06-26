import React, { useContext } from 'react'
import clsx from 'clsx'

import CmtVerticalLayout from '@src/@coremat/CmtLayouts/Vertical'
import CmtHeader from '@src/@coremat/CmtLayouts/Vertical/Header'
import CmtSidebar from '@src/@coremat/CmtLayouts/Vertical/Sidebar'
import CmtContent from '@src/@coremat/CmtLayouts/Vertical/Content'
import CmtFooter from '@src/@coremat/CmtLayouts/Vertical/Footer'
import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import ContentLoader from '@src/@jumbo/components/ContentLoader'

import SidebarHeader from '../../partials/SidebarHeader'
import SideBar from '../../partials/SideBar'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'

const VerticalDefault = ({ className, children, isSharedResult }) => {
  const {
    drawerBreakPoint,
    isSidebarFixed,
    sidebarStyle,
    sidebarSize,
    sidebarType,
    headerType,
    showFooter,
  } = useContext(AppContext)

  return (
    <CmtVerticalLayout
      drawerBreakPoint={drawerBreakPoint}
      className={clsx('verticalPagedLayout', className)}
      sidebarWidth={sidebarSize}
    >
      <CmtHeader type={headerType}>
        <Header isSharedResult={isSharedResult} />
      </CmtHeader>
      <CmtContent>
        <CmtSidebar
          isSidebarFixed={isSidebarFixed}
          type={sidebarType}
          {...sidebarStyle}
          isPaged={true}
        >
          <SidebarHeader />
          <SideBar />
        </CmtSidebar>
        {children}
        <ContentLoader />
      </CmtContent>
      {showFooter && (
        <CmtFooter type="static">
          <Footer />
        </CmtFooter>
      )}
    </CmtVerticalLayout>
  )
}

export default VerticalDefault
