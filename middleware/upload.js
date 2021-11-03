const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/images/products');
  },
  filename: (req, file, callback) => {
    callback(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});
// zapatilla.jpeg
// zapatilla + '-' + 1234325345 + .jpeg
// zapatilla-1234325345.jpg

const upload = multer({ storage: storage });

module.exports = upload;