import { Recipe } from '../recipes.view-model';
import { renderHook } from '@testing-library/react-hooks';
import { useRecipes } from './useRecipes';

describe('Hooks test', () => {
    it('should set and filter recipes', () => {
        //Arrange

        const recipes: Recipe[] = [{
            id: '32',
            name: 'receta',
            ingredients: ['tomate', 'cebolla', 'pan', 'queso'] 
        }]

        //Act
        const { result } = renderHook(() => useRecipes(recipes))

        //Assert
        expect(result.current.filteredRecipes).not.toBeUndefined();
        expect(result.current.handleFilter).not.toBeUndefined();
    })
})