import React, { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Demo() {
  const [url, setUrl] = useState(null);
  //   const myOptions = useMemo(() => ({ url }), [url]);
  //   const { data } = useFetch(myOptions);
  const { data } = useFetch({ url, onSuccess: () => console.log('success') });
  console.log('Demo component is rendering');
  return (
    <div>
      {JSON.stringify(data)}
      <div>
        <button onClick={() => setUrl('/jack.json')}>Jack</button>
        <button onClick={() => setUrl('/sally.json')}>Sally</button>
      </div>
    </div>
  );
}
