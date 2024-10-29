import MailingSection from '../../components/pages/NewPage/MailingSection/MailingSection';
import NewCollectionSection from '../../components/pages/NewPage/NewCollectionSection/NewCollectionSection';
import PresentSection from '../../components/pages/NewPage/PresentSection/PresentSection';
import PreviewSection from '../../components/pages/NewPage/PreviewSection/PreviewSection';
import style from './NewPage.module.scss';

export default function NewPage() {
  return (
    <main className={style.main}>
      <PreviewSection />
      <NewCollectionSection />
      <PresentSection />
      <MailingSection />
    </main>
  );
}
