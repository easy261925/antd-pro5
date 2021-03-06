import { Tag, Space, Tooltip } from 'antd';
import { BranchesOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Settings from '../../../config/defaultSettings'
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <Tooltip title={`当前版本:${Settings.version}`}>
        <BranchesOutlined />
        <span style={{ color: '#fff', marginLeft: 8 }}>{Settings.version}</span>
      </Tooltip>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
