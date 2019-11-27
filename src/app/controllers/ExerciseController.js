import Exercise from '../models/Exercise';
import { Op } from 'sequelize';

class ExerciseController {
  async index(req, res) {
    const { avg, subject } = req.body;
    console.log("subject: ", subject)
    const query = [{ min_age: { $gt: avg } }]//, { max_age: { $lt: avg } }

    try {
      const exercise = await Exercise.findAll({
        where: { subject, min_age: { [Op.lte]: avg }, max_age: { [Op.gte]: avg } }
      });
      console.log("Log: ", exercise)
      return res.json(exercise);
    } catch (error) {
      console.log("Error: ", error)
    }

  }
}

export default new ExerciseController();
