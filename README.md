# Next.js Workshop: Profile Picture Component

In this task, you will create a `ProfilePicture` component that renders a profile picture in a circle using Tailwind CSS. The component will use a random image from [randomuser.me](https://randomuser.me/photos).

## 1. Make sure to allow `randomuser.me` as image source.

`next.config.ts`:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
    ],
  },
};

export default nextConfig;
```

## 2. Create the `ProfilePicture` component

First, create a file structure like this:

```
src/components/profile-picture
├── index.ts
├── profile-picture.test.tsx
└── profile-picture.tsx
```

`profile-picture.tsx`:

```tsx
export function ProfilePicture(): React.ReactNode {
  return <div>Profile Picture</div>;
}
```

`profile-picture.test.tsx`:

```tsx
import { expect, describe, it } from 'vitest';
import { ProfilePicture } from './profile-picture';
import { render } from '@testing-library/react';

describe('Profile Picture Component', () => {
  it('renders correctly', () => {
    const { container } = render(<ProfilePicture />);
    expect(container).toBeDefined();
  });
});
```

`index.tsx`:

```tsx
export * from './profile-picture';
```

## 3. Define local variables

Open the `profile-picture.tsx` file and define local variables for the diameter and profile picture URL.

- The `diameter` is of type `number`, initialized with `100`.
- The `profileUrl` is of type `string` initialized with `https://randomuser.me/api/portraits/men/1.jpg` or any other URL from `https://randomuser.me/photos`.

> [!TIP]
> You will convert this local variables into _props_ later.

## 4. Define the View (JSX)

- Based on the values of the local variables _diameter_ and _profileUrl_, render an [Image](https://nextjs.org/docs/pages/api-reference/components/image) wrapped into a `div`.

- Use Tailwind CSS: The `rounded-full` class will apply a circular shape to the image, and the `object-cover` class will ensure the image covers the container without stretching. You can use `max-w-fit` on the `div` to set its width with based on the image.

- Choose the value `'Profile Picture`' as `alt`.

## 5. Add additional tests

Add additional tests to `profile-picture.test.tsx`:

- Test, if the component _has correct alt text_.
- Test, if the component _has correct diameter_.
- Test, if the component _is circle_.

You may want to use the queries [getByAltText](https://testing-library.com/docs/queries/byalttext/) and [getByRole](https://testing-library.com/docs/queries/byrole).

You may want to use the matchers [toBeVisible](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobevisible), [toHaveAttribute](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveattribute) and [toHaveClass](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveclass)

**Hint:**

```tsx
const { getByAltText } = render(<ProfilePicture />);
```

## 6. Use the `ProfilePicture` component

Finally, use the `ProfilePicture` component in any other component, such as `Home` in `app/page.tsx`:

```tsx
<ProfilePicture />
```

Refactor the `app/page.test.tsx` accordingly:

```tsx
import { expect, describe, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  test('renders Heading', () => {
    // Implement me
  });

  test('renders Profile Picture', () => {
    // Implement me
  });
});
```
