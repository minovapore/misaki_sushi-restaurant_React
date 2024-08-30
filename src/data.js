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

  
    export const SUSHI_TYPES = [
    {
        name: "Nigiri",
        description: "Una pallina di riso con una fetta di pesce crudo o cotto sopra.",
        ingredients: ["Riso", "Pesce (tonno, salmone, gambero, ecc.)", "Wasabi"],
        category: "Nigiri",
        cooked: false,
        price: 3.50,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/sushi-1234934_960_720.jpg"
    },
    {
        name: "Maki",
        description: "Rotolini di riso e pesce o verdure avvolti in alga nori.",
        ingredients: ["Riso", "Pesce o verdure", "Alga Nori"],
        category: "Maki",
        cooked: false,
        price: 4.00,
        image: "https://cdn.pixabay.com/photo/2018/03/05/16/18/sushi-3207100_960_720.jpg"
    },
    {
        name: "Sashimi",
        description: "Fette di pesce crudo servite senza riso.",
        ingredients: ["Pesce (tonno, salmone, ecc.)"],
        category: "Sashimi",
        cooked: false,
        price: 5.00,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/sashimi-1234935_960_720.jpg"
    },
    {
        name: "Uramaki",
        description: "Un tipo di maki con il riso all'esterno e l'alga nori all'interno.",
        ingredients: ["Riso", "Pesce o verdure", "Alga Nori", "Sesamo"],
        category: "Maki",
        cooked: false,
        price: 4.50,
        image: "https://cdn.pixabay.com/photo/2015/09/04/05/07/sushi-921123_960_720.jpg"
    },
    {
        name: "Temaki",
        description: "Un cono di alga nori ripieno di riso, pesce e verdure.",
        ingredients: ["Riso", "Pesce o verdure", "Alga Nori"],
        category: "Temaki",
        cooked: false,
        price: 3.00,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/temaki-1234933_960_720.jpg"
    },
    {
        name: "Futomaki",
        description: "Rotolini di sushi più spessi, spesso con più ripieni rispetto ai normali maki.",
        ingredients: ["Riso", "Pesce o verdure", "Alga Nori"],
        category: "Maki",
        cooked: false,
        price: 4.75,
        image: "https://cdn.pixabay.com/photo/2018/03/05/16/18/sushi-3207102_960_720.jpg"
    },
    {
        name: "Ebi Nigiri",
        description: "Nigiri con gamberi cotti sopra.",
        ingredients: ["Riso", "Gamberi cotti"],
        category: "Nigiri",
        cooked: true,
        price: 3.75,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/nigiri-1234932_960_720.jpg"
    },
    {
        name: "Unagi Nigiri",
        description: "Nigiri con anguilla grigliata e salsa teriyaki sopra.",
        ingredients: ["Riso", "Anguilla grigliata", "Salsa Teriyaki"],
        category: "Nigiri",
        cooked: true,
        price: 4.25,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/sushi-1234931_960_720.jpg"
    },
    {
        name: "California Roll",
        description: "Uramaki con surimi, avocado e cetriolo.",
        ingredients: ["Riso", "Surimi", "Avocado", "Cetriolo", "Alga Nori"],
        category: "Maki",
        cooked: true,
        price: 4.50,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/sushi-1234936_960_720.jpg"
    },
    {
        name: "Spicy Tuna Roll",
        description: "Uramaki con tonno piccante, solitamente condito con salsa piccante e maionese.",
        ingredients: ["Riso", "Tonno", "Salsa piccante", "Maionese", "Alga Nori"],
        category: "Maki",
        cooked: false,
        price: 5.25,
        image: "https://cdn.pixabay.com/photo/2018/03/05/16/18/sushi-3207096_960_720.jpg"
    },
    {
        name: "Gunkan",
        description: "Una polpettina di riso avvolta da alga nori con vari ripieni come uova di pesce o insalate di pesce.",
        ingredients: ["Riso", "Alga Nori", "Ripieni vari"],
        category: "Gunkan",
        cooked: false,
        price: 3.25,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/gunkan-1234938_960_720.jpg"
    },
    {
        name: "Inari",
        description: "Sacchettini di tofu fritto ripieni di riso sushi.",
        ingredients: ["Riso", "Tofu fritto"],
        category: "Inari",
        cooked: true,
        price: 3.00,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/inari-1234937_960_720.jpg"
    },
    {
        name: "Tamagoyaki",
        description: "Omelette giapponese dolce servita sopra un nigiri di riso.",
        ingredients: ["Riso", "Uova", "Zucchero", "Salsa di soia"],
        category: "Nigiri",
        cooked: true,
        price: 3.00,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/tamagoyaki-1234939_960_720.jpg"
    },
    {
        name: "Rainbow Roll",
        description: "Uramaki con diversi tipi di pesce sopra, come salmone, tonno e avocado.",
        ingredients: ["Riso", "Pesce misto (salmone, tonno, ecc.)", "Avocado", "Alga Nori"],
        category: "Maki",
        cooked: false,
        price: 6.00,
        image: "https://cdn.pixabay.com/photo/2018/03/05/16/18/sushi-3207095_960_720.jpg"
    },
    {
        name: "Tempura Roll",
        description: "Uramaki con gamberi tempura e verdure croccanti.",
        ingredients: ["Riso", "Gamberi tempura", "Verdure", "Alga Nori"],
        category: "Maki",
        cooked: true,
        price: 5.50,
        image: "https://cdn.pixabay.com/photo/2017/06/10/07/12/sushi-2397525_960_720.jpg"
    },
    {
        name: "Oshi Sushi",
        description: "Sushi pressato, con il pesce e il riso compressi in una forma rettangolare.",
        ingredients: ["Riso", "Pesce (tonno, salmone)", "Salsa di soia"],
        category: "Oshi",
        cooked: false,
        price: 5.00,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/oshi-sushi-1234940_960_720.jpg"
    },
    {
        name: "Aburi Sushi",
        description: "Nigiri con pesce leggermente bruciato sopra.",
        ingredients: ["Riso", "Pesce (salmone, tonno)", "Salsa di soia"],
        category: "Nigiri",
        cooked: true,
        price: 4.00,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/01/aburi-sushi-1234941_960_720.jpg"
    }
  ];

  export const PRIMI_PIATTI = [
    {
        name: "Ramen",
        description: "Zuppa di noodles giapponesi in brodo, servita con carne, uova e verdure.",
        ingredients: ["Noodles", "Brodo", "Carne di maiale", "Uova", "Verdure"],
        category: "Zuppa",
        price: 8.50,
        image: "https://cdn.pixabay.com/photo/2017/11/07/19/53/ramen-2928259_960_720.jpg"
    },
    {
        name: "Udon",
        description: "Spessi noodles giapponesi di farina di grano serviti in brodo con varie guarnizioni.",
        ingredients: ["Udon noodles", "Brodo", "Verdure", "Tempura", "Tofu"],
        category: "Zuppa",
        price: 7.50,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/udon-1234946_960_720.jpg"
    },
    {
        name: "Soba",
        description: "Noodles sottili di grano saraceno, serviti caldi in brodo o freddi con salsa di soia.",
        ingredients: ["Soba noodles", "Brodo", "Salsa di soia", "Scalogno", "Nori"],
        category: "Piatto di noodles",
        price: 7.00,
        image: "https://cdn.pixabay.com/photo/2016/11/21/14/13/soba-1841296_960_720.jpg"
    },
    {
        name: "Donburi",
        description: "Ciotola di riso con vari condimenti come carne, pesce o tempura.",
        ingredients: ["Riso", "Carne di maiale", "Uova", "Verdure", "Salsa di soia"],
        category: "Ciotola di riso",
        price: 9.00,
        image: "https://cdn.pixabay.com/photo/2017/01/12/14/16/food-1970575_960_720.jpg"
    },
    {
        name: "Takikomi Gohan",
        description: "Riso cotto con verdure, funghi e carne, aromatizzato con salsa di soia e mirin.",
        ingredients: ["Riso", "Verdure", "Funghi", "Carne di pollo", "Salsa di soia", "Mirin"],
        category: "Riso aromatizzato",
        price: 8.00,
        image: "https://cdn.pixabay.com/photo/2018/11/10/01/48/takikomi-gohan-3805261_960_720.jpg"
    },
    {
        name: "Ochazuke",
        description: "Riso coperto con tè verde caldo e guarnito con vari ingredienti come pesce, alghe o umeboshi.",
        ingredients: ["Riso", "Tè verde", "Pesce", "Alghe", "Umeboshi"],
        category: "Riso",
        price: 6.50,
        image: "https://cdn.pixabay.com/photo/2020/11/14/07/35/rice-5740559_960_720.jpg"
    },
    {
        name: "Zosui",
        description: "Zuppa di riso giapponese, spesso preparata con riso avanzato e brodo dashi.",
        ingredients: ["Riso", "Brodo dashi", "Uova", "Verdure", "Scalogno"],
        category: "Zuppa di riso",
        price: 6.75,
        image: "https://cdn.pixabay.com/photo/2020/01/25/15/29/zosui-4792641_960_720.jpg"
    },
    {
        name: "Yakisoba",
        description: "Noodles saltati in padella con carne, verdure e salsa yakisoba.",
        ingredients: ["Noodles", "Carne di maiale", "Verdure", "Salsa yakisoba"],
        category: "Piatto di noodles",
        price: 7.25,
        image: "https://cdn.pixabay.com/photo/2017/06/15/12/14/noodles-2401831_960_720.jpg"
    },
    {
        name: "Oyakodon",
        description: "Ciotola di riso con pollo cotto e uova, il tutto condito con salsa di soia e mirin.",
        ingredients: ["Riso", "Pollo", "Uova", "Salsa di soia", "Mirin"],
        category: "Ciotola di riso",
        price: 7.75,
        image: "https://cdn.pixabay.com/photo/2020/01/19/01/16/oyakodon-4776173_960_720.jpg"
    },
    {
        name: "Katsu Curry",
        description: "Curry giapponese con riso e cotoletta di maiale impanata (tonkatsu).",
        ingredients: ["Riso", "Curry giapponese", "Tonkatsu", "Carote", "Patate"],
        category: "Curry",
        price: 9.50,
        image: "https://cdn.pixabay.com/photo/2021/03/06/14/58/curry-6074477_960_720.jpg"
    }
  ]