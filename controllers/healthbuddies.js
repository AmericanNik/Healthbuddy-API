//@desc     Get all bootcamps
//@route    GET /api/v1/healthbuddies
//@access   Private

exports.getHealthbuddies = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all healthbuddies' });
};

//@desc     Get a single healthbuddy
//@route    GET /api/v1/healthbuddies/:id
//@access   Private

exports.getHealthbuddy = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show healthbuddy: ${req.params.id}` });
};

//@desc     Create new healthbuddy
//@route    POST /api/v1/healthbuddies
//@access   Private

exports.createHealthbuddy = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new healthbuddy' });
};

//@desc     Update  healthbuddy
//@route    PUT /api/v1/healthbuddies/:id
//@access   Private

exports.updateHealthbuddy = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update healthbuddy: ${req.params.id}` });
};

//@desc     Delete  healthbuddy
//@route    DELETE /api/v1/healthbuddies/:id
//@access   Private

exports.deleteHealthbuddy = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete healthbuddy: ${req.params.id}` });
};
