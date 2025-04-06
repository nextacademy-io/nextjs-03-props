# Next.js Workshop: Props (inputs)

Update the `ProfilePicture` component to use _Props_.

Instead of having `diamater` and `profileUrl` given as pre-defined local variables pass those values as `props`.

## 1. Declare _ProfilePictureProps_

```tsx
export interface ProfilePictureProps {
  // TODO: Implement me
}
```

Make sure, that all props are optional and have a default value.

## 2. Add additional tests

- Test, if component `has correct diameter: %i'`
- Test, if component `has default diameter`
- Test, if component `has correct profile picture URL: %s`
- Test, if component `has default profile picture URL`

**Hints:**

- [test.each](https://vitest.dev/api/#test-each)
- `toHaveAttribute('src', expect.stringMatching(encodeURIComponent(profileUrl)));`
