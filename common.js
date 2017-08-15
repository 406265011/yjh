/*
 * 公共的javaScript
 * 此javaScript依赖于JQuery,引入之前请先引入JQuery
 * */


/*
 * 提示信息
 * @param info 提示信息(比如密码错误这些-用在web端的表单体验比较好)
 * @param callback 回调函数
 * @param time 时间
 * @return
 * */
function getPrompt(info, callback, time) {
    time = time > 0 ? time : 3000;
    var data_prompt = $('body').attr('data-prompt');
    if (data_prompt == 1) {
        $('#prompt samp').html(info);
    } else {
        var text = $('<div id="prompt" style="position: fixed;top: 5%;z-index: 9999;text-align: center;left: 0;right: 0;display:none;" ><samp style=" background: #00a0e9; color: #ffffff; padding: 10px 15px;border-radius: 20px;">' + info + '</samp></div>');
        $('body').append(text);
        $('body').attr('data-prompt', 1);
    }
    $('#prompt').show().fadeOut(time, callback);
}


/*
 * --获取验证码--
 * N秒之后再次获取
 *  @param time 倒计时时间
 *  @param delay 延迟时间（毫秒）
 *  @param name 类名、ID等等
 * */
function validate(name, time, delay) {
    var gaintiming = true; //此变量为获取验证码用，当为true时执行false则不执行
    $(name).click(function (obj) {
        var i = time; //这里为重新获取验证码的时间
        if (gaintiming) {
            gaintiming = false;
            $(this).val(time + "秒后重新获取");
            timing = setInterval(function () {
                $(name).val(--i + " 秒后重新获取");
                if (i <= 0) {
                    gaintiming = true;
                    clearInterval(timing);
                    $(name).val("重新获取验证码");
                }
            }, delay);
        }
    });
}

/*
 * --验证手机号功能--
 * @param name 需要判断的input类名、ID等等
 * */
function getphone(name) {
    var zhi = $(name).val();
    var filter = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    return filter.test(zhi);
}

/*
 * --验证密码功能--
 * @param name 需要判断的input类名、ID等等
 * */
function getpasw(name) {
    var zhi = $(name).val();
    var filter = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/; //这个正则匹配纯数字跟纯英文，至少要6位密码,要有英文跟数字
    return filter.test(zhi);
}



/*
 * rem自适应
 * 自动获取px，并给html添加
 * 使用rem布局，调用此函数即可
 * 1rem = 20px
 * */
function getrem() {
    var html = document.getElementById('ht');
    var sWidth = window.screen.width;
    var i = sWidth / 20;
    html.style.fontSize = i + 'px';
}

/*
 * a标签滑动效果（解决点击a标签锚点url发生变化）
 * @param name 要点击的类名，ID等等
 * @param time 动画时间
 * @param cartoon 动画类型
 * */
function anchor(name, time, cartoon) {
    $("html,body").animate({
        scrollTop: $(name).offset().top
    }, time, cartoon);
}