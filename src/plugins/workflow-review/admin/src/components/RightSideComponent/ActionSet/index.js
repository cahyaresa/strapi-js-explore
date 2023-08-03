import { Box, Button, Dialog, DialogBody, DialogFooter, Divider, Flex, Typography } from '@strapi/design-system';
import { ExclamationMarkCircle, Trash, Write } from '@strapi/icons';
import React, { useState } from 'react'
import { useIntl } from 'react-intl';

function ActionSet() {
  const { formatMessage } = useIntl();
  const [isVisible, setIsVisible] = useState(false);

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
          onClick={() => setIsVisible(true)}
        >
          {formatMessage({
            id: "ask-for-review",
            defaultMessage: "Ask For Review"
          })}
        </Button>
      </Box>
      <Box>
        <Dialog onClose={() => setIsVisible(false)} title="Confirmation" isOpen={isVisible} id="AskReviewDialog">
          <DialogBody icon={<ExclamationMarkCircle />}>
            <Flex direction="column" alignItems="center" gap={2}>
              <Flex justifyContent="center">
                <Typography id="confirm-description">Are you sure you want to delete this?</Typography>
              </Flex>
            </Flex>
          </DialogBody>
          <DialogFooter startAction={<Button onClick={() => setIsVisible(false)} variant="tertiary">
            Cancel
          </Button>} endAction={<Button variant="danger-light" startIcon={<Trash />}>
            Confirm
          </Button>} />
        </Dialog>
      </Box>
    </Box>
  )
}

export default ActionSet;