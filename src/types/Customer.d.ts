
import Campaigns from '../entities/Campaigns'
import CampaignBudgets from '../entities/CampaignBudgets'
import AdGroups from '../entities/AdGroups'
import AdGroupAds from '../entities/AdGroupAds'
import Keywords from '../entities/Keywords'

import { UpdateConfig } from './Global'

declare namespace Customer {
    /**
     *  Customer Instance Interface
     * @interface
     */
    export interface Customer {
        campaigns: Campaigns,
        campaignBudgets: CampaignBudgets,
        adgroups: AdGroups,
        ads: AdGroupAds,
        keywords: Keywords,
        retrieve: () => Promise<any>,
        search: (query: string) => Promise<any>,
        // update: (config: UpdateConfig) => Promise<any>
    }

}
export = Customer