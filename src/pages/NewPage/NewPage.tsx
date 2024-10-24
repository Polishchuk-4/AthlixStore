import PreviewSection from '../../components/pages/NewPage/PreviewSection/PreviewSection.tsx';

import style from './NewPage.module.scss';

export default function NewPage() {
  return (
    <main className={style.main}>
      <p>HomePage</p>
      <PreviewSection />
    </main>
  );
}
