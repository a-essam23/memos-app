//the user should be able to create/update one field/update all info/delete/delete all info of his documents
const Daily = require('../models/dailyModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
exports.getMemo = catchAsync(async (req, res, next) => {
  const memo = await Daily.find();

  res.status(200).json({
    status: 'success',
    length: memo.length,
    data: memo,
  });
});
exports.createMemo = catchAsync(async (req, res, next) => {
  //make days unique/ search for them and if the user requires creating another document for the same day return an error
  console.log(req.body);
  const memo = await Daily.create(req.body);

  res.status(201).json({
    status: 'success',
    data: memo,
  });
});
exports.getOne = catchAsync(async (req, res, next) => {
  const search = await Daily.findOne({ code: req.params.code });
  res.status(200).json({
    status: 'success',
    data: search,
  });
});
exports.updateMemo = catchAsync(async (req, res, next) => {
  const memo = await Daily.findOneAndUpdate(
    { code: req.params.code },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  const updatedFields = req.body;
  res.status(200).json({
    status: 'success',
    data: updatedFields,
  });
});
exports.deleteAllMemo = catchAsync(async (req, res, next) => {
  const memo = await Daily.deleteMany({});
  res.status(204).json({
    status: 'success',
  });
});
