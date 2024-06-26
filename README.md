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

The script will then print to the terminal a valid `flow.json` which you can copy and paste into your Node-RED editor, via Node-RED's import functionality.

### JavaScript

To run this module from within a `js` environment, you can run:

```js
const d1flow = require('./path/to/your/flow.json')
const MigrateDashboard = require('node-red-dashboard-2-migration')
const d2flow = MigrateDashboard.migrate(d1flow)
```


## Supported Nodes

### Nodes

- `ui_text` - converted to Dashboard 2.0's `ui-text`
- `ui_form` - converted to Dashboard 2.0's `ui-form`
- `ui_button` - converted to Dashboard 2.0's `ui-button`
- `ui_dropdown` - converted to Dashboard 2.0's `ui-dropdown`
- `ui_switch` - converted to Dashboard 2.0's `ui-switch`
    - `.tooltip` is not supported
    - `.decouple` is not supported
    - `.animate` is not supported
- `ui_slider` - converted to Dashboard 2.0's `ui-slider`
    
### Config Nodes

- `ui_tab` - converted to Dashboard 2.0's `ui-page`
- `ui_group` - converted to Dashboard 2.0's `ui-group`

### Added

- `ui-base` - Not included in a Dashboard 1.0 `flow.json` export, so we create a standard default in it's place.
- `ui-theme` - Not included in a Dashboard 1.0 `flow.json` export, so we create a standard default in it's place.

## Not Yet Supported:

- `ui_numeric` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/20)
- `ui_text_input` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/21)
- `ui_date_picker` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/22)
- `ui_colour_picker` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/23)
- `ui_gauge` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/26)
- `ui_chart` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/27)
- `ui_audio` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/28)
- `ui_toast` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/29)
- `ui_control` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/30)
- `ui_template` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/31)