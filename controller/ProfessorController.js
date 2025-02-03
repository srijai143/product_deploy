const Professor = require('../model/professor');


exports.getAllProfessors = async (req, res) =>{
    try{
        const prof_record = await Professor.find()
        res.json(prof_record)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.getSingleProfessor = async (req, res) =>{
    try {
        const professor = await Professor.findOne({prof_id: req.params.id})
        if(!professor)
            return res.status(404).json({msg: 'Professor Not found'})
        
        res.json(professor)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
/*exports.addNewProfessor = async(req, res) =>{
    try{
        const professor = await Professor.findOne({prof_id: req.body.prof_id})
        if(!professor){
            const addedProfessor = await Professor.create(req.body)
            res.json(addedProfessor)
        }
        else{
            res.json({msg: 'Professor already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}*/


/*exports.updateProfessor = async (req, res) =>{
    try{
        const professor = req.body
        const fetchedProfessor = await Professor.findOne({prof_id: product.prof_id})
        if(fetchedProfessor){
            await Professor.updateOne(professor)
            res.json(await Professor.findOne({prof_id: professor.prof_id}))
        }
        else{
            res.json({msg: 'Professor doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
    */

/*exports.deleteProfessor = async (req, res)=>{
    try{
        const professor = await Professor.findOne({prof_id: req.params.id})
        if(product){
            await Professor.deleteOne({prof_id:professor.prof_id})
            res.json(professor)
        }
        else{
            res.json({msg: 'professor doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
} */