import { createDefaultState, recipesPodReducer, RecipesPodState } from './reducers';
import { BaseAction } from 'common/types';
import { Recipe } from '../api';
import { actionTypes } from './action-types';
import deepFreeze from 'deep-freeze';

describe('Reducers Tests', () => {
    it('should reduce a recipe in both actions (UPDATE_RECIPES & GET_RECIPES_REQUEST', () => {
        //Arrange
        const recipe: Recipe[] = [{
            id: '32',
            name: 'receta',
            ingredients: ['tomate', 'cebolla', 'pan', 'queso'] 
        }]

        const updateAction: BaseAction = {
            type: actionTypes.UPDATE_RECIPES,
            payload: recipe
        }

        const getAction: BaseAction = {
            type: actionTypes.GET_RECIPES_REQUEST
        }

        //Act
        const defaultResult = createDefaultState();
        const getReducerResult = recipesPodReducer(defaultResult, getAction);

        const updateReducerResult = recipesPodReducer(defaultResult, updateAction);

        //Assert
        expect(defaultResult).not.toBeNull();
        expect(getReducerResult).toEqual(defaultResult);

        expect(updateReducerResult.recipes).toBe(recipe);
        
    })
})