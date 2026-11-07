# Node-RED Dashboard 2.0 Migration Script

This module provides a script with which you can pass in a Dashboard 1.0 flow, and in return, you will receive a Dashboard 2.0 flow.

Please note that this script does not cover everything, see below for a list of currently supported nodes that can be migrated. The script will be improved over time, and we're open to pull requests to enhance it's functionality.

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
- `ui_text_input` - converted to Dashboard 2.0's `ui-text-input`
    - `.tooltip` is not supported
- `ui_toast` - converted to Dashboard 2.0's `ui-notification`
- `ui_numeric` - converted to Dashboard 2.0's `ui-numeric-input`
    
### Config Nodes

- `ui_tab` - converted to Dashboard 2.0's `ui-page`
- `ui_group` - converted to Dashboard 2.0's `ui-group`

### Added

- `ui-base` - Not included in a Dashboard 1.0 `flow.json` export, so we create a standard default in it's place.
- `ui-theme` - Not included in a Dashboard 1.0 `flow.json` export, so we create a standard default in it's place.

## Not Yet Supported:

- `ui_date_picker` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/22)
- `ui_colour_picker` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/23)
- `ui_gauge` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/26)
- `ui_chart` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/27)
- `ui_audio` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/28)
- `ui_control` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/30)
- `ui_template` - [link](https://github.com/FlowFuse/node-red-dashboard-2-migration/issues/31)

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

## Release process

In this project, the [Release Please](https://github.com/googleapis/release-please) is used to automatically determine the next release version based on the commit messages in the codebase.

By using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), the project adheres to a standardized format for commit messages, which `Release Please` uses to determine whether the next release should be a major, minor, or patch release.

### Components

1. The `Prepare release` GitHub Action workflow:

    * A Release Please action that analyzes commit messages to determine the type of release required (major, minor, patch) based on the Conventional Commits specification
    * Creates a pre-release pull request with the proposed version bump and changelog
    * Once merged, automatically updates the version number in `package.json` and creates a new release on GitHub with the appropriate changelog

2. The `Lint Pull Request Title` GitHub Action workflow:

    * A workflow that runs on pull request creation and uses the `amannn/action-semantic-pull-request` action to validate that pull request titles follow the Conventional Commits format
    * Together with adjusted default merge commit message, this ensures that all commits merged into the main branch adhere to the expected format, allowing Release Please to function correctly

3. The `Publish Release` GitHub Action workflow:

    * A workflow that runs when a new git tag in `v*.*.*` format is pushed, runs the tests, builds the package and publishes the new version to the public npm registry using the `JS-DevTools/npm-publish` action

### Pull Request Title Format

The Conventional Commits preset expects pull request titles to be in the following format:

```
<type>(<scope>): <subject>
```

* Type: Describes the category of the commit. Examples include:
    * `feat`: A new feature (triggers a minor version bump).
    * `fix`: A bug fix (triggers a patch version bump).
    * `perf`: A code change that improves performance (triggers a patch version bump).
    * `refactor`: A code change that neither fixes a bug nor adds a feature (does not trigger a release unless it's accompanied by a BREAKING CHANGE).
    * `docs`: Documentation-only changes (does not trigger a release).
    * `chore`: Changes to the build process or auxiliary tools and libraries (does not trigger a release).
* Scope: An optional part that provides additional context about what was changed (e.g., module, component).
* Subject: A brief description of the changes.

### Handling Breaking Changes

To indicate a breaking change, the exclamation mark `!` should be used immediately after the type/scope:

* `feat!:`
* `fix!:`
* `refactor!:`
