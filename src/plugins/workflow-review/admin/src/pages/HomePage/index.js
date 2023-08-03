/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { BaseHeaderLayout, Box, Button, ContentLayout, EmptyStateLayout, Flex } from '@strapi/design-system';
import { EmptyDocuments, Write } from '@strapi/icons';
import ListArticle from '../../components/list-article';

import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
  SubNavLinkSection,
} from '@strapi/design-system';


const HomePage = () => {
  const [reviewData, setReviewData] = React.useState([]);
  const [showModel, setShowModel] = useState(false);
  return (

    <Box>
      <Flex>
        <Box>
          <SubNav ariaLabel={""}>
            <div>MEnu 1</div>
          </SubNav>
        </Box>
        <Box>
          <BaseHeaderLayout
            title={pluginId}
            subtitle="Test Plugin"
            as="h2"
          />
          <ContentLayout>
            <Flex direction="column" alignItems="start" gap={10}>
              {reviewData.length == 0 ?
                <Box style={{ alignSelf: 'stretch' }} background="neutral0" padding="0" hasRadius={true}>
                  <EmptyStateLayout icon={<EmptyDocuments width='500' />} content="You don't have any article ask to review yet..." action={<Button variant="secondary" startIcon={<Write />}>
                    Review Article
                  </Button>} />
                </Box>
                :
                'thereData'
              }
              <ListArticle />
              <Box style={{ alignSelf: 'stretch' }} background="neutral0" padding="32px" hasRadius={true}>
                <Flex direction="column" alignItems="start" gap={6}>

                  <p>HAlo in test title section</p>

                </Flex>
              </Box>
            </Flex>
          </ContentLayout>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
