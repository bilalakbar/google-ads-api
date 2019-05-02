---
type: list
entity: Recommendation
title: List Recommendation
order: 3
---

### List all Recommendation

This `customer.recommendations.list()` method works just like `get`, except that it returns all of the entities in the account. It isn't rate limited, but it can be very slow, so use it sparingly.

```javascript
// Listing all the recommendations in the account
let result = await customer.recommendations.list()

// Listing with constraints and a limited number of results
let result = await customer.recommendations.list({
  constraints: [
    {
      key: 'recommendation.some_field',
      op: '=',
      val: 'yellow submarine',
    },
  ],
  limit: 15,
})
```

```javascript
// Example result
;[
  {
    recommendation: {
      resource_name: 'customers/3827277046/recommendations/MTk5MDY3NzIzLTEzNi0xNTU1OTYzMjEyNTk5LSs5NTMzNjEwMzc',
      campaign: 'customers/3827277046/campaigns/953361037',
      campaign_budget: 'customers/3827277046/campaignBudgets/1234768991',
      dismissed: false,
      type: 5,
    },
    campaign_budget: {
      resource_name: 'customers/3827277046/campaignBudgets/1234768991',
      amount_micros: 100000000,
      delivery_method: 3,
      explicitly_shared: false,
      has_recommended_budget: false,
      id: 1234768991,
      name: 'My campaign budget',
      period: 2,
      reference_count: 1,
      status: 2,
      type: 2,
    },
    ad_group: {
      resource_name: '',
      campaign: 'customers/3827277046/campaigns/953361037',
      id: 0,
      url_custom_parameters: [],
    },
    campaign: {
      resource_name: 'customers/3827277046/campaigns/953361037',
      ad_serving_optimization_status: 5,
      advertising_channel_type: 2,
      bidding_strategy_type: 3,
      campaign_budget: 'customers/3827277046/campaignBudgets/1234768991',
      end_date: '2037-12-30',
      frequency_caps: [],
      geo_target_type_setting: { negative_geo_target_type: 2, positive_geo_target_type: 4 },
      id: 953361037,
      manual_cpc: { enhanced_cpc_enabled: true },
      name: 'My campaign',
      network_settings: {
        target_content_network: false,
        target_google_search: true,
        target_partner_search_network: false,
        target_search_network: false,
      },
      payment_mode: 4,
      selective_optimization: { conversion_actions: [] },
      serving_status: 2,
      start_date: '2017-10-13',
      status: 2,
      targeting_setting: { target_restrictions: [{ targetingDimension: 3, bidOnly: { value: false } }] },
      url_custom_parameters: [],
    },
    customer: {
      resource_name: 'customers/3827277046',
      auto_tagging_enabled: true,
      call_reporting_setting: {
        call_conversion_action: 'customers/3827277046/conversionActions/179',
        call_conversion_reporting_enabled: true,
      },
      conversion_tracking_setting: { conversion_tracking_id: 875176189 },
      currency_code: 'GBP',
      descriptive_name: 'My customer',
      has_partners_badge: false,
      id: 3827277046,
      manager: false,
      remarketing_setting: {
        google_global_site_tag:
          "<!-- Global site tag (gtag.js) - Google Ads: 875176189 -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-875176189\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-875176189');\n</script>\n",
      },
      test_account: false,
      time_zone: 'Europe/London',
      tracking_url_template:
        '{lpurl}?utm_source=adwords&utm_medium=PPC&utm_campaign={campaignid}&utm_term={ifsearch:{keyword}}{ifcontent:{placement}}&utm_content={creative}&network={network}&adgroupid={adgroupid}&matchtype={matchtype}&adposition={adposition}&targetid={targetid}&target={target}&device={device}&devicemodel={devicemodel}',
    },
  },
]
```