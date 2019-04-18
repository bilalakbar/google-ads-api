module.exports = {
    name: 'CampaignLabel',
    object: {
        campaign: { _type: 'string', _description: 'The campaign to which the label is attached.' },
        resource_name: {
            _type: 'string',
            _description:
                'Name of the resource.\nCampaign label resource names have the form:\n`customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}`',
        },
        label: { _type: 'string', _description: 'The label assigned to the campaign.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}