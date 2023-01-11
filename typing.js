class Typing {
    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.interval = obj.interval || 500
        this.delay = obj.delay == undefined ? 1000 : obj.delay
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ""
        setTimeout(() => {
            this.write() 
        }, this.delay);
    }
    write(i=0){
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i)
            }, this.interval);
        }
    }
}


new Typing({
    el: ".content h2 span",
    interval: 300,
    delay: 500
})


// const el = document.querySelector('.header__content h1');
// let text = el.innerHTML
// el.innerHTML = ""
// function write(i=0) {
//     el.innerHTML +=text[i]
//     i++
//  if (i<text.length) {
//     setTimeout(() => {
//         write(i)
//     }, 500);
//  }
// }
// setTimeout(() => {
//     write()
// }, 500);