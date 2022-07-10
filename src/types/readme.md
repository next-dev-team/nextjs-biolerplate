# all related global typescript need to put here

`rule`: global type support only `import type from 'xxx'`

```ts
import type { ReactNode as _ReactNode } from 'react';
declare type ReactNode = _ReactNode;
declare type StringOrUndefine = string | undefined;
```

```tsx
type IProps = {
	title: ReactNode | StringOrUndefine;
};

const Button = (props: IProps) => {
	return <h1>no need import type</h1>;
};
```
