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
  registerLocale('kea', {
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
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤;(#,##0.00 ¤)',
    cs: {
      AUD: 'AU$',
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
      AED: 'AED',
      AFN: 'AFN',
      ALL: 'ALL',
      AMD: 'AMD',
      ANG: 'ANG',
      AOA: 'AOA',
      AWG: 'AWG',
      AZN: 'AZN',
      BAM: 'BAM',
      BGN: 'BGN',
      BHD: 'BHD',
      BIF: 'BIF',
      BOB: 'BOB',
      BTN: 'BTN',
      BWP: 'BWP',
      CDF: 'CDF',
      CHF: 'CHF',
      CVE: '​',
      CZK: 'CZK',
      DJF: 'DJF',
      DKK: 'DKK',
      DZD: 'DZD',
      EGP: 'EGP',
      ERN: 'ERN',
      ETB: 'ETB',
      FKP: 'FKP',
      GEL: 'GEL',
      GMD: 'GMD',
      GNF: 'GNF',
      GTQ: 'GTQ',
      HNL: 'HNL',
      HRK: 'HRK',
      HTG: 'HTG',
      HUF: 'HUF',
      IDR: 'IDR',
      IQD: 'IQD',
      IRR: 'IRR',
      ISK: 'ISK',
      JOD: 'JOD',
      KES: 'KES',
      KGS: 'KGS',
      KMF: 'KMF',
      KPW: 'KPW',
      KWD: 'KWD',
      LBP: 'LBP',
      LKR: 'LKR',
      LYD: 'LYD',
      MAD: 'MAD',
      MDL: 'MDL',
      MGA: 'MGA',
      MKD: 'MKD',
      MMK: 'MMK',
      MOP: 'MOP',
      MUR: 'MUR',
      MVR: 'MVR',
      MWK: 'MWK',
      MYR: 'MYR',
      MZN: 'MZN',
      NIO: 'NIO',
      NOK: 'NOK',
      NPR: 'NPR',
      OMR: 'OMR',
      PAB: 'PAB',
      PEN: 'PEN',
      PGK: 'PGK',
      PKR: 'PKR',
      PLN: 'PLN',
      QAR: 'QAR',
      RSD: 'RSD',
      RWF: 'RWF',
      SAR: 'SAR',
      SCR: 'SCR',
      SDG: 'SDG',
      SEK: 'SEK',
      SHP: 'SHP',
      SLL: 'SLL',
      SOS: 'SOS',
      SYP: 'SYP',
      SZL: 'SZL',
      THB: '฿',
      TJS: 'TJS',
      TMT: 'TMT',
      TND: 'TND',
      TOP: 'TOP',
      TZS: 'TZS',
      UGX: 'UGX',
      UZS: 'UZS',
      VUV: 'VUV',
      WST: 'WST',
      YER: 'YER',
      ZAR: 'ZAR',
      ZMW: 'ZMW'
    },
    cn: {
      AED: 'Diren di Emiradus Arabi Unidu',
      AOA: 'Kuanza',
      AUD: 'Dola australianu',
      BHD: 'Dinar di Barain',
      BIF: 'Franku borundes',
      BRL: 'Rial brazileru',
      BWP: 'Pula di Botsuana',
      CAD: 'Dola kanadianu',
      CDF: 'Franku kongoles',
      CHF: 'Franku suisu',
      CNY: 'Iuan xines',
      CVE: 'Skudu Kabuverdianu',
      DJF: 'Franku di Djibuti',
      DKK: 'Kuroa dinamarkeza',
      DZD: 'Dinar arjelinu',
      EGP: 'Libra ejípsiu',
      ERN: 'Nafka di Eritreia',
      ETB: 'Bir etiópiku',
      EUR: 'Euro',
      GBP: 'Libra britániku',
      GMD: 'Dalasi',
      HKD: 'Dola di Ong Kong',
      IDR: 'Rupia indoneziu',
      INR: 'Rupia indianu',
      JPY: 'Ieni japones',
      KES: 'Xelin kenianu',
      KMF: 'Franku di Komoris',
      KRW: 'Won sul-koreanu',
      LRD: 'Dola liberianu',
      LSL: 'Loti di Lezotu',
      LYD: 'Dinar líbiu',
      MAD: 'Diren marokinu',
      MGA: 'Ariari di Madagaskar',
      MRU: 'Ougia',
      MUR: 'Rupia di Maurisias',
      MWK: 'Kuaxa di Malaui',
      MXN: 'Pezu mexikanu',
      NAD: 'Dola namibianu',
      NGN: 'Naira',
      NOK: 'Kuroa norueges',
      PLN: 'Zloty polaku',
      RUB: 'Rublu rusu',
      RWF: 'Franku ruandes',
      SAR: 'Rial saudita',
      SCR: 'Rupia di Seixelis',
      SDG: 'Libra sudanes',
      SEK: 'Kuroa sueku',
      SHP: 'Libra di Santa Ilena',
      SLL: 'Leone di Sera Leoa',
      SOS: 'Xelin somalianu',
      STN: 'Dobra di San Tume i Prínsipi',
      SZL: 'Lilanjeni',
      THB: 'Baht tailandes',
      TND: 'Dinar tunizianu',
      TRY: 'Lira turku',
      TWD: 'Dola Novu di Taiwan',
      TZS: 'Xelin di Tanzania',
      UGX: 'Xelin ugandensi',
      USD: 'Dola merkanu',
      XAF: 'Franku CFA (BEAC)',
      XOF: 'Franku CFA (BCEAO)',
      XXX: 'Mueda diskonxedu',
      ZAR: 'Rand sulafrikanu',
      ZMW: 'Kuaxa zambianu'
    }
  });
})();
