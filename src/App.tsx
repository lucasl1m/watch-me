import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />
    </div>
  );
};
