'use client';

import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import('../../features/search/containers/search-modal'),
  { ssr: false },
);

export default function ModalWrapper() {
  return <Modal />;
}
