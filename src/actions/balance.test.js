import * as constants from './constants';
import * as actions from './balance';

it('should creates an action to set the balance', () => {

    const balance = 0;
    const expectedAction = {type:constants.SET_BALANCE,balance};
    expectedAction(actions.setBalance(balance)).toEqual(expectedAction);
});

