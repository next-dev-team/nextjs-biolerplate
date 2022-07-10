# utils folder is auto generate for auto import

constant or functions name must be with prefixes `_xxxXx` e.g `_axiosGet`

```tsx
const Component = () => {
	const getUser = _axiosGet('/user');

	return <h1>no need import</h1>;
};
```
