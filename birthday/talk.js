new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("BOB && FAIRY CHEN")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("遇见你或许已花光我的运气，所以你要幸福啊......!")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();