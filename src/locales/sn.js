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
  registerLocale('sn', {
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
      MXN: 'MX$',
      NZD: 'NZ$',
      TWD: 'NT$',
      USD: 'US$',
      VND: '₫',
      XAF: 'FCFA',
      XCD: 'EC$',
      XOF: 'CFA',
      XPF: 'CFPF',
      XXX: '¤'
    },
    cn: {
      AED: 'Diramu re United Arab Emirates',
      AOA: 'Kwanza ye Angola',
      AUD: 'Dora re Australia',
      BHD: 'Dhinari re Bhahareni',
      BIF: 'Furenki re Bhurundi',
      BWP: 'Pura re Botswana',
      CAD: 'Dora re Kanada',
      CDF: 'Furenki re Kongo',
      CHF: 'Furenki re Swisi',
      CNY: 'Yuan Renminbi ye China',
      CVE: 'Dhora re Escudo',
      DJF: 'Furenki re Jibhuti',
      DZD: 'Dhinari re Aljeria',
      EGP: 'Paundi re Ijipita',
      ERN: 'Nakfa re Eritrea',
      ETB: 'Dhora re Etiopia',
      EUR: 'Yuro',
      GBP: 'Paundi ye Bhiriteni',
      GMD: 'Dalasi ye Gambia',
      INR: 'Rupe re India',
      JPY: 'Yeni ye Japani',
      KES: 'Shiringi ye Kenya',
      KMF: 'Furenki re Komoro',
      LRD: 'Dora re Liberia',
      LSL: 'Loti ye Lesoto',
      LYD: 'Dinari re Libya',
      MAD: 'Dirham ye Moroko',
      MGA: 'Furenki re Malagasi',
      MRU: 'Ugwiya ye Moritania',
      MUR: 'Rupi ye Morishasi',
      MWK: 'Kwacha ye Malawi',
      NAD: 'Dora re Namibia',
      NGN: 'Naira ye Nijeria',
      RWF: 'Furenki re Ruwanda',
      SAR: 'Riyali re Saudi',
      SCR: 'Rupi re Seyisheri',
      SDG: 'Dinari re Sudani',
      SHP: 'Paundi re Senti Helena',
      SLL: 'Leoni',
      SOS: 'Shiringi re Somalia',
      STN: 'Dobra re Sao Tome ne Principe',
      SZL: 'Lilangeni',
      TND: 'Dinari re Tunisia',
      TZS: 'Shiringi re Tanzania',
      UGX: 'Shiringi re Uganda',
      USD: 'Dora re Amerika',
      XAF: 'Furenki CFA BEAC',
      XOF: 'Furenki CFA BCEAO',
      ZAR: 'Randi',
      ZMW: 'Kwacha ye Zambia'
    }
  });
})();
