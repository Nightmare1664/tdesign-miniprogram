import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import Props from './props';
const { prefix } = config;
const name = `${prefix}-radio`;

const iconDefault = {
  'fill-circle': ['tick_fill', 'circle'],
  'stroke-line': ['tick', ''],
};
@wxComponent()
export default class PullDownRefresh extends SuperComponent {
  externalClasses = ['t-class', 't-class-label', 't-class-icon', 't-class-content'];
  relations = {
    '../radio-group/radio-group': {
      type: 'ancestor' as 'ancestor',
    },
  };
  options = {
    multipleSlots: true,
  };
  lifetimes = {
    attached() {
      const { icon } = this.data;
      const idArr = Array.isArray(icon);
      this.setData({
        active: this.data.checked,
        customIcon: idArr,
        iconVal: !idArr ? iconDefault[icon] : this.data.icon,
      });
    },
  };
  properties = Props;

  data = {
    active: false,
    classPrefix: name,
    classBasePrefix: prefix,
    customIcon: false,
    optionLinked: false,
    iconVal: [],
  };

  methods = {
    onChange(e) {
      if (this.data.disabled) return;
      const { target } = e.currentTarget.dataset;
      const { contentDisabled } = this.data;
      if (target === 'text' && contentDisabled) {
        return;
      }
      const { value, active, optionLinked } = this.data;
      const item = { name: value, checked: !active };
      const [parent] = this.getRelationNodes('../radio-group/radio-group');
      if (parent) {
        parent.updateValue({ name: value });
      } else {
        if (optionLinked) {
          this.triggerEvent('toggleGroupSelect', { name: value });
          return;
        }
        this.triggerEvent('change', !active);
        this.toggle();
      }
    },
    toggle() {
      const { active } = this.data;
      this.setData({
        active: !active,
      });
    },
    changeActive(active: boolean) {
      this.setData({
        active,
      });
    },
    setDisabled(disabled: Boolean) {
      this.setData({
        disabled: this.data.disabled || disabled,
      });
    },
    // 支持options
    setOptionLinked(linked: Boolean) {
      this.setData({
        optionLinked: linked,
      });
    },
  };
}
