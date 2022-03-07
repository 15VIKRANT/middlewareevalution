const express=require('express');
const app=express();

app.use(logger);
// app.use(checkPermission);

app.get('/books',function(req,res){
    console.log('book');
    res.send('books');
});

app.get('/authors ',authors,function(req,res){
    console.log('author');
    res.send({ route:"/authors", permission: true});
 });

 function authors(req,res,next){
     next();
 }

app.get('/libraries',libraries,function(req,res){
   console.log('library');
   res.send( { route: "/libraries", permission: true})
});
function libraries(req,res,next){
    next();
}




function logger(req, res, next){
    if(req.path==='./books')
    {
        req.role='books';
    }
    else if(req.path==='./authors')
    {
        req.role='authors';
    }
    else if(req.path==='./libraries')
    {
        req.role='libraries';
    }
}


app.listen(5000,()=>{
    console.log('listening to port 5000');
})