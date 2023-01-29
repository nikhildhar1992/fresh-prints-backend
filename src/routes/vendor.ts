import express, { Request, Response } from "express"
import {updateStock} from "../controller/vendor";
export const vendorRouter = express.Router();


vendorRouter.route('/update-stock').post(updateStock);
// export ven