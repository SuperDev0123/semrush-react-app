import React, { useContext } from 'react'

import {
  CollapsibleSection,
  SectionLegend,
  SettingsComponent,
} from '@src/@jumbo/components/CorematDemosComponents'
import AppRadioButton from '@src/@jumbo/components/Common/formElements/AppRadioButton'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import AppSwitch from '@src/@jumbo/components/Common/formElements/AppSwitch'

const DemoSettings = () => {
  const {
    position,
    setPosition,
    showAvatar,
    setAvatarVisibility,
    showActions,
    setActionsVisibility,
    showFooter,
    setFooterVisibility,
    showChildren,
    setChildrenVisibility,
  } = useContext(CorematContext)

  const positions = [
    { label: 'Top', value: 'top' },
    { label: 'Center', value: 'center' },
    { label: 'Bottom', value: 'bottom' },
  ]

  return (
    <SettingsComponent title="Cmt Media Object">
      <CollapsibleSection heading="Avatar" open>
        <SectionLegend>
          <AppSwitch
            label={'Show Avatar'}
            checked={showAvatar}
            onChange={(event) => setAvatarVisibility(event.target.checked)}
          />
        </SectionLegend>

        <SectionLegend title="Show Avatar">
          {positions.map((item, index) => (
            <AppRadioButton
              key={index}
              name="avatar-position"
              label={item.label}
              value={item.value}
              checked={position === item.value}
              onChange={() => setPosition(item.value)}
            />
          ))}
        </SectionLegend>
      </CollapsibleSection>

      <CollapsibleSection heading="Content" open>
        <AppSwitch
          label={'Show Actions'}
          checked={showActions}
          onChange={(event) => setActionsVisibility(event.target.checked)}
        />

        <AppSwitch
          label={'Show Children'}
          checked={showChildren}
          onChange={(event) => setChildrenVisibility(event.target.checked)}
        />
      </CollapsibleSection>

      <CollapsibleSection heading="Footer">
        <AppSwitch
          label={'Show Footer'}
          checked={showFooter}
          onChange={(event) => setFooterVisibility(event.target.checked)}
        />
      </CollapsibleSection>
    </SettingsComponent>
  )
}

export default DemoSettings
