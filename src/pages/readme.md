# pages folder is not using auto generate

- pages is auto generate route
- don't write UI and logic here just get Ssr data the will import template to it

please use dynamic import for code splitting

```tsx
const AppTemplate = dynamic(() => import('@/template/xxxpage'));
```
