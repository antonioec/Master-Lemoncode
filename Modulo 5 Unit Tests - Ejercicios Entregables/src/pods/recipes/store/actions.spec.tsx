import { getRecipesRequest, updateRecipes } from './actions';

describe('Actions Test', () => {
    it('should get and update some recipes', () => {
        //Arrange
        const recipes = [{
            id: '32',
            name: 'receta',
            ingredients: ['tomate', 'cebolla', 'pan', 'queso'] 
        },
        {
            id: '54',
            name: 'receta 2',
            ingredients: ['tomate', 'cebolla', 'pan', 'queso'] 
        }]

        //Act
        const getResult = getRecipesRequest();
        const updateResult = updateRecipes(recipes);

        //Assert
        expect(getResult.type).toBe("[Recipes Pod] [0] Get recipes from API");

        expect(updateResult.type).toBe("[Recipes Pod] [1] Update recipes in state");
        expect(updateResult.payload).toBe(recipes);
    })
})