


#ENV Variables

* `MONGODB` Mongodb database location ex: "mongodb://localhost:27017/myproject"
* `PORT` Port for web server to run on




#END POINTS

### /cats 

A single cat
```
{
    _id: "5827afd9f7fe1d54ca5f110c",
    url: "http://29.media.tumblr.com/tumblr_m3glpu8G0E1r73wdao1_500.jpg",
    id: "3s6",
    source_url: "http://thecatapi.com/?id=3s6"
}
```



### /cats/{number of cats}

Same result as /cats except within an array as the number enter
