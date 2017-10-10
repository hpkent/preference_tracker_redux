// Users
const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action),
        }
    default :
      return state
  }
}


//Notes
const initialState = {
  isFetching: true,
  error: '',
}

export default function notes (state = initialState, action) {
  switch (action.type) {
    case FETCHING_NOTE :
      return {
        ...state,
        isFetching: true,
      }
    case ADD_NOTE :
    case FETCHING_NOTE_SUCCESS :
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.note.noteId]: action.note,
      }
    case FETCHING_NOTE_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case REMOVE_FETCHING :
      return {
        ...state,
        error: '',
        isFetching: false,
      }
    case ADD_MULTIPLE_NOTES :
      return {
        ...state,
        ...action.ducks,
      }
    default :
      return state
  }
}



//Listeners
export default function listeners (state = {}, action) {
  switch (action.type) {
    case ADD_LISTENER :
      return {
        ...state,
        [action.listenerId]: true,
      }
    default :
      return state
  }
}


//usersNotes
const initialUsersNoteState = {
  lastUpdated: 0,
  noteIds: [],
}

function usersNotes (state = initialUsersDuckState, action) {
  switch (action.type) {
    case ADD_SINGLE_USERS_NOTE:
      return {
        ...state,
        noteIds: state.noteIds.concat([action.noteId]),
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
}

export default function usersNotes (state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS_NOTES :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USERS_NOTES_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USERS_NOTES_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: {
          lastUpdated: action.lastUpdated,
          duckIds: action.noteIds,
        },
      }
    case ADD_SINGLE_USERS_NOTE :
      return typeof state[action.uid] === 'undefined'
        ? state
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: usersNotes(state[action.uid], action),
        }
    default :
      return state
  }
}


