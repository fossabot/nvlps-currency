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
  registerLocale('sl', {
    d: ',',
    g: '.',
    p: '+',
    m: '−',
    pc: '%',
    pm: '‰',
    e: 'e',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
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
      JPY: '¥',
      KRW: '₩',
      MXN: 'MX$',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: '$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤'
    },
    cn: {
      AED: 'dirham Združenih arabskih emiratov',
      AFN: 'afgani',
      ALL: 'albanski lek',
      AMD: 'armenski dram',
      ANG: 'nizozemsko-antilski gulden',
      AOA: 'angolska kvanza',
      ARS: 'argentinski peso',
      AUD: 'avstralski dolar',
      AWG: 'arubski florin',
      AZN: 'azerbajdžanski manat',
      BAM: 'bosansko-hercegovska konvertibilna marka',
      BBD: 'barbadoški dolar',
      BDT: 'bangladeška taka',
      BGN: 'bolgarski lev',
      BHD: 'bahranski dinar',
      BIF: 'burundski frank',
      BMD: 'bermudski dolar',
      BND: 'brunejski dolar',
      BOB: 'bolivijski boliviano',
      BRL: 'brazilski real',
      BSD: 'bahamski dolar',
      BTN: 'butanski ngultrum',
      BWP: 'bocvanska pula',
      BYN: 'beloruski rubelj',
      BZD: 'belizejski dolar',
      CAD: 'kanadski dolar',
      CDF: 'kongoški frank',
      CHF: 'švicarski frank',
      CLP: 'čilski peso',
      CNY: 'kitajski juan',
      COP: 'kolumbijski peso',
      CRC: 'kostariški kolon',
      CUC: 'kubanski konvertibilni peso',
      CUP: 'kubanski peso',
      CVE: 'zelenortski eskudo',
      CZK: 'češka krona',
      DJF: 'džibutski frank',
      DKK: 'danska krona',
      DOP: 'dominikanski peso',
      DZD: 'alžirski dinar',
      EGP: 'egiptovski funt',
      ERN: 'eritrejska nakfa',
      ETB: 'etiopski bir',
      EUR: 'evro',
      FJD: 'fidžijski dolar',
      FKP: 'falklandski funt',
      GBP: 'britanski funt',
      GEL: 'gruzijski lari',
      GHS: 'ganski cedi',
      GIP: 'gibraltarski funt',
      GMD: 'gambijski dalasi',
      GNF: 'gvinejski frank',
      GTQ: 'gvatemalski kecal',
      GYD: 'gvajanski dolar',
      HKD: 'hongkonški dolar',
      HNL: 'honduraška lempira',
      HRK: 'hrvaška kuna',
      HTG: 'haitski gurd',
      HUF: 'madžarski forint',
      IDR: 'indonezijska rupija',
      ILS: 'izraelski šekel',
      INR: 'indijska rupija',
      IQD: 'iraški dinar',
      IRR: 'iranski rial',
      ISK: 'islandska krona',
      JMD: 'jamajški dolar',
      JOD: 'jordanski dinar',
      JPY: 'japonski jen',
      KES: 'kenijski šiling',
      KGS: 'kirgiški som',
      KHR: 'kamboški riel',
      KMF: 'komorski frank',
      KPW: 'severnokorejski von',
      KRW: 'južnokorejski von',
      KWD: 'kuvajtski dinar',
      KYD: 'kajmanski dolar',
      KZT: 'kazahstanski tenge',
      LAK: 'laoški kip',
      LBP: 'libanonski funt',
      LKR: 'šrilanška rupija',
      LRD: 'liberijski dolar',
      LSL: 'lesoški loti',
      LYD: 'libijski dinar',
      MAD: 'maroški dirham',
      MDL: 'moldavijski leu',
      MGA: 'malgaški ariarij',
      MKD: 'makedonski denar',
      MMK: 'mjanmarski kjat',
      MNT: 'mongolski tugrik',
      MOP: 'makavska pataka',
      MRU: 'mavretanska uguija',
      MUR: 'mavricijska rupija',
      MVR: 'maldivska rufija',
      MWK: 'malavijska kvača',
      MXN: 'mehiški peso',
      MYR: 'malezijski ringit',
      MZN: 'mozambiški metikal',
      NAD: 'namibijski dolar',
      NGN: 'nigerijska naira',
      NIO: 'nikaraška zlata kordova',
      NOK: 'norveška krona',
      NPR: 'nepalska rupija',
      NZD: 'novozelandski dolar',
      OMR: 'omanski rial',
      PAB: 'panamska balboa',
      PEN: 'perujski sol',
      PGK: 'kina Papue Nove Gvineje',
      PHP: 'filipinski peso',
      PKR: 'pakistanska rupija',
      PLN: 'poljski novi zlot',
      PYG: 'paragvajski gvarani',
      QAR: 'katarski rial',
      RON: 'romunski leu',
      RSD: 'srbski dinar',
      RUB: 'ruski rubelj',
      RWF: 'ruandski frank',
      SAR: 'saudski rial',
      SBD: 'solomonski dolar',
      SCR: 'sejšelska rupija',
      SDG: 'sudanski funt',
      SEK: 'švedska krona',
      SGD: 'singapurski dolar',
      SHP: 'funt Sv. Helene',
      SLL: 'sieraleonski leone',
      SOS: 'somalski šiling',
      SRD: 'surinamski dolar',
      STN: 'saotomejska dobra',
      SVC: 'salvadorski kolon',
      SYP: 'sirijski funt',
      SZL: 'svazijski lilangeni',
      THB: 'tajski baht',
      TJS: 'tadžikistanski somoni',
      TMT: 'turkmenistanski novi manat',
      TND: 'tunizijski dinar',
      TOP: 'tongovska paanga',
      TRY: 'nova turška lira',
      TTD: 'dolar Trinidada in Tobaga',
      TWD: 'novi tajvanski dolar',
      TZS: 'tanzanijski šiling',
      UAH: 'ukrajinska grivna',
      UGX: 'ugandski šiling',
      USD: 'ameriški dolar',
      UYU: 'urugvajski peso',
      UZS: 'uzbeški sum',
      VND: 'vientnamski dong',
      VUV: 'vanuatujski vatu',
      WST: 'samoanska tala',
      XAF: 'CFA frank BEAC',
      XCD: 'vzhodnokaribski dolar',
      XDR: 'posebne pravice črpanja',
      XOF: 'zahodnoafriški frank CFA',
      XPF: 'CFP frank',
      XXX: 'neznana valuta',
      YER: 'jemenski rial',
      ZAR: 'južnoafriški rand',
      ZMW: 'zambijska kvača'
    }
  });

  registerLocale('sl_SI', {});
})();
