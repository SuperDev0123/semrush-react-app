import React, { useContext } from 'react'

import AppRadioButton from '@src/@jumbo/components/Common/formElements/AppRadioButton'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import AppSwitch from '@src/@jumbo/components/Common/formElements/AppSwitch'
import {
  BackgroundSettingSection,
  CollapsibleSection,
  OverlaySettingSection,
  SectionLegend,
  SettingsComponent,
} from '@src/@jumbo/components/CorematDemosComponents'

const DemoSettings = () => {
  const {
    extraActions,
    setExtraActions,
    avatarType,
    setAvatarType,
    showAvatar,
    setShowAvatar,
    showCardMedia,
    setCardMedia,
    showMainContent,
    setMainContent,
    showFooter,
    setFooterVisibility,
  } = useContext(CorematContext)

  return (
    <SettingsComponent title="Cmt Basic Card">
      <CollapsibleSection heading="Header" open={true}>
        <SectionLegend>
          <AppSwitch
            label="Show Avatar or Icon"
            checked={showAvatar}
            onChange={(event) => setShowAvatar(event.target.checked)}
          />
        </SectionLegend>

        <SectionLegend title="Avatar Style">
          <AppRadioButton
            name="avatar-type"
            label="Avatar"
            checked={avatarType === 'avatar'}
            value="avatar"
            onChange={(event) => setAvatarType(event.target.value)}
          />

          <AppRadioButton
            name="avatar-type"
            label="Icon"
            checked={avatarType === 'icon'}
            value="icon"
            onChange={(event) => setAvatarType(event.target.value)}
          />

          <AppRadioButton
            name="avatar-type"
            label="Icon Avatar"
            checked={avatarType === 'icon-avatar'}
            value="icon-avatar"
            onChange={(event) => setAvatarType(event.target.value)}
          />
        </SectionLegend>

        <SectionLegend>
          <AppSwitch
            label="Show Extra Actions"
            checked={extraActions}
            onChange={(event) => setExtraActions(event.target.checked)}
          />
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Content" open={true}>
        <SectionLegend title="Data" displayAsColumn>
          <AppSwitch
            label="Show Card Media"
            checked={showCardMedia}
            onChange={(event) => setCardMedia(event.target.checked)}
          />

          <AppSwitch
            label="Show Main Content"
            checked={showMainContent}
            onChange={(event) => setMainContent(event.target.checked)}
          />
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Footer" open={false}>
        <AppSwitch
          label="Show Footer"
          checked={showFooter}
          onChange={(event) => setFooterVisibility(event.target.checked)}
        />
      </CollapsibleSection>

      <BackgroundSettingSection />
      <OverlaySettingSection />
    </SettingsComponent>
  )
}

export default DemoSettings
