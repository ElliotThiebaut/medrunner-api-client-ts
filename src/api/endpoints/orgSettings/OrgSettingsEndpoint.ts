import { Logger } from "ts-log";

import { HeaderProvider } from "../../../Func";
import { PublicOrgSettings } from "../../../models/OrgSettings";
import ApiResponse from "../../ApiResponse";
import ApiEndpoint from "../ApiEndpoint";
import TokenManager from "../auth/TokenManager";

/**
 * Endpoints for interacting with the public org settings.
 * */
export default class OrgSettingsEndpoint extends ApiEndpoint {
  constructor(baseUrl: string | undefined, tokenManager: TokenManager, log?: Logger, headerProvider?: HeaderProvider) {
    super(baseUrl, tokenManager, log, headerProvider);
  }

  protected override endpoint(): string {
    return "orgsettings";
  }

  /**
   * Get the public org settings.
   *
   * */
  public async getPublicSettings(): Promise<ApiResponse<PublicOrgSettings>> {
    return await this.getRequest<PublicOrgSettings>(`/public`);
  }
}
