import * as recipes from './recipes.mappers';
import * as apiModel from './api/recipes.api-model';

describe('Recipes mappers Test', () => {
    it('should map a recipe from api to vm or create an empty vm', () => {
        //Arrange
        const recipe: apiModel.Recipe = {
            id: '32',
            name: 'receta',
            ingredients: ['tomate', 'cebolla', 'pan', 'queso'] 
        }

        //Act
        const result = recipes.mapRecipeFromApiToVm(recipe)

        //Assert
        expect(result).not.toBeUndefined();
    })
})