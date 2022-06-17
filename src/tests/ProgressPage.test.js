import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ProgressPage from '../components/views/ProgressPage';

it('render navigation bar', () => {
  sessionStorage.setItem(
    'user',
    JSON.stringify({
      id: 1,
      name: 'test',
      sex: 'Male',
    }),
  );
  const tree = renderer.create(
    <MemoryRouter>
      <ProgressPage />
    </MemoryRouter>,
  );
  expect(tree).toMatchSnapshot();
});
