import { APIType, EndPoint } from 'core/base/enum';
import { IProfile } from 'core/base/type';
import { ServiceBase } from 'core/http/service-base';

export class ProfileService extends ServiceBase {
  public static async getProfile() {
    return this.sendToGateway<IProfile>({
      url: EndPoint.appProfile,
      method: APIType.GET,
    });
  }
}
