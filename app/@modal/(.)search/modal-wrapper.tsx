'use client';

import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('../../pages/search/ui/search-modal'), {
  ssr: false,
});

export default function ModalWrapper() {
  return <Modal />;
}
