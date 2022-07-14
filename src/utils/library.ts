import _router, { useRouter as _useRouter } from 'next/router';
import _seoConfig from '../../next-seo.config';

/**
 * ahooks, react already using auto import in next.config.js
 * most usage func or any common use here
 * other export goes here
 */
export { default as Link, default as NextLink } from 'next/link';
export { _router, _useRouter, _seoConfig };
