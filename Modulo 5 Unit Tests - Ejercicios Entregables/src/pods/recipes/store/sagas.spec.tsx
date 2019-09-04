import { watchRecipesPodSagas, getRecipesRequestSaga } from './sagas';
import { takeLatest } from 'redux-saga/effects';
import { actionTypes } from './action-types';

describe('Sagas Test', () => {
    it('Watch Recipes Pod Sagas', () => {
        //Arrange
        const saga = watchRecipesPodSagas();

        //Act
        const result = saga.next();

        //Assert
        expect(result.value).toEqual(takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga))
    })
})