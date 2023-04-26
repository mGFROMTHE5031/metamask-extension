import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProvider } from '../../../../../test/jest';
import SnapPrivacyWarning from './snap-privacy-warning';

describe('Snap Privacy Warning Popover', () => {
  it('renders snaps privacy warning popover', () => {
    const mockOnOkCallback = jest.fn();
    renderWithProvider(<SnapPrivacyWarning onOk={mockOnOkCallback} />);

    expect(screen.getByText('Third party software')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Installing a snap retrieves data from third parties. They may collect your personal information.',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText('MetaMask has no access to this information.'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /OK/iu,
      }),
    ).toBeInTheDocument();
    screen
      .getByRole('button', {
        name: /OK/iu,
      })
      .click();
    expect(mockOnOkCallback).toHaveBeenCalled();
  });
});
