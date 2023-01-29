const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // ICI => REQUETE POUR CHERCHER LUTILISATEUR DANSL A BD

        // Verifie si l'utilisateur existe dans la BD
        if (!data) {
            return res.status(404).json({ message: "Aucun utilisateur avec cet ID trouvé." })
        }

        // Comparaison du mot de passe encrypte dans la BD
        if (bcrypt.compareSync(password, data.password)) {
            // Creation d'un token
            const accessToken = jwt.sign({ id: data.id }, process.env.TOKEN_KEY, {
                expiresIn: 24 * 60 * 60
            });

            res.status(200).send({ "token": accessToken });
        }

    } catch (error) {
        res.status(500).json(error.message);
    }
})

module.exports = router;