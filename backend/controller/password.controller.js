import PasswordModel from "../models/password.models.js";

class PasswordController {
  //add the password
  async addPassword(req, res) {
    try {
      const response = await PasswordModel.create({ ...req.body });
      res
        .status(200)
        .json({ success: true, message: "successfully upload data", response });
    } catch (error) {
      console.log(`\nerror in adding password ${error}\n`);
      res
        .status(200)
        .json({ success: false, message: "Unable to add the password" });
    }
  }
  //delete
  async deletePassword(req, res) {
    const { id } = req.params;

    try {
      const response = await PasswordModel.findByIdAndDelete({ _id: id });
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ success: false, message: "unable to delete" });
      console.log(`error in delete the password ${error}`);
    }
  }
  //editing password.
  async editPassword(req, res) {
    const { id } = req.params;
    const response = await PasswordModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).json(response);
  }
  //getting data means show all the data in the frontend
  async getPassword(req, res) {
    const response = await PasswordModel.find();
    res.status(200).json(response);
  }
}
export default PasswordController;
