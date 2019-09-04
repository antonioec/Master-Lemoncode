import * as React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RecipesContainer } from './recipes.container';
import { recipesPodReducer, RecipesPodState } from './store/reducers';
import { State } from 'core/store/root-reducer';

const renderWithRedux = (
      component,
      { initialState = {}, reducer, store = createStore(reducer, initialState) }
    ) => ({
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    });

describe('pods/recipes/recipes.container tests.', () => {
  it('should render empty table of recipes when it feeds initial state', () => {
    // Arrange
    const initialState: State = {
        router: history,
        recipesPod: {
            recipes: []
        },
    }

    // Act
    const { queryAllByTestId } = renderWithRedux(<RecipesContainer />,
        {
            initialState,
            reducer: recipesPodReducer,
        });

    const recipesElements = queryAllByTestId('recipes');

    // Assert
   expect(recipesElements).toHaveLength(0);
  });
});