
const {Router} = require('express');
const router = Router();

router.get('/test', (req, res)=>{
    const data = {
        "name": "Diana",
        "mail": "dsgonzag@espol.edu.ec"
    };
    res.json(data);
});

module.exports = router;