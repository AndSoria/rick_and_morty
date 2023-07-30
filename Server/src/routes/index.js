// const {Router} = require ('express');

const {Router}=  require ('express');

const getCharById =require ('../controllers/getCharById')
const login =require ('../controllers/login')
const {postFav, deletedFav} =require ('../controllers/handleFavorites');
const { Router } = require('express');

const router= Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav",postFav);
router.delete("/fav/:id",deletedFav);

module.exports= router;