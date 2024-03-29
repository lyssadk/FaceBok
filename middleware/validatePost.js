const validator = require('../helper/validate');

const postRules = (req, res, next) => {
  const validationRule = {
    group_id: 'numeric',
    content: 'required|string',
    likes: 'numeric',
    comments: 'array',
    'comments.*.comment': 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
    res.status(412).send({
      success: false,
      message: 'Validation failed',
      data: err
    });
    } else {
    next();
    }
  });
};

module.exports = { postRules };