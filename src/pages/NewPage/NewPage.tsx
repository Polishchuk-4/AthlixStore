import NewCollectionSection from '../../components/pages/NewPage/NewCollectionSection/NewCollectionSection';
import PreviewSection from '../../components/pages/NewPage/PreviewSection/PreviewSection';
import style from './NewPage.module.scss';

export default function NewPage() {
  return (
    <main className={style.main}>
      <PreviewSection />
      <NewCollectionSection />
    </main>
  );
}
