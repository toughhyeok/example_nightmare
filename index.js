const Nightmare = require('nightmare')
const nightmare = Nightmare({
    show: true,
})

const url = "http://www.vdrstore.com/member/login.html"

nightmare
    .goto(url)
    .type("#member_id", process.env.MEMBER_ID)
    .type("#member_passwd", process.env.MEMBER_PASSWD)
    .click(".login > fieldset > a")
    .evaluate(() => {
        return document.querySelector('#left_menu > li:nth-child(2) > a').href
    })
        .end()
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.error("Error:", err)
        });