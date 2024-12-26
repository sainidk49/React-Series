import React, { useLayoutEffect, useRef, useState } from 'react';

function LayoutEffectExample() {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { offsetWidth, offsetHeight } = divRef.current;
    setDimensions({ width: offsetWidth, height: offsetHeight });
  }, []); 

  return (
    <div>
      <div  ref={divRef} style={{ width: 500, height: 500, background: "red" }}></div>
      <p>Width: {dimensions.width}, Height: {dimensions.height}</p>
    </div>
  );
}

export default LayoutEffectExample;
