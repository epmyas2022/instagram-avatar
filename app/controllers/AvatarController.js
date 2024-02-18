import scrapingService from "../services/scraping.service.js";
import httpCode from "../utils/httpCode.js";
import { NotFoundException } from "../utils/exceptions.js";
const { getInfoUser, getStreamImage } = scrapingService;
import InfoBioResource from "../resources/infoBioResource.js";
import handler from "../handler/handler.js";

export default class AvatarController {
  static async getAvatar(req, res) {
    try {
      const { username } = req.params;

      const { user } = await getInfoUser({ username });

      if (!user) throw new NotFoundException(`User ${username} not found`);

      const avatarStreamImage = await getStreamImage(user?.profile_pic_url_hd);

      res.set({ "Content-Type": "image/jpg" });
      return avatarStreamImage.pipe(res);
    } catch (e) {
      handler({ exception: e, response: res });
    }
  }

  static async infoBio(req, res) {
    try {
      const { user } = await getInfoUser({ username: req.params.username });

      return res.json(new InfoBioResource({data: user}));

    } catch (e) {
      handler({ exception: e, response: res });
    }
  }
}
