import React from 'react';

import { Box } from '@strapi/design-system';

// @ts-ignore
import { useCMEditViewDataManager } from '@strapi/helper-plugin';


import _ from 'lodash';
import ActionSet from './ActionSet';

const RightSideComponent = () => {
  const { modifiedData } = useCMEditViewDataManager();
  if(modifiedData.hasOwnProperty('seo')){
    return (
      <Box
        background="neutral0"
        borderColor="neutral150"
        hasRadius
        paddingBottom={4}
        paddingLeft={4}
        paddingRight={4}
        paddingTop={6}
        shadow="tableShadow"
      >
        <ActionSet /> 
      </Box>
    );
  }
    return<></>;
  
};

export default RightSideComponent;

