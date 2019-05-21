const mongoose = require('mongoose');
const firebase = require('../config/firebase');

const Upload = mongoose.model('Upload')

module.exports = {
    async upload(req, res) {
        const storage = firebase.storage().ref('/Upload/Teste');

        const {originalname: name, size, filename: key} = req.file;

        const fileRef = storage.child(req.file.originalname);
        console.log('Iniciando Upload Firebase: '+fileRef.name);
        fileRef.put(req.file).then(
            (snap) => {
                console.log(snap);
            }
        );

        const upload = await Upload.create({
            name,
            size,
            key, 
            url: ''
        });


        return res.json(upload);
    },
};