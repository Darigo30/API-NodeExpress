const { Router } = require('express');
const router = Router();
const axios = require('axios').default
 
//Ruta para obtener el resultado de la búsqueda

router.get('/api/items', async (req, res) => {    
    const search = req.query.q;
    const url = `https://api.mercadolibre.com/sites/MLA/search`
    try {
        const response = await axios.get(url, {params: { q: search} })
        const data = response.data
        res.json(data)
    }
    catch (error) {
        console.error(error)
    }
})

module.exports = router;