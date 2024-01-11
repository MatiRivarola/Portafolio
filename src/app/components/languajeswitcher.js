<<<<<<< Updated upstream


export default function SwitcherLanguage(){
  

  return(

  )
}
=======
'use client'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@nextui-org/react';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    const savedLocale = Cookies.get('locale') || 'en';
    setCurrentLocale(savedLocale);
  }, []);

  const switchLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    Cookies.set('locale', newLocale, { expires: 365 });
    setCurrentLocale(newLocale);

    // Recarga la página para aplicar el cambio de idioma
    window.location.reload();
  };

  const otherLocaleText = currentLocale === 'en' ? 'Español' : 'Inglés';

  return (
    <Button auto onClick={switchLanguage}>
      {otherLocaleText}
    </Button>
  );
}
>>>>>>> Stashed changes
