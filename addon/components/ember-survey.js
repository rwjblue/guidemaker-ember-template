import Component from '@ember/component';
import layout from '../templates/components/ember-survey';

import { getOwner } from '@ember/application';

export default Component.extend({
  layout,
  tagName: '',
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    this.config = config['survey'];
  },
});
