(function() {
    var time, count = 60;
    var storeInfo = common.getStoreInfo();
    $(".am-form").on("click", ".sendSMS", function(ev) {
        var data = common.parseForm(".am-form");

        if (common.regMobileNo(data.mobileNo)) {
            sendSMS(data.mobileNo)
        } else {
            modal.alert("情确认手机号是否输入正确！");
        }
    })

    function sendSMS(mobileNo) {
        $.post('/sendSMS', { 'mobileNo': mobileNo, sendType: 1, storeId: storeInfo.storeId }).success(function(data) {
            if (!data.success) {
                modal.alert(data.msg);
            } else {
                $(this).attr('disabled', 'disabled');
                timeout();
            }
        }).error(function(data) {
            // modal.alert(data.msg);
        });
    }

    function timeout() {
        time = setInterval(function() {
            if (count <= 1) {
                count = 60;
                $(".am-form .sendSMS").removeAttr('disabled');
                $(".am-form .sendSMS").text("发送验证码");
                clearTimeout(time);
            } else {
                count--;
                $(".am-form .sendSMS").text(count + " 秒后重发");
            }
        }, 1000);
    }

    $('#loginForm').validator({
        submit: function(form) {
            if (this.isFormValid()) {
                var data = common.parseForm(".am-form");
                if (common.regMobileNo(data.mobileNo)) {
                    $.post('/checkSmscode', { 'mobileNo': data.mobileNo, 'smsCode': data.smsCode }).success(function(data) {
                        // var params = $(".am-form").serialize();
                        // window.location.href = "/public/profile.html?" + params;
                        var params = $(".am-form").serialize();
                        params = params.replace(/&/g, '_8_8_');
                        var redirect_uri = "/public/profile.html?" + params;
                        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + wechatPublicNumberInfo.appid + "&redirect_uri="+window.redirect_uri+"&response_type=code&scope=snsapi_userinfo&state=" + redirect_uri + "&connect_redirect=1#wechat_redirect"
                    }).error(function(data) {
                        modal.alert(data.responseJSON.msg);
                    });
                } else {
                    modal.alert("情确认手机号是否输入正确！");
                }
            }
            return false;
        }
    });
}).call(this);
