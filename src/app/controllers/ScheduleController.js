import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
    async index(req, res) {
         const checkUserProvider = await User.findOne({
             where: {
                 id: req.userId,
                 provider: true,
             },
         });

         if (!checkUserProvider) {
             return res.status(401).json({ error: 'User is not a provider'});
         }
        
         const { date } = req.query;
         
         return res.json({ date });


        }
    }

export default new ScheduleController();