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
  registerLocale('mfe', {
    d: '.',
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
    cp: '¤ #,##0.00',
    ap: '¤ #,##0.00',
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
      MUR: 'Rs'
    },
    cn: {
      AED: 'dirham Emira arab ini',
      AOA: 'kwanza angole',
      AUD: 'dolar ostralien',
      BHD: 'dinar bahreïn',
      BIF: 'fran burunde',
      BWP: 'pula ya botswane',
      CAD: 'dolar kanadien',
      CDF: 'fran kongole',
      CHF: 'fran swis',
      CNY: 'yuan renminbi sinwa',
      CVE: 'eskudo kapverdien',
      DJF: 'fran djiboutien',
      DZD: 'dinar alzerien',
      EGP: 'liv ezipsien',
      ERN: 'nafka erythreen',
      ETB: 'birr etiopien',
      EUR: 'euro',
      GBP: 'liv sterlin',
      GMD: 'dalasi gambien',
      INR: 'roupi',
      JPY: 'yen zapone',
      KES: 'shiling kenyan',
      KMF: 'fran komorien',
      LRD: 'dolar liberien',
      LSL: 'loti lezoto',
      LYD: 'dinar libien',
      MAD: 'dirham marokin',
      MGA: 'fran malgas',
      MRU: 'ouguiya moritanien',
      MUR: 'roupi morisien',
      MWK: 'kwacha malawit',
      NAD: 'dolar namibien',
      NGN: 'naira nizerian',
      RWF: 'fran rwande',
      SAR: 'rial saoudien',
      SCR: 'roupi seselwa',
      SDG: 'dinar soudane',
      SHP: 'liv Sainte-Hélène',
      SLL: 'leonn Sierra-Leone',
      SOS: 'shilingi somalien',
      STN: 'dobra santomeen',
      SZL: 'lilangeni swazi',
      TND: 'dinar tinizien',
      TZS: 'shiling tanzanien',
      UGX: 'shiling ougande',
      USD: 'dolar amerikin',
      XAF: 'fran CFA (BEAC)',
      XOF: 'fran CFA (BCEAO)',
      ZAR: 'rand sid-afrikin',
      ZMW: 'kwacha zanbien'
    }
  });
})();
