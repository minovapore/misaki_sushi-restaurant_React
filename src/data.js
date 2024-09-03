  //SUSHI MENU
  import californiaRoll from './assets/sushi-img/california-roll.png';
  import ebiNigiri from './assets/sushi-img/ebi-nigiri.jpg';
  import gamberoTempura from './assets/sushi-img/gambero-tempura.jpg';
  import gunkanSalmone from './assets/sushi-img/gunkan-salmone.png';
  import gunkanTonno from './assets/sushi-img/gunkan-tonno.png';
  import hosomakeSalmone from './assets/sushi-img/hosomake-salmone.jpg';
  import hosomakeTonno from './assets/sushi-img/hosomaki-tonno.jpg';
  import nigiriSalmone from './assets/sushi-img/nigiri-salmone.jpg';
  import nigiriTonno from './assets/sushi-img/nigiri-tonno.jpg';
  import uraPhiladelphia from './assets/sushi-img/phil-roll.png';
  import polloFritto from './assets/sushi-img/pollo-fritto.jpg';
  import rainbowRoll from './assets/sushi-img/rainbow-roll.png';
  import salmonePiastrato from './assets/sushi-img/salmone-alla-piastra.jpg';
  import sashimi from './assets/sushi-img/sashimi.png';
  import spicyTunaRoll from './assets/sushi-img/spicy-tuna-roll.png';
  import temakiTonno from './assets/sushi-img/temaki-tonno.png';
  import temaki from './assets/sushi-img/temaki.png';
  import unagiNigiri from './assets/sushi-img/unagi-nigiri.jpg';
  import uramaki from './assets/sushi-img/uramaki.png';
  import nigiriBranzino from './assets/sushi-img/nigiri-branzino.jpg';
  import futomakiMisto from './assets/sushi-img/futomaki-misto.jpg';

    export const SUSHI_TYPES = [
    {
        id: 1,
        name: "Nigiri Salmone",
        description: "Una pallina di riso con una fetta di salmone crudo sopra.",
        ingredients: ["Riso, ", "Salmone"],
        category: "Nigiri",
        cooked: false,
        price: "3.50",
        image: nigiriSalmone
    },
    {
        id:2,
        name: "Nigiri Tonno",
        description: "Una pallina di riso con una fetta di tonno crudo sopra.",
        ingredients: ["Riso, ", "Tonno"],
        category: "Nigiri",
        cooked: false,
        price: "3.50",
        image: nigiriTonno
    },
    {
        id:3,
        name: "Nigiri Branzino",
        description: "Una pallina di riso con una fetta di branzino crudo sopra.",
        ingredients: ["Riso, ", "Branzino"],
        category: "Nigiri",
        cooked: true,
        price: "3.50",
        image: nigiriBranzino
    },
    {
        id:4,
        name: "Ebi Nigiri",
        description: "Nigiri con gamberi cotti sopra.",
        ingredients: ["Riso, ", "Gamberi cotti"],
        category: "Nigiri",
        cooked: true,
        price: "3.75",
        image: ebiNigiri
    },
    {
        id:5,
        name: "Unagi Nigiri",
        description: "Nigiri con anguilla grigliata e salsa teriyaki sopra.",
        ingredients: ["Riso, ", "Anguilla grigliata, ", "Salsa Teriyaki"],
        category: "Nigiri",
        cooked: true,
        price: "4.25",
        image: unagiNigiri
    },
    {
        id:6,
        name: "Gunkan Salmone",
        description: "Una polpettina di riso avvolta da alga nori con sopra tartare di salmone.",
        ingredients: ["Riso, ", "Salmone, ", "Alga nori, ", "Sesamo"],
        category: "Gunkan",
        cooked: false,
        price: "3.25",
        image: gunkanSalmone
    },
    {
        id:7,
        name: "Gunkan Tonno",
        description: "Una polpettina di riso avvolta da alga nori con sopra tartare di tonno.",
        ingredients: ["Riso, ", "Tonno, ", "Alga nori, ", "Sesamo"],
        category: "Gunkan",
        cooked: false,
        price: "3.25",
        image: gunkanTonno
    },
    {
        id:8,
        name: "Hosomaki Salmone",
        description: "Rotolini di riso e salmone avvolti in alga nori.",
        ingredients: ["Riso, ", "Salmone, ", "Alga Nori"],
        category: "Maki",
        cooked: false,
        price: "4.00",
        image: hosomakeSalmone
    },
    {
        id:9,
        name: "Hosomaki Tonno",
        description: "Rotolini di riso e tonno avvolti in alga nori.",
        ingredients: ["Riso, ", "Tonno, ", "Alga Nori"],
        category: "Maki",
        cooked: false,
        price: "4.00",
        image: hosomakeTonno
    },
    {
        id:10,
        name: "Futomaki misto",
        description: "Rotolini di sushi più spessi, spesso con più ripieni rispetto ai normali maki.",
        ingredients: ["Riso, ", "Salmone, ", "Alga Nori, ", "Gambero fritto, ", "Teriyaki, ", "Surimi, ", "Avocado"],
        category: "Maki",
        cooked: false,
        price: "4.75",
        image: futomakiMisto
    },
    {
        id:11,
        name: "Uramaki",
        description: "Un tipo di maki con il riso all'esterno, con all'interno alga nori, gambero fritto e maionese, avvolti da una fetta di salmone crudo sopra.",
        ingredients: ["Riso, ", "Gambero fritto, ", "Alga Nori, ", "Sesamo, ", "Maionese, ", "salsa teriyaki"],
        category: "Maki",
        cooked: false,
        price: "4.50",
        image: uramaki
    },
    {
        id:12,
        name: "California Roll",
        description: "Uramaki con surimi di granchio, avocado e maionese.",
        ingredients: ["Riso, ", "Surimi di granchio, ", "Avocado, ", "Maionese, ", "Alga Nori, ", "Sesamo"],
        category: "Maki",
        cooked: true,
        price: "4.50",
        image: californiaRoll
    },
    {
        id:13,
        name: "Spicy Tuna Roll",
        description: "Uramaki con tonno piccante, solitamente condito con salsa piccante e maionese.",
        ingredients: ["Riso, ", "Tonno, ", "Salsa piccante, ", "Maionese, ", "Alga Nori, ", "Sesamo"],
        category: "Maki",
        cooked: false,
        price: "5.25",
        image: spicyTunaRoll
    },
    {
        id:14,
        name: "Rainbow Roll",
        description: "Uramaki con diversi tipi di pesce sopra, come salmone, tonno e avocado.",
        ingredients: ["Riso, ", "Pesce misto (salmone, tonno, ecc.), ", "Avocado, ", "Alga Nori"],
        category: "Maki",
        cooked: false,
        price: "6.00",
        image: rainbowRoll
    },
    {   
        id:15,
        name: "Philadelphia Roll",
        description: "Uramaki con all'inerno salmone e avocado, con sopra philadelphia.",
        ingredients: ["Riso, ", "Salmone, ", "Avocado, ", "Philadelphia, ", "Sesamo"],
        category: "Onigiri",
        cooked: false,
        price: "4.50",
        image: uraPhiladelphia
    },
    {
        id:16,
        name: "Temaki Salmone",
        description: "Un cono di alga nori ripieno di riso, salmone e avocado.",
        ingredients: ["Riso, ", "Salmone, ", "Avocado, ", "Alga Nori"],
        category: "Temaki",
        cooked: false,
        price: "3.00",
        image: temaki
    },
    {
        id:17,
        name: "Temaki tonno",
        description: "Un cono di alga nori ripieno di riso, tonno e avocado.",
        ingredients: ["Riso, ", "Tonno, ", "Avocado, ", "Alga Nori"],
        category: "temaki",
        cooked: true,
        price: "4.00",
        image: temakiTonno
    },
    {
        id:18,
        name: "Sashimi",
        description: "Fette di pesce crudo misto.",
        ingredients: ["Salmone, ", "Tonno, ",  "Branzino, ", "Gambero rosso"],
        category: "Sashimi",
        cooked: false,
        price: "5.00",
        image: sashimi
    },
    {
        id:19,
        name: "Salmone alla piastra",
        description: "Salmone cotto sulla piastra.",
        ingredients: ["Salmone, ", "Salsa teriyaki"],
        category: "Salmone",
        cooked: true,
        price: "3.00",
        image: salmonePiastrato
    },
    {
        id:20,
        name: "Pollo Fritto",
        description: "Pollo fritto.",
        ingredients: ["Pollo"],
        category: "Agemono",
        cooked: true,
        price: "5.50",
        image: polloFritto
    },
    {
        id:21,
        name: "Tempura di gamberi",
        description: "Gamberi in tempura",
        ingredients: ["Gambero"],
        category: "Agemono",
        cooked: false,
        price: "5.00",
        image: gamberoTempura
    },
  ];

  //PRIMI PIATTI
  import donburi from './assets/primi-img/donburi.png';
  import ochazuke from './assets/primi-img/Ochazuke.png';
  import oyakodon from './assets/primi-img/Oyakodon.png';
  import poke from './assets/primi-img/poke.png';
  import ramen from './assets/primi-img/ramen.png';
  import takikomiGohan from './assets/primi-img/Takikomi Gohan.png';
  import udon from './assets/primi-img/udon.png';
  import yakisoba from './assets/primi-img/Yakisoba.png';
  import zosui from './assets/primi-img/Zosui.png';

  export const PRIMI_PIATTI = [
    {
        id:22,
        name: "Ramen",
        description: "Zuppa di noodles giapponesi in brodo, servita con carne, uova e verdure.",
        ingredients: ["Noodles, ", "Brodo, ", "Carne di maiale, ", "Uova, ", "Verdure"],
        category: "Zuppa",
        price: "8.50",
        image: ramen
    },
    {
        id:23,
        name: "Udon",
        description: "Spessi noodles giapponesi di farina di grano serviti in brodo con varie guarnizioni.",
        ingredients: ["Udon noodles, ", "Brodo, ", "Verdure, ", "Tempura, ", "Tofu"],
        category: "Zuppa",
        price: "7.50",
        image: udon
    },
    {
        id:24,
        name: "Donburi",
        description: "Ciotola di riso con vari condimenti come carne, uova e verdura.",
        ingredients: ["Riso, ", "Carne di pollo, ", "Uova, ", "Verdure, ", "Salsa di soia"],
        category: "Ciotola di riso",
        price: "9.00",
        image: donburi
    },
    {
        id:25,
        name: "Takikomi Gohan",
        description: "Riso cotto con verdure, funghi e carne, aromatizzato con salsa di soia e mirin.",
        ingredients: ["Riso, ", "Verdure, ", "Funghi, ", "Carne di pollo, ", "Salsa di soia, ", "Mirin"],
        category: "Riso aromatizzato",
        price: "8.00",
        image: takikomiGohan
    },
    {
        id:26,
        name: "Ochazuke",
        description: "Riso coperto con tè verde caldo e guarnito con vari ingredienti come pesce, alghe o umeboshi.",
        ingredients: ["Riso, ", "Tè verde, ", "Pesce, ", "Alghe, ", "Umeboshi"],
        category: "Riso",
        price: "6.50",
        image: ochazuke
    },
    {
        id:27,
        name: "Zosui",
        description: "Zuppa di riso giapponese, spesso preparata con riso avanzato e brodo dashi.",
        ingredients: ["Riso, ", "Brodo dashi, ", "Uova, ", "Verdure, ", "Scalogno"],
        category: "Zuppa di riso",
        price: "6.75",
        image: zosui
    },
    {
        id:28,
        name: "Yakisoba",
        description: "Noodles saltati in padella con carne, verdure e salsa yakisoba.",
        ingredients: ["Noodles, ", "Carne di pollo, ", "Verdure, ", "Salsa yakisoba"],
        category: "Piatto di noodles",
        price: "7.25",
        image: yakisoba
    },
    {
        id:29,
        name: "Oyakodon",
        description: "Ciotola di riso con pollo cotto e uova, il tutto condito con salsa di soia e mirin",
        ingredients: ["Riso, ", "Pollo, ", "Uova, ", "Salsa di soia, ", "Mirin"],
        category: "Ciotola di riso",
        price: "7.75",
        image: oyakodon
    },
    {
        id:30,
        name: "Poke",
        description: "Ciotola colorata e salutare, composta da pesce crudo marinato, riso, verdure fresche, frutta e salse esotiche.",
        ingredients: ["Riso, ", "Salmone crudo, ", "Avocado, ", "Alga, ", "Wakame, ", "Edamame"],
        category: "Poke",
        price: "10.00",
        image: poke
    },
  ];

  //SECONDI PIATTI
  import gamberiSalsaAgrodolce from './assets/secondi-img/gamberi-con-salsaagrodolce.jpg';
  import gamberiVerdure from './assets/secondi-img/gamberi-con-verdure.png';
  import gamberi from './assets/secondi-img/gamberi.jpg';
  import manzoPatate from './assets/secondi-img/manzo-con-patate.png';
  import manzoPiccante from './assets/secondi-img/manzo-piccante.jpg';
  import manzoZenzeroCipollotto from './assets/secondi-img/manzo-zenzero-e-cipollotto.jpg';
  import polloMandorle from './assets/secondi-img/pollo-alle-mandorle.jpg';
  import polloBambuFunghi from './assets/secondi-img/pollo-bambù-e-funghi.jpg';
  import polloCurry from './assets/secondi-img/pollo-curry.jpg';

  export const SECONDI_PIATTI = [
    {
        id:31,
        name: "Gamberi",
        description: "Gamberi fritti e saltati con pepe nero di sichuan e peperoni",
        ingredients: ["Gamberi, ", "Pepe nero, ", "Peperoni"],
        category: "Gamberi",
        price: "7.00",
        image: gamberi
    },
    {
        id:32,
        name: "Gamberi in salsa agrodolce",
        description: "Gamberi con piselli, peperoni e ananas",
        ingredients: ["Gamberi, ", "Ananas, ", "Peperoni", "Piselli"],
        category: "Gamberi",
        price: "7.00",
        image: gamberiSalsaAgrodolce
    },
    {
        id:33,
        name: "Gamberi con verdure",
        description: "Gamberi saltati con verdure miste",
        ingredients: ["Gamberi, ", "Verdure miste "],
        category: "Gamberi",
        price: "7.00",
        image: gamberiVerdure
    },
    {
        id:34,
        name: "Manzo con patate",
        description: "Manzo saltato con patate",
        ingredients: ["Carne di manzo, ", "Patate"],
        category: "Carne di manzo",
        price: "7.00",
        image: manzoPatate
    },
    {
        id:34,
        name: "Manzo piccante",
        description: "Manzo saltato con verdure",
        ingredients: ["Carne di manzo, ", "Verdure, ", "Peperoncino"],
        category: "Carne di manzo",
        price: "7.00",
        image: manzoPiccante
    },
    {
        id:35,
        name: "Manzo con zenzero e cipollotto",
        description: "Manzo saltato con zenzero e cipollotto",
        ingredients: ["Carne di manzo, ", "Zenzero, ", "Cipolotto"],
        category: "Carne di manzo",
        price: "7.00",
        image: manzoZenzeroCipollotto
    },
    {
        id:36,
        name: "Pollo con mandorle",
        description: "Petto di pollo, mandorle e bambù",
        ingredients: ["Carne di pollo, ", "Mandorle, ", "Bambù"],
        category: "Carne di pollo",
        price: "6.50",
        image: polloMandorle
    },
    {
        id:37,
        name: " Pollo con bambù e funghi",
        description: "Petto di pollo saltato con funghi e bambù",
        ingredients: ["Carne di pollo, ", "Funghi, ", "Bambù"],
        category: "Carne di pollo",
        price: "6.50",
        image: polloBambuFunghi
    },
    {
        id:38,
        name: " Pollo al curry",
        description: "Petto di pollo saltato in salsa al curry",
        ingredients: ["Carne di pollo, ", "Curry"],
        category: "Carne di pollo",
        price: "6.50",
        image: polloCurry
    },
  ];

  //DOLCI
  import animitsu from './assets/dolci-img/anmitsu.png';
  import daifuku from './assets/dolci-img/Daifuku.png';
  import dango from './assets/dolci-img/dango.png';
  import dorayaki from './assets/dolci-img/dorayaki.png';
  import kasutera from './assets/dolci-img/Kasutera.png';
  import manju from './assets/dolci-img/manju.png';
  import mochi from './assets/dolci-img/mochi.png';
  import monaka from './assets/dolci-img/Monaka.png';
  import sakuraMochi from './assets/dolci-img/Sakura Mochi.png';
  import taiyaki from './assets/dolci-img/taiyaki.png';
  import warabiMochi from './assets/dolci-img/Warabi Mochi.png';
  import yokan from './assets/dolci-img/yokan.png';

  export const DOLCI = [
    {
        id:39,
        nome: "Mochi",
        descrizione: "Dolcetto di riso glutinoso ripieno di marmellata di fagioli rossi o altri ripieni dolci.",
        ingredienti: ["farina di riso glutinoso, ", "zucchero, ", "acqua, ", "marmellata di fagioli rossi"],
        prezzo: "3.50€",
        immagine: mochi
      },
      {
        id:40,
        nome: "Dorayaki",
        descrizione: "Dolce tradizionale giapponese composto da due pancake soffici con ripieno di marmellata di fagioli rossi.",
        ingredienti: ["farina, ", "uova, ", "zucchero, ", "miele, ", "marmellata di fagioli rossi"],
        prezzo: "4.00€",
        immagine: dorayaki
      },
      {
        id:41,
        nome: "Daifuku",
        descrizione: "Mochi ripieno di pasta di fagioli rossi e fragola, spesso con una consistenza morbida e elastica.",
        ingredienti: ["farina di riso glutinoso, ", "zucchero, ", "acqua, ", "pasta di fagioli rossi, ", "fragole"],
        prezzo: "3.80€",
        immagine: daifuku
      },
      {
        id:42,
        nome: "Taiyaki",
        descrizione: "Dolce a forma di pesce ripieno di marmellata di fagioli rossi, crema pasticcera o cioccolato.",
        ingredienti: ["farina, ", "uova, ", "zucchero, ", "latte, ", "marmellata di fagioli rossi"],
        prezzo: "3.50€",
        immagine: taiyaki
      },
      {
        id:43,
        nome: "Yokan",
        descrizione: "Gelatina dolce di pasta di fagioli rossi, zucchero e agar-agar, spesso servita in blocchi rettangolari.",
        ingredienti: ["pasta di fagioli rossi, ", "zucchero, ", "agar-agar, ", "acqua"],
        prezzo: "5.00€",
        immagine: yokan
      },
      {
        id:44,
        nome: "Anmitsu",
        descrizione: "Dessert rinfrescante composto da gelatina agar, frutta fresca, anko (pasta di fagioli rossi) e sciroppo dolce.",
        ingredienti: ["agar-agar, ", "frutta fresca, ", "anko, ", "sciroppo di zucchero"],
        prezzo: "6.50€",
        immagine: animitsu
      },
      {
        id:45,
        nome: "Kasutera",
        descrizione: "Pan di Spagna soffice e dolce, introdotto in Giappone dai portoghesi nel XVI secolo.",
        ingredienti: ["farina, ", "uova, ", "zucchero, ", "miele"],
        prezzo: "4.50€",
        immagine: kasutera
      },
      {
        id:46,
        nome: "Manju",
        descrizione: "Dolce al vapore ripieno di pasta di fagioli rossi, disponibile in varie forme e sapori.",
        ingredienti: ["farina, ", "zucchero, ", "pasta di fagioli rossi, ", "lievito"],
        prezzo: "3.20€",
        immagine: manju
      },
      {
        id:47,
        nome: "Warabi Mochi",
        descrizione: "Dolce gelatinoso a base di farina di warabi (felce) e coperto con kinako (farina di soia tostata) e zucchero.",
        ingredienti: ["farina di warabi, ", "zucchero, ", "acqua, ", "kinako"],
        prezzo: "3.00€",
        immagine: warabiMochi
      },
      {
        id:48,
        nome: "Monaka",
        descrizione: "Dolce composto da due cialde croccanti ripiene di pasta di fagioli rossi o gelato.",
        ingredienti: ["farina di riso, ", "zucchero, ", "pasta di fagioli rossi, ", "gelato"],
        prezzo: "4.00€",
        immagine: monaka
      },
      {
        id:49,
        nome: "Sakura Mochi",
        descrizione: "Dolce a base di riso glutinoso rosa, ripieno di pasta di fagioli rossi e avvolto in una foglia di ciliegio salata.",
        ingredienti: ["farina di riso glutinoso, ", "zucchero, ", "pasta di fagioli rossi, ", "foglia di ciliegio"],
        prezzo: "3.80€",
        immagine: sakuraMochi
      },
      {
        id:50,
        nome: "Dango",
        descrizione: "Spiedini di palline di farina di riso glutinoso, spesso serviti con salsa dolce di soia.",
        ingredienti: ["farina di riso glutinoso, ", "acqua, ", "salsa di soia dolce"],
        prezzo: "3.00€",
        immagine: dango
      }
    ];

    import acquaFrizzante from './assets/bevande/acqua-frizzante.png';
    import acquaNaturale from './assets/bevande/acqua-naturale.png';
    import amarone from './assets/bevande/amarone.png';
    import asahi from './assets/bevande/asahi.png';
    import champagneBlanc from './assets/bevande/champagne-blanc-de-blanc.png';
    import champagneCuvèe from './assets/bevande/champagne-cuvèe.png';
    import champagneVintage from './assets/bevande/champagne-vintage.png';
    import cocacola from './assets/bevande/cocacola.png';
    import cocazero from './assets/bevande/cocazero.png';
    import estatheLimone from './assets/bevande/estathe-limone.png';
    import estathePesca from './assets/bevande/estathe-pesca.png';
    import fanta from './assets/bevande/fanta.png';
    import heineken from './assets/bevande/heineken.png';
    import kirin from './assets/bevande/kirin.png';
    import langheAreneis from './assets/bevande/langhe-arneis.png';
    import moretti from './assets/bevande/moretti.png';
    import pinotGrigio from './assets/bevande/pinot-grigio.png';
    import selvaLugana from './assets/bevande/selva-lugana.png';
    import valpolicella from './assets/bevande/valpolicella.png';

    export const BEVANDE = [
      {
          id:51,
          nome: "Acqua naturale",
          prezzo: "1.50€",
          immagine: acquaNaturale
        },
        {
          id:52,
          nome: "Acqua frizzante",
          prezzo: "1.50€",
          immagine: acquaFrizzante
        },
        {
          id:53,
          nome: "Coca Cola",
          prezzo: "3.00€",
          immagine: cocacola
        },
        {
          id:54,
          nome: "Coca Zero",
          prezzo: "3.00€",
          immagine: cocazero
        },
        {
          id:55,
          nome: "Estathè al limone",
          prezzo: "3.00€",
          immagine: estatheLimone
        },
        {
          id:56,
          nome: "Estathè alla pesca",
          prezzo: "3.00€",
          immagine: estathePesca
        },
        {
          id:56,
          nome: "Fanta",
          prezzo: "3.00€",
          immagine: fanta
        },
      ];
      export const BIRRE = [
        {
          id:57,
          nome: "Asahi",
          prezzo: "5.50€",
          immagine: asahi
        },
        {
          id:56,
          nome: "Heineken",
          prezzo: "5.50€",
          immagine: heineken
        },
        {
          id:57,
          nome: "Kirin",
          prezzo: "5.50€",
          immagine: kirin
        },
        {
          id:58,
          nome: "Moretti",
          prezzo: "5.50€",
          immagine: moretti
        },
      ];

      export const VINI_BIANCHI = [
        // vini bianchi
        {
          id:58,
          nome: "Selva Lugana DOC",
          descrizione: "Lombardia | (Selva Capuzza) - Vino bianco",
          prezzo: "19.00€",
          immagine: selvaLugana
        },
        {
          id:59,
          nome: "Pinot Grigio",
          descrizione: "Trentino Alto Adige | (Lavis) - Vino bianco",
          prezzo: "22.00€",
          immagine: pinotGrigio
        },
        {
          id:59,
          nome: "Langhe Arneis DOC Blangè",
          descrizione: "Langhe doc Arneis Blangè - Vino bianco",
          prezzo: "35.00€",
          immagine: langheAreneis
        },
      ];

      export const VINI_ROSSI = [
        //vini rossi
        {
          id:60,
          nome: "Valpolicella Classico SUP",
          descrizione: "Il Valpolicella DOC Classico Superiore Collezione - Vino rosso",
          prezzo: "20.00€",
          immagine: valpolicella
        },
        {
          id:61,
          nome: "Amarone",
          descrizione: "L’AmaronedellaValpolicellaDOCG Classico - Vino rosso",
          prezzo: "50.00€",
          immagine: amarone
        },
      ];

      export const CHAMPAGNE = [
        //champagne
        {
          id:62,
          nome: "Champagne Vintage Brut",
          descrizione: "Francia | (Dom Perignon)",
          prezzo: "360.00€",
          immagine: champagneVintage
        },
        {
          id:63,
          nome: "Champagne Cuvèe",
          descrizione: "Francia | (Dom Perignon)",
          prezzo: "80.00€",
          immagine: champagneCuvèe
        },
        {
          id:64,
          nome: "Champagne Blanc De Blanc",
          descrizione: "Francia | (Dom Perignon)",
          prezzo: "60.00€",
          immagine: champagneBlanc
        },
    ]