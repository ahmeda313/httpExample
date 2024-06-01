const http= require("http")
const fs= require("fs")

const indexHtml=fs.readFileSync("index.html",'utf-8')
const data=fs.readFileSync("data.json")


const server=http.createServer((req,res)=>{
    console.log("server started")

    if(req.url.startsWith("/product")){
        const arr=req.url.split("/")
        let resProd=JSON.parse(data).products
        resProd=resProd.find(p=>p.id===+arr[2])

        let resHtml=indexHtml.replace("**title**",resProd.title)
        resHtml=resHtml.replace("**imgSrc**",resProd.thumbnail)
        resHtml=resHtml.replace("**price**",resProd.price)
        resHtml=resHtml.replace("**desc**",resProd.description)
        res.end(resHtml)
        return;   
    }


    // switch(req.url){
    //     case"/":
    //         res.setHeader("content-type","text/html")
    //         res.end(indexHtml)
    //         break;
    //     case"/api":
    //         res.setHeader("content-type","application/json")
    //         res.end(data)
    //         break;
    //     default:
    //         res.writeHead(404,"not found")
    //         res.end()
    //         break;
    // }
    console.log(req.url)
})

server.listen(3000)


const app=http.createServer((req,res)=>{
    console.log("server started2")

    if(req.url==='/'){
        res.write(`{1:"aasdf"`)
        res.end("lkj")
    }

})

    app.listen(8080)