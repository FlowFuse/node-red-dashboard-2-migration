# Node-RED Dashboard 2.0 Migration Script

This module provides a script with which you can pass in a Dashboard 1.0 flow, and in return, you will receive a Dashboard 2.0 flow.

Please note that this script does not cover everything, see below for a list of currently supported nodes that can be migrated. The script will be improved over time, and we're open to pull requests to enhance it's functionality.

## Usage

### Terminal

To run this module from the terminal, you can run:

```bash
cd path/to/your/node-red-dashboard-2-migration
node migrate path/to/your/flow.json
```

The script whn then print to the terminal a valid `flow.json` which you can copy and paste into your Node-RED editor, via Node-RED's import functionality.

### JavaScript

To run this module from within a `js` environment, you can run:

```js
const d1flow = require('./path/to/your/flow.json')
const MigrateDashboard = require('node-red-dashboard-2-migration')
const d2flow = MigrateDashboard.migrate(d1flow)
```


## Supported Nodes

- `ui_tab` - converted to Dashboard 2.0's `ui-page`
- `ui_group` - converted to Dashboard 2.0's `ui-group`

### Added

- `ui-base` - Not included in a Dashboard 1.0 `flow.json` export, so we create a standard default in it's place.
- `ui-theme` - Not included in a Dashboard 1.0 `flow.json` export, so we create a standard default in it's place.

