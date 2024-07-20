import { abortController } from "../utils/abort-controller.util";
import { AxiosInstanceSingletone } from "./api.service";

export class BaseRestService<
  TFindOneResponse,
  TFindAllResponse,
  TCreateBody,
  TUpdateBody
> {
  protected readonly _axiosInstance = AxiosInstanceSingletone.getInstance();
  protected readonly resourceUrl: string;
  constructor(resourceUrl: string) {
    if (resourceUrl.endsWith("/")) {
      this.resourceUrl = resourceUrl;
    } else {
      this.resourceUrl = resourceUrl + "/";
    }
  }

  getAll() {
    const controller = abortController();
    return {
      call: this._axiosInstance.get<TFindAllResponse[]>(this.resourceUrl, {
        signal: controller.signal,
      }),
      controller,
    };
  }

  getById(id: number) {
    const controller = abortController();
    return {
      call: this._axiosInstance.get<TFindOneResponse>(this.resourceUrl + id, {
        signal: controller.signal,
      }),
      controller,
    };
  }

  create(body: TCreateBody) {
    const controller = abortController();
    return {
      call: this._axiosInstance.post(this.resourceUrl, body, {
        signal: controller.signal,
      }),
      controller,
    };
  }

  update(id: number, body: TUpdateBody) {
    const controller = abortController();
    return {
      call: this._axiosInstance.patch<TUpdateBody>(
        this.resourceUrl + id,
        body,
        {
          signal: controller.signal,
        }
      ),
      controller,
    };
  }

  remove(id: number) {
    const controller = abortController();
    return {
      call: this._axiosInstance.delete(this.resourceUrl + id, {
        signal: controller.signal,
      }),
      controller,
    };
  }
}
