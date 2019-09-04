import { getRecipesSelector } from './selectors'
import { State } from 'core/store/root-reducer';
import { createRootReducer } from 'core/store/root-reducer';

describe('Selectors Test', () => {
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
        const result = getRecipesSelector(state);
       

        //Assert
        expect(result).toBe(state.recipesPod.recipes);        
    })
})