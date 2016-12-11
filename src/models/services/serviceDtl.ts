export interface IServiceDtl{
    $key?: string;
    creator:string;
    serviceDesc: string;
    serviceLocation: string;
    skillSets: string;
    status: string;
    teamSize: string;
    timestamp: number;
}

export class ServiceDtl implements IServiceDtl{
    
    creator:string;
    serviceDesc: string;
    serviceLocation: string;
    skillSets: string;
    status: string;
    teamSize: string;
    timestamp: number;

    constructor(creator:string,
                serviceDesc: string,
                serviceLocation: string,
                skillSets: string,
                status: string,
                teamSize: string ){
        this.creator = creator;
        this.serviceDesc = serviceDesc;
        this.serviceLocation = serviceLocation;
        this.skillSets = skillSets;
        this.status =status;
        this.teamSize = teamSize;
    }

}