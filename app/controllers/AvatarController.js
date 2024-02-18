import scrapingService from "../services/scraping.service.js";
import httpCode from "../utils/httpCode.js";

const { getInfoUser, getStreamImage } = scrapingService;
import handler from "../handler/handler.js";

export default class AvatarController {
  static async index(req, res) {
    try {
      const { username } = req.query;

      const { user } = await getInfoUser({ username });

      if (!user)
        return res.status(httpCode.NOT_FOUND).json({ error: "User not found" });

      const avatarStreamImage = await getStreamImage(user?.profile_pic_url_hd);

      res.set({'Content-Type': 'image/jpg'});
      return avatarStreamImage.pipe(res);
    } catch (e) {
      handler({ exception: e, response: res });
    }
  }
}
