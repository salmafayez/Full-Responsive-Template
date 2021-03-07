
var gallery_pics=Array.from(document.getElementsByClassName("img-fluid"));
var lightBox=document.getElementById('light-box');
var index_gallery;

for(var i=0;i<gallery_pics.length;i++){
    gallery_pics[i].addEventListener("click",function(e){
    lightBox.style.display="flex";
    document.querySelector("#light-box img").src=e.target.src;
    for( var i=0;i<gallery_pics.length;i++){
        if(gallery_pics[i]==e.target)
        {
            index_gallery=i;
        }
    }
    })
}
document.querySelector(".fa-window-close").addEventListener("click",function(){
    lightBox.style.display="none";
})
document.querySelector(".fa-arrow-right").addEventListener("click",function(e){
    if(index_gallery==gallery_pics.length-1)
    {
        index_gallery=0;
    }
    else{
        index_gallery++;
    }
    document.querySelector("#light-box img").src=gallery_pics[index_gallery].src;
})

document.querySelector(".fa-arrow-left").addEventListener("click",function(e){
    if(index_gallery==0)
    {
        index_gallery=gallery_pics.length-1;
    }
    else{
        index_gallery--;
    }
    document.querySelector("#light-box img").src=gallery_pics[index_gallery].src;
})