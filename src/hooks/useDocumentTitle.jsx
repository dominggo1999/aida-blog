import React, { useLayoutEffect } from 'react';
import { capitalize } from '../util/capitalize';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    document.title = `aida | ${capitalize(title)}`;
  }, [title]);

  return null;
};

export default useDocumentTitle;
