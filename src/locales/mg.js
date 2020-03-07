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
  registerLocale('mg', {
    d: '.',
    g: ',',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'NaN',
    np: '#,##0.###',
    cp: '¤ #,##0.00',
    ap: '¤#,##0.00',
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
      MXN: 'MX$',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: 'US$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤',
      MGA: 'Ar'
    },
    cn: {
      AED: 'Dirham',
      AOA: 'kwanza angoley',
      AUD: 'Dolara aostralianina',
      BHD: 'dinar bahreïni',
      BIF: 'Farantsa Borondi',
      BWP: 'Pola botsoaney',
      CAD: 'Dôlara Kanadianina',
      CDF: 'Farantsa kôngôley',
      CHF: 'Farantsa soisa',
      CNY: 'Yoan sinoa Renminbi',
      CVE: 'Escudo',
      DJF: 'Farantsa Djibotianina',
      DZD: 'Dinara alzerianina',
      EGP: 'vola venty ejipsiana',
      ERN: 'Nakfà Eritreanina',
      ETB: 'Bir etiopianina',
      EUR: 'Eoro',
      GBP: 'livre sterling',
      GMD: 'Dalasi gambianina',
      INR: 'Ropia Indianina',
      JPY: 'Yen Japoney',
      KES: 'Shilling kenianina',
      KMF: 'Farantsa Komorianina',
      LRD: 'Dôlara Liberianina',
      LSL: 'Loti',
      LYD: 'Dinara Libyanina',
      MAD: 'Dirham marokianina',
      MGA: 'Ariary',
      MRU: 'Ouguiya moritanianina',
      MUR: 'Ropia maorisianina',
      MWK: 'kwacha malawite',
      NAD: 'Dolara namibianina',
      NGN: 'Naira nigerianina',
      RWF: 'Farantsa Roande',
      SAR: 'Rial saodianina',
      SCR: 'Ropia Seysheloà',
      SDG: 'Dinara Sodaney',
      SHP: 'livre de Sainte-Hélène',
      SLL: 'Leone',
      SOS: 'Shilling somalianina',
      STN: 'Dobra',
      SZL: 'Lilangeni',
      TND: 'Dinar tonizianina',
      TZS: 'Shilling tanzanianina',
      UGX: 'Shilling ogandianina',
      USD: 'Dolara amerikanina',
      XAF: 'Farantsa CFA (BEAC)',
      XOF: 'Farantsa CFA (BCEAO)',
      ZAR: 'Rand afrikanina tatsimo',
      ZMW: 'Kwacha zambianina'
    }
  });
})();
