import * as types from '../../_common/constants/ActionTypes';

export const set = (value) => ({
    type: types.UPDATE_ON_LINE_USERS,
    payload: value
});