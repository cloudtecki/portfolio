/* eslint-disable import/export */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'core/store/configureStore';
import { ReactElement } from 'react';
import { getStore } from 'core/store/configureStore';
import { MockState } from 'core/base/test';

const customRender = (ui: ReactElement, state = {}) =>
  render(ui, {
    wrapper: ({ children }) => {
      const mockState = { ...MockState, ...state };
      return <Provider store={getStore(mockState)}>{children}</Provider>;
    },
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
