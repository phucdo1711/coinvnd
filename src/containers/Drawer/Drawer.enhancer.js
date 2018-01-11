import { connect } from 'react-redux';
import {
    withHandlers,
    compose,
    withProps,
    flattenProp,
    withStateHandlers,
    withPropsOnChange,
    lifecycle,
} from 'recompose'
import { ACCOUNT_PATH } from 'constants'
import { withRouter, spinnerWhileLoading } from 'utils/components'
import { getVal,firestoreConnect } from 'react-redux-firebase';

export default compose(
    firestoreConnect(() => 
        [
            {
               collection: 'Account',
                doc: 'm7hkRX2j2j53S06bIECw'
            }
        ]
    ),
    connect((state) => ({
        account: state.firestore.data.Account,
    })),
    //withRouter,
    withStateHandlers(
        ({ isMenuOpenInitially = false }) => ({
            isMenuOpen: isMenuOpenInitially
        }),
        {
           handleDrawerToggle: ({isMenuOpen}) => () => ({
               isMenuOpen: !isMenuOpen
               
           })
        }
    ),
    lifecycle({
        componentDidMount(){
           // this.props.firestore.unsetListener({collection: 'Account', doc: 'm7hkRX2j2j53S06bIECw'});
        }
    })
)