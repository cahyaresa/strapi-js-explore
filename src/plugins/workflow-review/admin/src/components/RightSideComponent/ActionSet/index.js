import { Box, Button, Divider, Typography } from '@strapi/design-system';
import { Write } from '@strapi/icons';
import React from 'react'
import { useIntl } from 'react-intl';

function ActionSet() {
  const { formatMessage } = useIntl();

    return (
        <Box>
          <Typography variant='sigma' textColor="neutral600" id="workflow">
            {formatMessage({
              id: "workflow-review",
              defaultMessage: "Workflow Review Plugin"
            })}
          </Typography>
          <Box paddingTop={4} paddingBottom={4}>
            <Divider />
          </Box>
          <Box paddingTop={1}> 
            <Button
            fullWidth
            variant="primary"
            startIcon={<Write />}
            onClick={() => console.log("clicked")}
            >
              {formatMessage({
                id: "ask-for-review",
                defaultMessage: "Ask For Review"
              })}
            </Button>
          </Box>
        </Box>
    )
}

export default ActionSet;