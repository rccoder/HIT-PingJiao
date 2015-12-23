/* 评教模式
 * 三个参数是三者占有的比例，可自行修改
 */
var mode_dict = {
    1: [0.6, 0.2], //温柔模式
    2: [0.8, 0.6]  //报复模式
}

var body = $('#iframename').contents();

var full_option = function (weight, mode) {
    for (var i = 0; i < weight.length; i++) {
        body.find('option[value=' + weight[i] + ']').each(function () {
            if (Math.random() > mode_dict[mode][0]) {
                $(this).attr('selected', 1);
            } else if (Math.random() > mode_dict[mode][1]) {
                $(this).next().attr('selected', 1);
            } else {
                $(this).next().next().attr('selected', 1);
            }
        });    
    }
}

var attendance = function (weight) {
    body.find('.inp6').each(function () {
        $(this).val(weight);
    })
}

var summary = function(name, content) {
    var good_length = content.good.length;
    var bad_length = content.bad.length;
    for (var i = 0; i < name.length; i++) {
        body.find('textarea[name="'+ name[i] +'"]').each(function () {
            var item = (i == 0 ? Math.floor(Math.random()*good_length) : Math.floor(Math.random()*bad_length))
            if (i == 0) {
                $(this).val(content.good[item]);    
            } else {
                $(this).val(content.bad[item]);    
            }
        });
    };
}
//评课评学
full_option([28, 35, 32, 47, 51], 1)
attendance(100)

//分项评价教师
var teacher_content = {
    good: [
        "上课很生动，口才很棒",
        "课堂互动很多， 大家的热情都特别高",
        "很好的老师，规格严格，功夫到家啊"
    ],
    bad: [
        "上课有时候稍显无趣，建议调节一下自己的教学气氛",
        "有时讲课比较绕"
    ]
}

fullOption([2, 6], 1)
summary(['yxzc', 'bzzc'], teacher_content)

// 综合自己下写写？

//实验课评价
var course_content = {
    good: [
        "实验课学习到了很多东西，感谢",
        "实验题目新颖，难度适中",
        "实验环境很好"
    ],
    bad: [
        "机房的网友问题，好多网站上不去",
        "感觉大家在实验课上都无所事事"
    ]
}
fullOption([1], 1)
summary(['yxzc', 'bzzc'], course_content)