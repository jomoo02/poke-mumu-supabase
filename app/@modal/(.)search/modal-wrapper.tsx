'use client';

import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('./modal'), { ssr: false });

export default function ModalWrapper() {
  return <Modal />;
}
