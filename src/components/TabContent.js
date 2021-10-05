import React, { useEffect } from 'react';

const TabContent = (props) => {

  useEffect(() => {
    props.setAniSwitch(true);
  });

  return <div>{props.selectTab}번째 내용입니다</div>
}

export default TabContent;