//ホバーした時に挿入する子メニュー
let hoverMenu1 = '<div class="childMenu">\n' +
    '        <ul>\n' +
    '            <li>全て</li>\n' +
    '            <li>HTML・CSS</li>\n' +
    '            <li>Webの基本</li>\n' +
    '            <li>コンテンツ</li>\n' +
    '            <li>スマホ</li>\n' +
    '        </ul>\n' +
    '    </div>';

let hoverMenu2 = '<div class="childMenu">\n' +
    '        <ul>\n' +
    '            <li>デザイン</li>\n' +
    '            <li>Design</li>\n' +
    '            <li>でざいん</li>\n' +
    '        </ul>\n' +
    '    </div>';

let hoverMenu3 = '<div class="childMenu">\n' +
    '        <ul>\n' +
    '            <li>集客</li>\n' +
    '            <li>マーケティング</li>\n' +
    '        </ul>\n' +
    '    </div>';


//第一引数：トリガーとなる親メニューの要素
//第二引数：挿入する子メニューの要素
function addChildMenu(parentMenu, childMenu) {
    parentMenu.hover(
        function () {
            $('.parentMenu-container').after(childMenu);
            $('.childMenu li').toggleClass('move');
        },
        function () {
            let hoverChildMenu = false;
            jQuery(':hover').each(function(index, element) {
                if(element.className == 'childMenu') {
                    hoverChildMenu = true;
                }
            })
            if(!hoverChildMenu){
                $('.childMenu').remove();
            }
        });
}

$(function(){
    addChildMenu($('.parentMenu-container .parentMenu1'), hoverMenu1);
    addChildMenu($('.parentMenu-container .parentMenu2'), hoverMenu2);
    addChildMenu($('.parentMenu-container .parentMenu3'), hoverMenu3);

    $(document).on({
        //マウスを乗せたときの動作
        'mouseenter': function() {
        },

        //マウスを離したときの動作
        'mouseleave': function() {
            $('.childMenu').remove();
        }
    }, '.childMenu');
    //それかもう最初からぺっちゃんこで挿入しちゃってホバーされたら大きくするとかね
});
