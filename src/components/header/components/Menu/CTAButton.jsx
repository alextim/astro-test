import Button from '../../../Button';
import { useTranslation } from '../../../ComponentContext/ComponentContext';

const CTAButton = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <Button as="link" overrideCSS="h-12 my-8 mr-auto ml-auto xl:h-8 xl:my-0 xl:mr-6 xl:ml-0" onClick={onClick} to="/inquiry/">
      {t('nav.inquiry')}
    </Button>
  );
};

export default CTAButton;
