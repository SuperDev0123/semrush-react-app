import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import Common from './Common'
import Dashboard from './Dashboard'
import TaskList from './TaskList'
import MailApp from './MailApp'
import Poll from './Poll'
import Chat from './Chat'
import ContactApp from './ContactApp'
import ProfileApp from './ProfileApp'
import WallApp from './WallApp'
import Auth from './Auth'
import PollCreateGetData from './PollCreateR'
import PollJobCreateGetData from './pollJobCreate'
import GetPollListData from './GetPollList'
import ShowLoaderGet from './ShowLoader'
import ForgetPasswordMessageGet from './ForgetPasswordMessage'
import PollCreateGetMessage from './pollCreateMessage'
import notificationGetData from './Notification'
import errorHandler from './ErrorHandler'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    taskList: TaskList,
    dashboard: Dashboard,
    mailApp: MailApp,
    chat: Chat,
    auth: Auth,
    contactApp: ContactApp,
    profileApp: ProfileApp,
    wallApp: WallApp,
    poll: Poll,
    PollCreateGetData,
    PollJobCreateGetData,
    GetPollListData,
    ShowLoaderGet,
    ForgetPasswordMessageGet,
    PollCreateGetMessage,
    notificationGetData,
    errorHandler,
  })
