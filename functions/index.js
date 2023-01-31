const functions = require("firebase-functions");
const cors = require('cors')({origin: true})
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'insta-clone-d0c22',
    keyFilename: './insta-clone-d0c22.json'

})


exports.uploadImage = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        try {
            fs.writeFileSync('/temp/imageToSave.jpg', request.body.image, 'base64')

            const bucket = storage.bucket('insta-clone-d0c22.appspot.com')
            const id = uuid()
            bucket.upload('/temp/imageToSave.jpg',{
                uploadType: 'media',
                destination: `/posts/${id}.jpg`,
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }
                }
            }, (err, file) => {
                if(err){
                    console.log(err)
                    response.status(500).json({ err: err })
                }else{
                    const fileName = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/b/' + bucket.name + '/o/' + fileName + '?alt=media&token=' + id

                    return response.status(201).json({ imageUrl: imageUrl })
                }
            })
        }catch(err){
            console.log(err)
            return response.status(500).json({err: err})
        }
    })
});
