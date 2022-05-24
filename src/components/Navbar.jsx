import React, {useState, useEffect} from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MeneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import "../App.css";


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleReSize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleReSize);
    handleReSize();

    return () => window.removeEventListener('resize', handleReSize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else
      setActiveMenu(true);
  }, [screenSize])
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}>
            <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">CryptoCurrencies</Link>
          </Menu.Item>
          {/* <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item> */}
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default Navbar