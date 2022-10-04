function getArticleGenerator(articles) {
    let myArticle = Array.from(articles);
    let content = document.getElementById("content")

    return ()=>{
        if(myArticle.length===0){
            return;
        }
        let currentArticle = articles.shift();
        content.innerHTML +=`<article>${currentArticle}</article>`
    }
}
