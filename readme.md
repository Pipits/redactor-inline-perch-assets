# Redactor plugin: inline Perch Assets

The plugin enables users to upload/select assets from the Perch Assets system. Images are displayed inline in the text box of the Redactor Editor.

## Sponsor

This plugin is sponsored by [Sly Design](https://www.sly-design.co.uk/perch-cms/?utm_source=grabapipit).

## Requirements

- Perch or Perch Runway 3.0 or higher
- A Javascript-enabled browser


## Installation

- Download the latest version
- Unzip the download
- Place the folder `pipit_inlineperchassets` in `addons/plugins/editors/redactor-plugins`


## Configuration

General custom editor configurations guide can be found in [Perch Documentation](https://docs.grabaperch.com/api/editors/).

### Enable custom configuration

In your config file:

```php
define('PERCH_CUSTOM_EDITOR_CONFIGS', true);
```

### Adding user configuration for editors

Create a Javascript file `addons/plugins/editors/config.js`. A guide on how to create one can be found in [Perch Documentation](https://docs.grabaperch.com/api/editors/).

Your download includes a sample config file which you can use as a reference.


## Image upload attributes

The plugin supports the image upload attributes such as `imagewidth` and `imageheight` as listed in [Perch Documentation](https://docs.grabaperch.com/templates/field-types/textarea/)