(function() {
    var recharge = function() {
        this.pageNo = 1;
        this.pageSize = 10;
        this.isEnd = false;
    }
    recharge.prototype = {
        init: function() {
            var self = this;
            self.getMessage();
            scroll.on(function() {
                if (!self.isEnd) {
                    self.pageNo++;
                    self.getMessage();
                }
            }, function() {});
        },
        getMessage: function() {
            var self = this;
            $.get('/recharge-record.template', {
                memberId: userInfo.memberId,
                pageNo: self.pageNo,
                pageSize: self.pageSize
            }).success(function(data) {
                data = data.replace(/(^\s+)|(\s+$)/g, "");
                if ("" == data) {
                    self.isEnd = true;
                } else {
                    self.isEnd = false;
                    $(".recharge-record ul").append(data);
                    countdownTimer.start();
                }
            }).error(function(err) {});
        }
    }
    this.recharge = new recharge();
    this.recharge.init();

    $.post('/order/selectUsrRechargeOrderRemainNum', { memberId: userInfo.memberId }).success(function(data) {
        if (data.code == "0000" && data.success) {
            $(".single-class .pub-title .number").text(data.data);
        }
    });

    function countdown() {
        this.timer;
    }
    countdown.prototype = {
        initCountdown: function() {
            var self = this;
            var list = $(".countdown");
            list.each(function(i, I) {
                var end = $(I).data("orderEndDate");
                $(I).html(self.formatTime(end));
            });
        },
        start: function() {
            var self = this;
            this.timer = setInterval(function() {
                self.initCountdown();
            }, 1000);
        },
        formatTime: function(end) {
            var now = new Date().getTime();
            var end = end * 1;
            var difference = end - now;
            var t = difference,
                list = [];
            var d = Math.floor(t / 1000 / 60 / 60 / 24);
            var h = Math.floor(t / 1000 / 60 / 60 % 24);
            var m = Math.floor(t / 1000 / 60 % 60);
            var s = Math.floor(t / 1000 % 60);
            if (d >= 1) {
                list.push("<div class='day'>" + d + "天</div><div class='pub-countdown txt-c pb0'>");
            }
            if (h < 10) {
                list.push("<i class='am-badge am-badge-danger'>0" + h + "</i><span>时</span>");
            } else {
                list.push("<i class='am-badge am-badge-danger'>" + h + "</i><span>时</span>");
            }
            if (m < 10) {
                list.push("<i class='am-badge am-badge-danger'>0" + m + "</i><span>分</span>");
            } else {
                list.push("<i class='am-badge am-badge-danger'>" + m + "</i><span>分</span>");
            }
            if (s < 10) {
                list.push("<i class='am-badge am-badge-danger'>0" + s + "</i><span>秒</span>");
            } else {
                list.push("<i class='am-badge am-badge-danger'>" + s + "</i><span>秒</span>");
            }
            list.push("</div>")
            return list.join("");
        }
    }
    this.countdownTimer = new countdown();

}).call(this)
