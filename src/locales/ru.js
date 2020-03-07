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
  registerLocale('ru', {
    d: ',',
    g: ' ',
    p: '+',
    m: '-',
    pc: '%',
    pm: '‰',
    e: 'E',
    x: '×',
    inf: '∞',
    nan: 'не число',
    np: '#,##0.###',
    cp: '#,##0.00 ¤',
    ap: '#,##0.00 ¤',
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
      XXX: '¤',
      RUB: '₽',
      THB: '฿',
      TMT: 'ТМТ',
      UAH: '₴'
    },
    cn: {
      AED: 'дирхам ОАЭ',
      AFN: 'афгани',
      ALL: 'албанский лек',
      AMD: 'армянский драм',
      ANG: 'нидерландский антильский гульден',
      AOA: 'ангольская кванза',
      ARS: 'аргентинский песо',
      AUD: 'австралийский доллар',
      AWG: 'арубанский флорин',
      AZN: 'азербайджанский манат',
      BAM: 'конвертируемая марка Боснии и Герцеговины',
      BBD: 'барбадосский доллар',
      BDT: 'бангладешская така',
      BGN: 'болгарский лев',
      BHD: 'бахрейнский динар',
      BIF: 'бурундийский франк',
      BMD: 'бермудский доллар',
      BND: 'брунейский доллар',
      BOB: 'боливийский боливиано',
      BRL: 'бразильский реал',
      BSD: 'багамский доллар',
      BTN: 'бутанский нгултрум',
      BWP: 'ботсванская пула',
      BYN: 'белорусский рубль',
      BZD: 'белизский доллар',
      CAD: 'канадский доллар',
      CDF: 'конголезский франк',
      CHF: 'швейцарский франк',
      CLP: 'чилийский песо',
      CNY: 'китайский юань',
      COP: 'колумбийский песо',
      CRC: 'костариканский колон',
      CUC: 'кубинский конвертируемый песо',
      CUP: 'кубинский песо',
      CVE: 'эскудо Кабо-Верде',
      CZK: 'чешская крона',
      DJF: 'франк Джибути',
      DKK: 'датская крона',
      DOP: 'доминиканский песо',
      DZD: 'алжирский динар',
      EGP: 'египетский фунт',
      ERN: 'эритрейская накфа',
      ETB: 'эфиопский быр',
      EUR: 'евро',
      FJD: 'доллар Фиджи',
      FKP: 'фунт Фолклендских островов',
      GBP: 'британский фунт стерлингов',
      GEL: 'грузинский лари',
      GHS: 'ганский седи',
      GIP: 'гибралтарский фунт',
      GMD: 'гамбийский даласи',
      GNF: 'гвинейский франк',
      GTQ: 'гватемальский кетсаль',
      GYD: 'гайанский доллар',
      HKD: 'гонконгский доллар',
      HNL: 'гондурасская лемпира',
      HRK: 'хорватская куна',
      HTG: 'гаитянский гурд',
      HUF: 'венгерский форинт',
      IDR: 'индонезийская рупия',
      ILS: 'новый израильский шекель',
      INR: 'индийская рупия',
      IQD: 'иракский динар',
      IRR: 'иранский риал',
      ISK: 'исландская крона',
      JMD: 'ямайский доллар',
      JOD: 'иорданский динар',
      JPY: 'японская иена',
      KES: 'кенийский шиллинг',
      KGS: 'киргизский сом',
      KHR: 'камбоджийский риель',
      KMF: 'коморский франк',
      KPW: 'северокорейская вона',
      KRW: 'южнокорейская вона',
      KWD: 'кувейтский динар',
      KYD: 'доллар Островов Кайман',
      KZT: 'казахский тенге',
      LAK: 'лаосский кип',
      LBP: 'ливанский фунт',
      LKR: 'шри-ланкийская рупия',
      LRD: 'либерийский доллар',
      LSL: 'Лоти',
      LYD: 'ливийский динар',
      MAD: 'марокканский дирхам',
      MDL: 'молдавский лей',
      MGA: 'малагасийский ариари',
      MKD: 'македонский денар',
      MMK: 'мьянманский кьят',
      MNT: 'монгольский тугрик',
      MOP: 'патака Макао',
      MRU: 'мавританская угия',
      MUR: 'маврикийская рупия',
      MVR: 'мальдивская руфия',
      MWK: 'малавийская квача',
      MXN: 'мексиканский песо',
      MYR: 'малайзийский ринггит',
      MZN: 'мозамбикский метикал',
      NAD: 'доллар Намибии',
      NGN: 'нигерийская найра',
      NIO: 'никарагуанская кордоба',
      NOK: 'норвежская крона',
      NPR: 'непальская рупия',
      NZD: 'новозеландский доллар',
      OMR: 'оманский риал',
      PAB: 'панамский бальбоа',
      PEN: 'перуанский соль',
      PGK: 'кина Папуа – Новой Гвинеи',
      PHP: 'филиппинский песо',
      PKR: 'пакистанская рупия',
      PLN: 'польский злотый',
      PYG: 'парагвайский гуарани',
      QAR: 'катарский риал',
      RON: 'румынский лей',
      RSD: 'сербский динар',
      RUB: 'российский рубль',
      RWF: 'франк Руанды',
      SAR: 'саудовский риял',
      SBD: 'доллар Соломоновых Островов',
      SCR: 'сейшельская рупия',
      SDG: 'суданский фунт',
      SEK: 'шведская крона',
      SGD: 'сингапурский доллар',
      SHP: 'фунт острова Святой Елены',
      SLL: 'леоне',
      SOS: 'сомалийский шиллинг',
      SRD: 'суринамский доллар',
      STN: 'добра Сан-Томе и Принсипи',
      SVC: 'Сальвадорский колон',
      SYP: 'сирийский фунт',
      SZL: 'свазилендский лилангени',
      THB: 'таиландский бат',
      TJS: 'таджикский сомони',
      TMT: 'новый туркменский манат',
      TND: 'тунисский динар',
      TOP: 'тонганская паанга',
      TRY: 'турецкая лира',
      TTD: 'доллар Тринидада и Тобаго',
      TWD: 'новый тайваньский доллар',
      TZS: 'танзанийский шиллинг',
      UAH: 'украинская гривна',
      UGX: 'угандийский шиллинг',
      USD: 'доллар США',
      UYU: 'уругвайский песо',
      UZS: 'узбекский сум',
      VND: 'вьетнамский донг',
      VUV: 'вату Вануату',
      WST: 'самоанская тала',
      XAF: 'франк КФА BEAC',
      XCD: 'восточно-карибский доллар',
      XDR: 'СДР (специальные права заимствования)',
      XOF: 'франк КФА ВСЕАО',
      XPF: 'французский тихоокеанский франк',
      XXX: 'неизвестная валюта',
      YER: 'йеменский риал',
      ZAR: 'южноафриканский рэнд',
      ZMW: 'замбийская квача'
    }
  });

  registerLocale('ru_KZ', {
    cs: {
      KZT: '₸'
    }
  });

  registerLocale('ru_RU', {});
})();
