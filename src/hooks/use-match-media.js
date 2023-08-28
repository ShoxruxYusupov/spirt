import { useState, useLayoutEffect } from 'react';

const query = ['(max-width: 767px)'];

export const useMatchMedia = () => {
  const mediaQueryList = query.map((q) => matchMedia(q));

  const getValues = () => mediaQueryList.map((mql) => mql.matches);

  const [value, setValue] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValue(getValues);
    mediaQueryList.forEach((mql) => mql.addEventListener('change', handler));

    return () =>
      mediaQueryList.forEach((mql) =>
        mql.removeEventListener('change', handler)
      );
  });

  return { isMobile: value[0] };
};
