import { getRecipesVMSelector } from './selectors'
import { State } from 'core/store/root-reducer';
import { createRootReducer } from 'core/store/root-reducer';

describe('pods/recipes/selectors test.', () => {
    it('should create the recipe selector', () => {
        //Arrange
        const state: State = {
            router: createRootReducer,
            recipesPod: {
                recipes: [{
                    id: '32',
                    name: 'receta',
                    ingredients: ['tomate', 'cebolla', 'pan', 'queso'] 
                }]
            }
        }
        

        //Act
        const result = getRecipesVMSelector(state);
       

        //Assert
        expect(result).toEqual(state.recipesPod.recipes);        
    })
})