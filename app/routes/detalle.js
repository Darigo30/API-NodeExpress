const { Router } = require('express');
const router = Router();
const axios = require('axios').default
 
//Ruta para obtener el id y descripcion del producto

router.get('/api/items/:id', async (req, res) => {    
    const id = req.params.id;
    const urlId = `https://api.mercadolibre.com/items/${id}`
    const urlDescription = `https://api.mercadolibre.com/items/${id}/description`

    const promiseOne = await axios.get(urlId)
    const promiseTwo = await axios.get(urlDescription)

    axios.all([promiseOne, promiseTwo])
    .then(axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        res.json({...responseOne.data, ...responseTwo.data})
    }))
    .catch(errors => {
    console.log(errors);
    })
})

module.exports = router;