import { IAgencyService } from "./types";
import {
  IAgencyRequestEditParams,
  IAgencyEntity,
  IAgencyRequestParams,
  IAgencyRequestDeleteParams,
  IAgencyItemEntity,
} from "../../entities/Agency/types";
import { IAgencyRepository } from "../../repositories/Agency/types";
import { Agency, AgencyItem } from "../../entities/Agency";

export class AgencyService implements IAgencyService {
  constructor(private repository: IAgencyRepository) {}

  async getAgency(params: IAgencyRequestParams): Promise<IAgencyEntity> {
    const agency = await this.repository.getAgency(params);

    return new Agency(agency);
  }

  async editAgency(params: IAgencyRequestEditParams): Promise<IAgencyEntity> {
    const agency = await this.repository.editAgency(params);

    return new Agency(agency);
  }

  async deleteAgency(
    params: IAgencyRequestDeleteParams
  ): Promise<IAgencyEntity> {
    const agency = await this.repository.deleteAgency(params);

    return new Agency(agency);
  }

  async getList(): Promise<IAgencyItemEntity[]> {
    const agencies = await this.repository.getList();

    return agencies.map((agency) => new AgencyItem(agency));
  }
}
