const Tasks = require("../models/admin.model");

const getAllFunction = async (req, res) => {
  // const {id:TaskId} = req.params;
  // const {body:data} = req.body;

  try {
    const task = await Tasks.find({});
    const starting = performance.now();
    const ending = performance.now();
    const finalresult = starting - ending;
    res.status(201).json({
      Success: true,
      Response_time: finalresult,
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({ Sucess: false, messag: "INTERNAL SERVER ERROR" });
  }
};

const postFunction = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    const starting = performance.now();
    const ending = performance.now();
    const finalresult = starting - ending;
    res.status(201).json({
      Success: true,
      Response_time: finalresult,
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({ Success: false, message: "INTERNAL SERVER ERROR" });
  }
};

const getbyidFunction = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    const task = await Tasks.findOne({
      _id: id,
    });
    const starting = performance.now();
    const ending = performance.now();
    const finalresult = starting - ending;
    res.status(201).json({
      Success: true,
      Response_time: finalresult,
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({
      Sucess: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const updateFunction = async (req, res) => {
  const { id: newId } = req.params;
  const { body: newBody } = req.body;
  try {
    const task = await Tasks.findOneAndUpdate(
      {
        _id: newId,
      },
      req.body
    );
    if (!task) {
      res.status(404).json({ message: `cannot found ${req.params.id}` });
    }
    const starting = performance.now();
    const ending = performance.now();
    const finalresult = starting - ending;
    res.status(201).json({
      Success: true,
      Response_time: finalresult,
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({
      Success: false,
      messge: "INTERNAL SERVER ERROR",
    });
  }
};

const deleteFunction = async (req, res) => {
  const { id: newId } = req.params;

  try {
    const task = await Tasks.findOneAndDelete({
      _id: newId,
    });

    if (!task) {
      res.status(404).json({ message: `Could not find ${req.params.id}` });
    }

    const starting = performance.now();
    const ending = performance.now();
    const finalresult = starting - ending;
    res.status(201).json({
      Success: true,
      Response_time: finalresult,
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({
      Success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
module.exports = {
  getAllFunction,
  postFunction,
  getbyidFunction,
  updateFunction,
  deleteFunction,
};
