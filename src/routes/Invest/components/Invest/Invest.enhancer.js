import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // create listener for invest, results go into redux
  firestoreConnect([{ 
    collection: 'BangGia',
    orderBy: ['order']
  }]),
  // map redux state to props
  connect(({ firestore: { ordered } }) => ({
    listInvest: ordered.BangGia
  }))
)
