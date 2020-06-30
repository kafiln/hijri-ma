module.exports = {
  url: 'http://www.habous.gov.ma/prieres/horaire_hijri.php',
  monthNode: '#horaire > tbody > tr:nth-child(1) > td:nth-child(2)',
  expectedNode: '#horaire > tbody',
  todayNode: '#horaire > tbody > tr.cournt > td:nth-child(2)',
  YEAR: 1441,
  TIMEZONE_OFFSET: 1,
  DATEFORMAT: 'YYYY-MM-DD',
};
