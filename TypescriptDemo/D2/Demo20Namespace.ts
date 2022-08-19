namespace Home{
    class Header{
        constructor(){
            const elemx = document.createElement("div")
            elemx.innerText = "this is header"
            document.body.appendChild(elemx)
        }
    }
    
    class Content{
        constructor(){
            const elemx = document.createElement("div")
            elemx.innerText = "this is Content"
            document.body.appendChild(elemx)
        }
    }
    
    class Footer{
        constructor(){
            const elemx = document.createElement("div")
            elemx.innerText = "Footer"
            document.body.appendChild(elemx)
        }
    }
    
    export class Page{
        constructor(){
            new Header();
            new Content();
            new Footer();
        }
    }
}
