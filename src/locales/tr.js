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
  registerLocale('tr', {
    d: ',',
    g: '.',
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
      AUD: 'AU$',
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
      XXX: '¤',
      THB: '฿',
      TRY: '₺'
    },
    cn: {
      AED: 'Birleşik Arap Emirlikleri Dirhemi',
      AFN: 'Afganistan Afganisi',
      ALL: 'Arnavutluk Leki',
      AMD: 'Ermenistan Dramı',
      ANG: 'Hollanda Antilleri Guldeni',
      AOA: 'Angola Kvanzası',
      ARS: 'Arjantin Pesosu',
      AUD: 'Avustralya Doları',
      AWG: 'Aruba Florini',
      AZN: 'Azerbaycan Manatı',
      BAM: 'Konvertibl Bosna Hersek Markı',
      BBD: 'Barbados Doları',
      BDT: 'Bangladeş Takası',
      BGN: 'Bulgar Levası',
      BHD: 'Bahreyn Dinarı',
      BIF: 'Burundi Frangı',
      BMD: 'Bermuda Doları',
      BND: 'Brunei Doları',
      BOB: 'Bolivya Bolivyanosu',
      BRL: 'Brezilya Reali',
      BSD: 'Bahama Doları',
      BTN: 'Butan Ngultrumu',
      BWP: 'Botsvana Pulası',
      BYN: 'Belarus Rublesi',
      BZD: 'Belize Doları',
      CAD: 'Kanada Doları',
      CDF: 'Kongo Frangı',
      CHF: 'İsviçre Frangı',
      CLP: 'Şili Pesosu',
      CNY: 'Çin Yuanı',
      COP: 'Kolombiya Pesosu',
      CRC: 'Kosta Rika Kolonu',
      CUC: 'Konvertibl Küba Pesosu',
      CUP: 'Küba Pesosu',
      CVE: 'Cape Verde Esküdosu',
      CZK: 'Çek Korunası',
      DJF: 'Cibuti Frangı',
      DKK: 'Danimarka Kronu',
      DOP: 'Dominik Pesosu',
      DZD: 'Cezayir Dinarı',
      EGP: 'Mısır Lirası',
      ERN: 'Eritre Nakfası',
      ETB: 'Etiyopya Birri',
      EUR: 'Euro',
      FJD: 'Fiji Doları',
      FKP: 'Falkland Adaları Lirası',
      GBP: 'İngiliz Sterlini',
      GEL: 'Gürcistan Larisi',
      GHS: 'Gana Sedisi',
      GIP: 'Cebelitarık Lirası',
      GMD: 'Gambiya Dalasisi',
      GNF: 'Gine Frangı',
      GTQ: 'Guatemala Quetzalı',
      GYD: 'Guyana Doları',
      HKD: 'Hong Kong Doları',
      HNL: 'Honduras Lempirası',
      HRK: 'Hırvatistan Kunası',
      HTG: 'Haiti Gurdu',
      HUF: 'Macar Forinti',
      IDR: 'Endonezya Rupisi',
      ILS: 'Yeni İsrail Şekeli',
      INR: 'Hindistan Rupisi',
      IQD: 'Irak Dinarı',
      IRR: 'İran Riyali',
      ISK: 'İzlanda Kronu',
      JMD: 'Jamaika Doları',
      JOD: 'Ürdün Dinarı',
      JPY: 'Japon Yeni',
      KES: 'Kenya Şilini',
      KGS: 'Kırgızistan Somu',
      KHR: 'Kamboçya Rieli',
      KMF: 'Komorlar Frangı',
      KPW: 'Kuzey Kore Wonu',
      KRW: 'Güney Kore Wonu',
      KWD: 'Kuveyt Dinarı',
      KYD: 'Cayman Adaları Doları',
      KZT: 'Kazakistan Tengesi',
      LAK: 'Laos Kipi',
      LBP: 'Lübnan Lirası',
      LKR: 'Sri Lanka Rupisi',
      LRD: 'Liberya Doları',
      LSL: 'Lesotho Lotisi',
      LYD: 'Libya Dinarı',
      MAD: 'Fas Dirhemi',
      MDL: 'Moldova Leyi',
      MGA: 'Madagaskar Ariarisi',
      MKD: 'Makedonya Dinarı',
      MMK: 'Myanmar Kyatı',
      MNT: 'Moğolistan Tugriki',
      MOP: 'Makao Patakası',
      MRU: 'Moritanya Ugiyası',
      MUR: 'Mauritius Rupisi',
      MVR: 'Maldiv Rufiyaası',
      MWK: 'Malavi Kvaçası',
      MXN: 'Meksika Pesosu',
      MYR: 'Malezya Ringgiti',
      MZN: 'Mozambik Metikali',
      NAD: 'Namibya Doları',
      NGN: 'Nijerya Nairası',
      NIO: 'Nikaragua Kordobası',
      NOK: 'Norveç Kronu',
      NPR: 'Nepal Rupisi',
      NZD: 'Yeni Zelanda Doları',
      OMR: 'Umman Riyali',
      PAB: 'Panama Balboası',
      PEN: 'Peru Solü',
      PGK: 'Papua Yeni Gine Kinası',
      PHP: 'Filipinler Pesosu',
      PKR: 'Pakistan Rupisi',
      PLN: 'Polonya Zlotisi',
      PYG: 'Paraguay Guaranisi',
      QAR: 'Katar Riyali',
      RON: 'Romen Leyi',
      RSD: 'Sırp Dinarı',
      RUB: 'Rus Rublesi',
      RWF: 'Ruanda Frangı',
      SAR: 'Suudi Arabistan Riyali',
      SBD: 'Solomon Adaları Doları',
      SCR: 'Seyşeller Rupisi',
      SDG: 'Sudan Lirası',
      SEK: 'İsveç Kronu',
      SGD: 'Singapur Doları',
      SHP: 'Saint Helena Lirası',
      SLL: 'Sierra Leone Leonesi',
      SOS: 'Somali Şilini',
      SRD: 'Surinam Doları',
      STN: 'Sao Tome ve Principe Dobrası',
      SVC: 'El Salvador Kolonu',
      SYP: 'Suriye Lirası',
      SZL: 'Svaziland Lilangenisi',
      THB: 'Tayland Bahtı',
      TJS: 'Tacikistan Somonisi',
      TMT: 'Türkmenistan Manatı',
      TND: 'Tunus Dinarı',
      TOP: 'Tonga Paʻangası',
      TRY: 'Türk Lirası',
      TTD: 'Trinidad ve Tobago Doları',
      TWD: 'Yeni Tayvan Doları',
      TZS: 'Tanzanya Şilini',
      UAH: 'Ukrayna Grivnası',
      UGX: 'Uganda Şilini',
      USD: 'ABD Doları',
      UYU: 'Uruguay Pesosu',
      UZS: 'Özbekistan Somu',
      VND: 'Vietnam Dongu',
      VUV: 'Vanuatu Vatusu',
      WST: 'Samoa Talası',
      XAF: 'Orta Afrika CFA Frangı',
      XCD: 'Doğu Karayip Doları',
      XDR: 'Özel Çekme Hakkı (SDR)',
      XOF: 'Batı Afrika CFA Frangı',
      XPF: 'CFP Frangı',
      XXX: 'Bilinmeyen Para Birimi',
      YER: 'Yemen Riyali',
      ZAR: 'Güney Afrika Randı',
      ZMW: 'Zambiya Kvaçası'
    }
  });

  registerLocale('tr_TR', {});
})();
