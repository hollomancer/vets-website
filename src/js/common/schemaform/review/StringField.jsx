import React from 'react';
import _ from 'lodash/fp';

import {
  getUiOptions,
  getWidget,
  optionsList
} from 'react-jsonschema-form/lib/utils';

/*
 * This is a minimal string field implementation for the
 * review page, so we can pass custom review widgets
 * in the config
 */
export default function StringField(props) {
  const { registry, schema, uiSchema, formData } = props;
  const enumOptions = Array.isArray(schema.enum) && optionsList(schema);

  let Widget = _.get('ui:reviewWidget', uiSchema);
  if (!Widget) {
    const defaultWidget = schema.format || (enumOptions ? 'select' : 'text');
    const options = getUiOptions(uiSchema);
    Widget = getWidget(schema, options.widget || defaultWidget, registry.widgets);
  }

  return (
    <Widget
        options={{ enumOptions }}
        value={formData}
        {...props}/>
  );
}