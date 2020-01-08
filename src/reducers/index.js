import { combineReducers } from 'redux';

import messages from './messagesReducer';
import user from './userReducer';
import usersList from './usersListReducer';
import chatRoom from './chatRoomReducer'

const rootReducer = combineReducers({
  messages,
  user,
  usersList,
  chatRoom,
})

export default rootReducer;