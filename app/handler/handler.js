import { BadRequestException } from "../utils/exceptions.js";
import httpCode from "../utils/httpCode.js";
export default function handler({ exception, response }) {

  if (exception instanceof BadRequestException)
    return response
      .status(httpCode.BAD_REQUEST)
      .json({ error: exception.message });


    return response
      .status(httpCode.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error", message: exception.message});
}
