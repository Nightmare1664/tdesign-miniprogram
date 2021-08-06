interface Config {
  title: string;
  tConfirmBtn: string;
  content: string;
  confirmBtn: string;
  cancelBtn: string;
  buttonLayout: 'horizontal' | 'vertical';
  actions: boolean | { name: string; primary?: boolean; style?: string }[];
}

const dialogConfig: Config = {
  title: '',
  tConfirmBtn: '',
  content: '',
  confirmBtn: '',
  cancelBtn: '',
  buttonLayout: 'horizontal',
  actions: false,
};

const modelConfigFactory = (opt: Partial<Config>) => {
  return {
    ...dialogConfig,
    ...opt,
  };
};

Page({
  data: {
    fixed: true,
    visible: true,
    demoType: 'slot-left',
    showBack: '',
    showHome: '',

    operList: [
      {
        title: '基础使用',
        btns: [
          {
            type: 'base-default',
            text: '默认样式',
          },
          {
            type: 'base-color',
            text: '设置颜色、字号和背景',
          },
          {
            type: 'base-transparent',
            text: '透明背景',
          },
          {
            type: 'base-capsule-style',
            text: '胶囊自定义样式',
          },
        ],
      },
      {
        title: '按钮，默认情况下，栈深度>1显示才back，不显示home',
        btns: [
          {
            type: 'btn-default',
            text: '默认按钮(栈深度>1显示才back，不显示home)',
          },
          {
            type: 'btn-back-always',
            text: '总是显示 back 按钮',
          },
          {
            type: 'btn-home-always',
            text: '总是显示 home 按钮',
          },
        ],
      },
      {
        title: 'fixed',
        btns: [
          {
            type: 'fixed-default',
            text: '默认为 fixed',
          },
          {
            type: 'fixed-none',
            text: '可取消 fixed',
          },
        ],
      },
      {
        title: 'visible',
        btns: [
          {
            type: 'visible-default',
            text: '显示',
          },
          {
            type: 'visible-none',
            text: '不显示',
          },
        ],
      },
    ],
    slotList: [
      {
        title: '插槽',
        btns: [
          {
            type: 'slot-left',
            text: '左侧胶囊位置插槽，需showHome、showBack="none"',
          },
          {
            type: 'slot-center',
            text: '中间位置插槽，需title设置为空字符串',
          },
        ],
      },
    ],
  },

  /** 切换 navbar 示例 */
  clickHandle(e) {
    const key = e.detail;
    switch (key) {
      case 'btn-default': {
        this.setData({
          showBack: '',
          showHome: '',
        });
        return;
      }
      case 'btn-back-always': {
        this.setData({
          showBack: 'always',
        });
        return;
      }
      case 'btn-home-always': {
        this.setData({
          showHome: 'always',
        });
        return;
      }
      case 'fixed-default': {
        this.setData({
          fixed: true,
        });
        return;
      }
      case 'fixed-none': {
        this.setData({
          fixed: false,
        });
        return;
      }
      case 'visible-default': {
        this.setData({
          visible: true,
        });
        return;
      }
      case 'visible-none': {
        this.setData({
          visible: false,
        });
        return;
      }
      default: {
        this.setData({
          demoType: key,
        });
        break;
      }
    }
  },
});
