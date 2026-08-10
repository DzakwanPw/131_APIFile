const express = require('express');
const router = express.Router();

const komikController = require('../controller/komikController');
const penulisController = require('../controller/penulisController');
const genreController = require('../controller/genreController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', penulisController.register);
router.post('/login', penulisController.login);

// Public
router.get('/komik', komikController.getAll);
router.get('/genre', genreController.getAll);

// Protected
router.post('/komik', authMiddleware, komikController.create);
router.put('/komik/:id', authMiddleware, komikController.update);
router.delete('/komik/:id', authMiddleware, komikController.remove);

router.post('/genre', authMiddleware, genreController.create);
router.put('/genre/:id', authMiddleware, genreController.update);
router.delete('/genre/:id', authMiddleware, genreController.remove);

module.exports = router;