function parseQuery(url) {
    var queryObj={};
    var reg=/[?&]([^=&#]+)=([^&#]*)/g;
    var querys=url.match(reg);
    if(querys){
        for(var i in querys){
            var query=querys[i].split('=');
            var key=query[0].substr(1),
                value=query[1];
            queryObj[key]?queryObj[key]=[].concat(queryObj[key],value):queryObj[key]=value;
        }
    }
    return queryObj;
}
//var url='http:www.baidu.com/index?name=username&age=27&pwd=zbc|123@&likes=lol&likes=beautifull girl&$id=main#flag=66';
console.log(parseQuery(url));
