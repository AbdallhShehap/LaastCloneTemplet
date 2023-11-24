import React, { useState } from 'react';

const Tab = ({ children, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    marginRight: "10px",
    paddingRight: "10px",
    paddingBottom: "20px",
    borderBottom: isSelected ? '2px solid black' : '',
    color: (isSelected || isHovered) ? 'white' : '#D0D0D0',
    cursor: 'pointer',
    position: 'relative',
  };

  const lineStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: isSelected ? '2px' : '0',
    width: '100%',
    backgroundColor: 'white',
    transition: 'height 0.3s', // Smooth transition for the line
  };

  return (
    <div
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div style={lineStyle}></div>
    </div>
  );
};

const TabPanel = ({ children, isSelected }) => {
  return isSelected ? children : null;
};

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('HighStandards');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'start', fontFamily:"sans-serif" }}>
        <Tab isSelected={selectedTab === 'HighStandards'} onClick={() => setSelectedTab('HighStandards')}>
          High Standards
        </Tab>
        <Tab isSelected={selectedTab === 'FocusOnPeople'} onClick={() => setSelectedTab('FocusOnPeople')}>
          Focus on People
        </Tab>
      </div>
      <div>
        <TabPanel isSelected={selectedTab === 'HighStandards'}>
          <p style={{ fontSize: "13px", width: "350px", height: "300px",
              fontFamily:"sans-serif" ,marginTop:"20px"}}>Through our years of experience, we've also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.

This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
        </TabPanel>
        <TabPanel isSelected={selectedTab === 'FocusOnPeople'}>
          <p style={{ fontSize: "13px", width: "350px", height: "300px" ,fontFamily:"sans-serif",marginTop:"20px"}}>lows us to deliver a specialist business consultancy service.
This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.
This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.
This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.</p>
        </TabPanel>
      </div>
    </div>
  );
};

export default Tabs;
