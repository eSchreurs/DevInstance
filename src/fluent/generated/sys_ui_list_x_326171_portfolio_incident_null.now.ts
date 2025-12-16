import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_326171_portfolio_incident',
    view: default_view,
    columns: ['number', 'description', 'opened_at', 'priority', 'resolved_at', 'short_description', 'status'],
})
