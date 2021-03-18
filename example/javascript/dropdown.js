$(function(){
    let hoverMenu1 = '<div class="childMenu">\n' +
        '        <ul>\n' +
        '            <li>全て</li>\n' +
        '            <li>HTML・CSS</li>\n' +
        '            <li>Webの基本</li>\n' +
        '            <li>コンテンツ</li>\n' +
        '            <li>スマホ</li>\n' +
        '        </ul>\n' +
        '    </div>';

    $('.parentMenu li').hover(
       function (event) {
           $('.parentMenu').after(hoverMenu1);
       },
       function (event) {
           //親メニューが外れた時に子メニュー以外にホバーしている時だけ
           //追加した子メニューを削除したい
           //jQuery(':hover')で親メニューが外れた時にホバーしている要素を取得
           //するが、複数取れてしまうので、.eachでその中に追加して子メニューが
           //含まれているかどうかの判定ロジックを記述。なければ削除
           let hoverChildMenu = false;
           jQuery(':hover').each(function(index, element) {
               if(element.className == 'childMenu') {
                   hoverChildMenu = true;
               }
           })
           if(!hoverChildMenu){
               $('.childMenu').remove();
           }

           // console.log(jQuery(':hover').element);
           // if ($.inArray('div.childMenu', jQuery(':hover').element) == -1) {
           //     $('.childMenu').remove();
           // }
       });


    $(document).on({
        //マウスを乗せたときの動作
        'mouseenter': function() {
        },

        //マウスを離したときの動作
        'mouseleave': function() {
            $('.childMenu').remove();
        }
    }, '.childMenu');
//ホバーの対象を複数の要素に指定したいけどできない
});