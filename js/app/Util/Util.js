var Util = Util || {};

(function () {
  console.log(Util);
  Util.Date = {
    getTweetDateStr: function (date) {
      var now = moment();
      // seconds
      var secDiff = now.diff(date, 'seconds')
      if (secDiff <= 10){
          return 'たった今'
      }
      if (secDiff < 60){
        return `${secDiff}秒前`
      }

      // minutes
      var minDiff = now.diff(date, 'minutes')
      if (minDiff < 60) {
        return `${minDiff}分前`
      }

      // hours
      var hourDiff = now.diff(date, 'hours')
      if (hourDiff < 24) {
        return `${hourDiff}分前`
      }

      // over day
      if (now.diff(date, 'years') == 0) {
        return date.format('M月D日')
      } else {
        return date.format('YYYY年M月D日')
      }

    }
  };

  Util.File = {
    //TODO ファイル読み取り実装
    //http://www.html5rocks.com/ja/tutorials/file/dndfiles/
  }
})();
