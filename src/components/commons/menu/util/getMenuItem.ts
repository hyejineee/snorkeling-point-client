import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
) => {
  return { key, icon, children, label, type } as MenuItem;
};
