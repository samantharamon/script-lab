import React, { useEffect } from 'react';
import { currentRunnerUrl } from 'common/lib/environment';

const Run = () => {
  useEffect(() => {
    console.log('using effect!!!!');
    window.location.href = currentRunnerUrl;
  });

  return null;
};

export default Run;
