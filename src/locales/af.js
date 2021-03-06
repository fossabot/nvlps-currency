/* eslint-disable */

/**
 * nvlps-currency Currency Library for nvlps.io
 *
 * Copyright (c) 2020 Asymworks, LLC.
 *
 * The nvlps-currency library may be freely distributed under the terms of
 * the BSD license.  For all licensing information, details and documentation:
 * https://nvlps.io/nvlps-currency
 *
 * nvlps-currency contains currency and money handling routines for the
 * nvlps.io budgeting software package.  It includes currency information for
 * most world currencies as well as localized formatting, currency symbols, and
 * currency names.
 */
import { registerLocale } from '../locale';
(function() {
  registerLocale('af', {
    d: ',',
    g: ' ',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '¤#,##0.00',
    ap: '¤#,##0.00;(¤#,##0.00)',
    cs: {
      AUD: 'A$',
      BRL: 'R$',
      CAD: 'CA$',
      CNY: 'CN¥',
      EUR: '€',
      GBP: '£',
      HKD: 'HK$',
      ILS: '₪',
      INR: '₹',
      JPY: 'JP¥',
      KRW: '₩',
      MXN: 'MXN',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: 'US$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      THB: '฿',
      ZAR: 'R'
    },
    cn: {
      AED: 'Verenigde Arabiese Emirate-dirham',
      AFN: 'Afgaanse afgani',
      ALL: 'Albanese lek',
      AMD: 'Armeense dram',
      ANG: 'Nederlands-Antilliaanse gulde',
      AOA: 'Angolese kwanza',
      ARS: 'Argentynse peso',
      AUD: 'Australiese dollar',
      AWG: 'Arubaanse floryn',
      AZN: 'Azerbeidjaanse manat',
      BAM: 'Bosnies-Herzegowiniese omskakelbare marka',
      BBD: 'Barbados-dollar',
      BDT: 'Bangladesjiese taka',
      BGN: 'Bulgaarse lev',
      BHD: 'Bahreinse dinar',
      BIF: 'Burundiese frank',
      BMD: 'Bermuda-dollar',
      BND: 'Broeneise dollar',
      BOB: 'Boliviaanse boliviano',
      BRL: 'Brasilliaanse reaal',
      BSD: 'Bahamiaanse dollar',
      BTN: 'Bhoetanese ngoeltroem',
      BWP: 'Botswana-pula',
      BYN: 'Belarusiese roebel',
      BZD: 'Beliziese dollar',
      CAD: 'Kanadese dollar',
      CDF: 'Kongolese frank',
      CHF: 'Switserse frank',
      CLP: 'Chileense peso',
      CNY: 'Chinese joean',
      COP: 'Colombiaanse peso',
      CRC: 'Costa Ricaanse colón',
      CUC: 'Kubaanse omskakelbare peso',
      CUP: 'Kubaanse peso',
      CVE: 'Kaap Verdiese escudo',
      CZK: 'Tsjeggiese kroon',
      DJF: 'Djiboeti-frank',
      DKK: 'Deense kroon',
      DOP: 'Dominikaanse peso',
      DZD: 'Algeriese dinar',
      EGP: 'Egiptiese pond',
      ERN: 'Eritrese nakfa',
      ETB: 'Etiopiese birr',
      EUR: 'euro',
      FJD: 'Fidjiaanse dollar',
      FKP: 'Falkland-eilandse pond',
      GBP: 'Britse pond',
      GEL: 'Georgiese lari',
      GHS: 'Ghanese cedi',
      GIP: 'Gibraltarese pond',
      GMD: 'Gambiese dalasi',
      GNF: 'Guinese frank',
      GTQ: 'Guatemalaanse quetzal',
      GYD: 'Guyanese dollar',
      HKD: 'Hongkongse dollar',
      HNL: 'Hondurese lempira',
      HRK: 'Kroatiese kuna',
      HTG: 'Haïtiaanse gourde',
      HUF: 'Hongaarse florint',
      IDR: 'Indonesiese roepia',
      ILS: 'Israeliese nuwe sikkel',
      INR: 'Indiese roepee',
      IQD: 'Irakse dinar',
      IRR: 'Iranse rial',
      ISK: 'Yslandse kroon',
      JMD: 'Jamaikaanse dollar',
      JOD: 'Jordaniese dinar',
      JPY: 'Japannese jen',
      KES: 'Keniaanse sjieling',
      KGS: 'Kirgisiese som',
      KHR: 'Kambodjaanse riel',
      KMF: 'Comoraanse frank',
      KPW: 'Noord-Koreaanse won',
      KRW: 'Suid-Koreaanse won',
      KWD: 'Koeweitse dinar',
      KYD: 'Cayman-eilandse dollar',
      KZT: 'Kazakse tenge',
      LAK: 'Laosiaanse kip',
      LBP: 'Libanese pond',
      LKR: 'Sri Lankaanse roepee',
      LRD: 'Liberiese dollar',
      LSL: 'Lesotho loti',
      LYD: 'Libiese dinar',
      MAD: 'Marokkaanse dirham',
      MDL: 'Moldowiese leu',
      MGA: 'Malgassiese ariary',
      MKD: 'Macedoniese denar',
      MMK: 'Mianmese kyat',
      MNT: 'Mongoolse toegrik',
      MOP: 'Macaose pataca',
      MRU: 'Mauritaniese ouguiya',
      MUR: 'Mauritiaanse roepee',
      MVR: 'Malediviese rufia',
      MWK: 'Malawiese kwacha',
      MXN: 'Meksikaanse peso',
      MYR: 'Maleisiese ringgit',
      MZN: 'Mosambiekse metical',
      NAD: 'Namibiese dollar',
      NGN: 'Nigeriese naira',
      NIO: 'Nicaraguaanse córdoba',
      NOK: 'Noorse kroon',
      NPR: 'Nepalese roepee',
      NZD: 'Nieu-Seelandse dollar',
      OMR: 'Omaanse rial',
      PAB: 'Panamese balboa',
      PEN: 'Peruaanse sol',
      PGK: 'Papoea-Nieu-Guinese kina',
      PHP: 'Filippynse peso',
      PKR: 'Pakistanse roepee',
      PLN: 'Poolse zloty',
      PYG: 'Paraguaanse guarani',
      QAR: 'Katarrese rial',
      RON: 'Roemeense leu',
      RSD: 'Serwiese dinar',
      RUB: 'Russiese roebel',
      RWF: 'Rwandese frank',
      SAR: 'Saoedi-Arabiese riyal',
      SBD: 'Salomonseilandse dollar',
      SCR: 'Seychellese roepee',
      SDG: 'Soedannese pond',
      SEK: 'Sweedse kroon',
      SGD: 'Singapoer-dollar',
      SHP: 'Sint Helena-pond',
      SLL: 'Sierra Leoniese leone',
      SOS: 'Somaliese sjieling',
      SRD: 'Surinaamse dollar',
      STN: 'São Tomé en Príncipe-dobra',
      SYP: 'Siriese pond',
      SZL: 'Swazilandse lilangeni',
      THB: 'Thaise baht',
      TJS: 'Tadjikse somoni',
      TMT: 'Turkmeense manat',
      TND: 'Tunisiese dinar',
      TOP: 'Tongaanse pa’anga',
      TRY: 'Turkse lira',
      TTD: 'Trinidad en Tobago-dollar',
      TWD: 'Nuwe Taiwanese dollar',
      TZS: 'Tanzaniese sjieling',
      UAH: 'Oekraïnse hriwna',
      UGX: 'Ugandese sjieling',
      USD: 'VSA-dollar',
      UYU: 'Uruguaanse peso',
      UZS: 'Oezbekiese som',
      VND: 'Viëtnamese dong',
      VUV: 'Vanuatuse vatu',
      WST: 'Samoaanse tala',
      XAF: 'Sentraal Afrikaanse CFA-frank',
      XCD: 'Oos-Karibiese dollar',
      XOF: 'Wes-Afrikaanse CFA-frank',
      XPF: 'CFP-frank',
      XXX: 'onbekende geldeenheid',
      YER: 'Jemenitiese rial',
      ZAR: 'Suid-Afrikaanse rand',
      ZMW: 'Zambiese kwacha'
    }
  });

  registerLocale('af_NA', {
    cs: {
      NAD: '$'
    }
  });
})();
