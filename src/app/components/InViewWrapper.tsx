'use client';

import { useInView } from 'react-intersection-observer';

export default function InViewWrapper({children}: {children: React.ReactNode}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} >
      {inView ? children : null}
    </div>
  );
}