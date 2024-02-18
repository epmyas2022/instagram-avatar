import { Router } from "express";
import AvatarController from "../app/controllers/AvatarController.js";
import { Call} from "../app/utils/call.js";
const router = Router();


router.get('/v1/avatar/:username', Call(AvatarController.getAvatar));

router.get('/v1/info/:username', Call(AvatarController.infoBio));

export default router;