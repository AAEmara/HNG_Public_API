class ApiController {
  static getInfo(req, res) {
    try {
      return res.status(200).json({
        "email": "abdelrahmanemara18@gmail.com",
        "current_datetime": new Date().toISOString(),
        "github_url": "https://github.com/AAEmara/HNG_Public_API.git"
      });
    } catch (error) {
      return res.status(500).json({
        error: "Server Internal error. Please try again later."
      });
    }
  }
}

export default ApiController;
