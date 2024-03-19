import { bookModel } from '../model/model.js';
export const controlPath = {
  getAll: async (req, res) => {
    try {
      const data = await bookModel.find({});

      if (data && data.length > 0) {
        return res.status(200).json({
          message: `Take data success`,
          count: data.length,
          data: data,
        });
      }
      return res.status(400).json({
        message: `Take data fail`,
        name: error.message,
        message: error.message,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const data = await bookModel.findById(req.params.id);

      if (!data) {
        return res.status(400).json({
          message: `Take data fail`,
          name: error.message,
          message: error.message,
        });
      }
      return res.status(201).json({
        message: `Take data success`,
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  add: async (req, res) => {
    try {
      const data = await bookModel.create(req.body);

      if (!data) {
        return res.status(400).json({
          message: `Take data fail`,
          name: error.message,
          message: error.message,
        });
      }
      return res.status(201).json({
        message: `Create data success`,
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      const data = await bookModel.findByIdAndUpdate(
        `${req.params.id}`,
        req.body,
        {
          new: true,
        }
      );

      if (!data) {
        return res.status(400).json({
          message: `Take data fail`,
          name: error.message,
          message: error.message,
        });
      }
      return res.status(200).json({
        message: `Update data success`,
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  hide: async (req, res) => {
    try {
      const data = await bookModel.findByIdAndUpdate(
        `${req.params.id}`,
        { hide: true },
        { new: true }
      );

      if (!data) {
        return res.status(400).json({
          message: `Take data fail`,
          name: error.message,
          message: error.message,
        });
      }
      return res.status(201).json({
        message: `Hide data success`,
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const data = await bookModel.findByIdAndDelete(req.params.id);

      if (data) {
        return res.status(200).json({
          message: `Take data success`,
          data: data,
        });
      }
      return res.status(400).json({
        message: `Take data fail`,
        name: error.message,
        message: error.message,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
};
