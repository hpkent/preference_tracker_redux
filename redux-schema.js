{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      }
    }
  },
  notes: {
    [noteId]: {
      lastUpdated,
      info: {
        avatar,
        noteId,
        name,
        text,
        timestamp,
        uid,
      }
    }
  },
  usersNotes: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      noteIds: [noteId, noteId, noteId]
    }
  },
  listeners: {
    [listenerId]: true
  }
}