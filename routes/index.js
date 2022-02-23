var express = require('express')
var router = express.Router()
var uniqid = require('uniqid')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/upload', async function (req, res, next) {
  console.log('route upload connectee')
  var pictureName = './tmp/' + uniqid() + '.jpg'
  var resultCopy = await req.files.avatar.mv(pictureName)
  console.log('resultCopy : ', resultCopy)
  if (!resultCopy) {
    res.json({ result: true })
  } else {
    res.json({ error: resultCopy })
  }

  // fs.unlinkSync(pictureName)
})

module.exports = router
