import { Request, Response } from "express";

// update stock function
// data to update
// {
//     "appCodes": [
//         {"appCode": "hatMedium", "price": 5000}, {"appCode": "hatLarge", "price": 50}]
// }
export const updateStock = async(req: Request, res: Response) => {
    console.log(req.body.appCodes);
    const allAppCodes = req.body.appCodes;
    if (allAppCodes && allAppCodes.length) {
        for (let i = 0; i < allAppCodes.length; i++) {
            // update query by reading json file 
        }
    }
    res.status(200).json({msg: "req"})
    // select 
}

// customer requirement
// {
//     "appCode": ""
// }
export const userRequirement = async(req: Request, res: Response) => {
    console.log(req.body.appCode);
    if (req.body.appCode) {
        // update query
    }
    res.status(200).json({msg: "req"})
    // select 
}

