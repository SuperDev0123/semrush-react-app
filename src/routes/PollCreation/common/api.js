import { instanceAxios } from '@src/common/config/axios'
import apiRoutes from '@src/common/apiRoutes'
import axios from 'axios'

export const fetchTemplateByID = (templateID) =>
  instanceAxios
    .get(apiRoutes.FETCH_TEMPLATE_BY_ID(templateID))
    .then((res) => res.data)
