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


// new Typing({
//     el: ".info__text",
//     interval: 100,
//     delay: 500
// })