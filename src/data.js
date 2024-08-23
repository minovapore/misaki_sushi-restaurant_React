import prenotaUnTavolo from './assets/img/prenota un tavolo.png';
import delivery from './assets/img/delivery.png';
import takeAway from './assets/img/take away.png';

export const CARDS = [
    {
      image: prenotaUnTavolo,
      title: 'Prenota un tavolo',
      description:
        'Una cena tra amici o un evento importante, prenota un tavolo e vieni a vivere appieno l’esperienza di Misaki sushi & restaurant.',
      button: 'PRENOTA IL TAVOLO',
    },
    {
      image: delivery,
      title: 'Delivery',
      description:
        'Leggi il menu, aggiungi i prodotti scelti, nome cognome e orario di consegna. Chiamaci, ti risponderemo velocemente.',
        button: 'PRENOTA IL TUO TAKE AWAY',
    },
    {
      image: takeAway,
      title: 'Take away',
      description:
        'Leggi il menu, aggiungi i prodotti scelti,  ti risponderemo velocemente per fornirti l’orario concordato per il ritiro. Non aspettare vieni personalmente. ',
      button: 'ORDINA IL TUO DELIVERY',
    }
  ];