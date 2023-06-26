import React from 'react'
import pt from 'prop-types'
import { map, find } from 'lodash'
import { Box } from '@material-ui/core'

import { When } from '@src/common/components'
import { comparisions } from '@src/common/constants'
import { priceFraction } from '@src/routes/SelectAudience/common/functions'

import { useStyles } from './PriceBox.style'

const PriceBox = ({
  audience,
  selectedCriterias,
  options,
  open,
  totalPrice,
  costInformation,
}) => {
  const classes = useStyles()

  const fullSelectedCriterias = audience.criterias.filter(
    (item) => !!item.value
  )

  return (
    <Box className={`${classes.pricingComp} with-lbl`}>
      <Box sx={{ padding: '12px 30px' }}>
        <label>PRICING</label>
        <When condition={selectedCriterias.length === 0}>
          <Box className="pricing-body show">
            <ul className={classes.priceList}>
              <li>
                <span className="lst-price">
                  ${costInformation.costPerResponse}
                </span>{' '}
                per response
              </li>
            </ul>
          </Box>
        </When>
        <Box className={`pricing-body ${open ? 'show' : ''}`}>
          <ul className={classes.priceList}>
            <li>
              <span className="lst-price">
                ${costInformation.costPerResponse}
              </span>{' '}
              per response
            </li>
            <When condition={fullSelectedCriterias.length > 0}>
              <li>
                <span className="plus-mark">+</span>
                <span className="lst-price">
                  $
                  {priceFraction(
                    fullSelectedCriterias.length *
                      costInformation.costPerAdditionalCriteria
                  )}
                </span>{' '}
                Advanced criteria
                <ul className="sublist">
                  {map(fullSelectedCriterias, (criteria, key) => {
                    const { qualification, comparision, value } = criteria
                    const itemName =
                      find(options, (o) => o.id === parseInt(qualification)) ||
                      ''

                    const criteriaTxt = itemName
                      ? `${itemName.label} - ${
                          comparision !== ''
                            ? `${comparisions[comparision]} - `
                            : ''
                        }  ${
                          value.toString() === '1'
                            ? 'True'
                            : value.toString() === '0'
                            ? 'False'
                            : value
                        }`
                      : ''

                    return itemName ? (
                      <li key={`crt_${key}`}>
                        <span className="lst-price">
                          + ${costInformation.costPerAdditionalCriteria}&nbsp;
                        </span>
                        {criteriaTxt}
                      </li>
                    ) : null
                  })}
                </ul>
              </li>
            </When>
          </ul>
        </Box>
      </Box>
      <Box className="pricing-footer active">
        <span className="btn-sub">TOTAL: {`$${totalPrice}`}</span>
      </Box>
    </Box>
  )
}

PriceBox.defaultProps = {
  totalPrice: 0,
}

PriceBox.propTypes = {
  totalPrice: pt.oneOfType([pt.number, pt.string]).isRequired,
}

export default PriceBox
