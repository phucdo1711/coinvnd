import { connect } from 'react-redux';
import {
    withHandlers,
    compose,
    withProps,
    flattenProp,
    withStateHandlers,
    withPropsOnChange,
    lifecycle,
    withState,
    withContext
} from 'recompose'
import { ACCOUNT_PATH } from 'constants'
import { withRouter, spinnerWhileLoading } from 'utils/components'
import { getVal, firestoreConnect } from 'react-redux-firebase';
import PropTypes from "prop-types";

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
   
    withStateHandlers(
        ({ isMenuOpenInitially = false }) => ({
            isMenuOpen: isMenuOpenInitially,
        }),
        {
            handleDrawerToggle: ({ isMenuOpen }) => () => ({
                isMenuOpen: !isMenuOpen
            }),
        }
    ),
)