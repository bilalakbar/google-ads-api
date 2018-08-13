import { Entity } from './Entity'

import { NewEntityConfig } from './Entity';

declare namespace CampaignBudget {
    /**
     * Main Campaign Interface
     * @interface
     */
    export interface CampaignBudget extends Entity {
        // resource_name: string
        // id: string
        // name: string
        amount_micros: string
        status: BudgetStatus
        delivery_method: DeliveryMethod
        explicitly_shared: boolean
        reference_count: string
    }
    /**
     * Enum for DeliveryMethod
     * @readonly
     * @enum {string}
     */
    enum DeliveryMethod {
        STANDARD = 'STANDARD',  
        ACCELERATED = 'ACCELERATED',
        UNKNOWN = 'UNKNOWN',
        UNSPECIFIED = 'UNSPECIFIED'
    }

    /**
     * Enum for BudgetStatus
     * @readonly
     * @enum {string}
     */
    enum BudgetStatus {
        ENABLED = 'ENABLED',
        REMOVED = 'REMOVED',
        PAUSED = 'PAUSED',
        UNSPECIFIED = 'UNSPECIFIED',
    }

    /**
     * Interface for NewCampaignBudgetConfig
     * @interface
     */
    export interface NewCampaignBudgetConfig extends NewEntityConfig {
        amount_micros: string|number,
        explicitly_shared: boolean
    }

}
export = CampaignBudget