import { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PROJECT_NAME } from '../src/utils/CONSTANTS'
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
  version?: string;
} = {
  version: '1.0.0',
  navTheme: 'light',
  primaryColor: '#255796',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  headerHeight: 48,
  footerRender: false,
  title: PROJECT_NAME,
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
