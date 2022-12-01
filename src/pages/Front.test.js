import React from 'react';
import Front from './Front';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';

expect.extend(toHaveNoViolations);

it('should have no a11y issues', async () => {
  const { container } = render(<Front />);
  const res = await axe(container);
  expect(res).toHaveNoViolations();
})