import { UPDATE_ON_LINE_USERS } from '../../_common/constants/ActionTypes';

const navbar = (state = 0, action) => {
    switch (action.type) {
        case UPDATE_ON_LINE_USERS:
            return action.payload;
        default:
            return state;
    }
};

export default navbar