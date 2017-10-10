import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Modal } from 'components'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import * as modalActionCreators from 'redux/modules/modal'
import * as ducksActionCreators from 'redux/modules/ducks'

let Modal = props => {
  const {
    handleSubmit,
    memoColourValue,
   } = props

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="memoColour">Colour</label>
        <Field name="memoColour" component= "input" type="text" />
      </div>
      <div>
        <label htmlForm="memoNote">Note</label>
        <Field name="memoNote" component="input" type="text" />
      </div>
      <button type="Submit">Submit</button>
    </form>
  )
}

function mapStateToProps ({modal, users}, props) {
  const duckTextLength = modal.duckText.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    duckText: modal.duckText,
    duckColour: modal.duckColour,
    isOpen: modal.isOpen,
    isSubmitDisabled: duckTextLength <= 0 || duckTextLength > 140,
    isFetching: PropTypes.bool.isRequired
  }
}
function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({
    ...modalActionCreators,
    ...ducksActionCreators,
  }, dispatch)
}

Modal = connect(
  mapStateToProps,
  mapDispatchToProps