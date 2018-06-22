//copy db instance and run the sql

module.exports={
    read: (req,res) =>{
        const dbInstance=req.app.get('db');
        dbInstance.get_inventory().then((shop)=>res.status(200).send(shop))
        .catch(err =>{
            res.status(500).send({errorMessage:"close, but no cigar!  Try again."})
            console.log(err)
        });
    }
}