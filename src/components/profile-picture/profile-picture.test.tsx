import { expect, describe, it } from 'vitest';
import { ProfilePicture } from './profile-picture';
import { render } from '@testing-library/react';

describe('Profile Picture Component', () => {
  it('renders correctly', () => {
    const { container } = render(<ProfilePicture />);
    expect(container).toBeVisible();
  });

  it('has correct alt text', () => {
    const { getByAltText } = render(<ProfilePicture />);
    const image = getByAltText('Profile Picture');
    expect(image).toBeVisible();
  });

  it('has correct diameter', () => {
    const { getByRole } = render(<ProfilePicture />);
    const image = getByRole('img');
    expect(image).toHaveAttribute('width', '100');
    expect(image).toHaveAttribute('height', '100');
  });

  it('is circle', () => {
    const { getByRole } = render(<ProfilePicture />);
    const image = getByRole('img');
    expect(image).toHaveClass('rounded-full');
  });
});
