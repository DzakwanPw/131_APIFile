const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) => {
        cb(null, 'uploads/');
    },

    filename: function (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;

    const extname = allowedTypes.test(
        path.extname(file.originalname).toLowerCase();
    );

    const nimetype = allowedTypes.test(file.mimetype);

    if (extname && nimetype) {
        cb(null, true);
    } else {
        cb(new Error("Hanya file JPG, JPEG, dan PNG yang diperbolehkan."), false);
    }
};
