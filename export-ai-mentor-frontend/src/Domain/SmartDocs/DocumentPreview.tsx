import { Box,  Button,  Text,  Paper,  Group,  ActionIcon,  Divider,} from '@mantine/core';
import {  IconCheck,  IconPrinter,  IconDownload,  IconMail,  IconFileDescription, IconFileTypeDocx, IconFileTypePdf } from '@tabler/icons-react';

function DocumentPreview() {
  return (
    <div className="p-8 min-h-screen flex justify-center">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Left Panel: Generate & Share */}
        <div className="flex-1">
          <div className="text-4xl font-bold pb-5">
            Step 3 :  Generate & Share
          </div>

          <Paper withBorder p="lg" className="shadow-sm">
            <Button
              fullWidth
              size="lg"
              className="bg-black hover:bg-gray-800 text-white"
            >
              Generate Document
            </Button>

            <Box className="mt-8">
              <Group gap="xs" align="center">
                <IconCheck size={20} className="text-green-500" />
                <Text className="font-medium">
                  Your Commercial Invoice has been generated.
                </Text>
              </Group>

              <Text size="sm" className="ml-7 mt-1 text-gray-600">
                Sent to buyer:{' '}
                <span className="font-medium text-gray-600">
                  trade@buyercompany.com
                </span>
              </Text>

              <Text size="sm" className="ml-7 text-gray-600">
                Saved in: <span className="font-medium">SmartDocs History</span>
              </Text>

              <Group gap="md" className="mt-4 ml-7">
                <Button
                  variant="subtle"
                  className="text-gray-600 hover:underline px-0"
                >
                  Generate Another Document
                </Button>
                <Button
                  variant="subtle"
                  className="text-gray-600 hover:underline px-0"
                >
                  Go to Dashboard
                </Button>
              </Group>
            </Box>
          </Paper>
        </div>

        {/* Right Panel: Document Preview */}
        <div className="flex-1 max-w-xl">
          <Paper withBorder p="lg" className="shadow-sm flex flex-col h-full">
            <Group justify="space-between" align="center" className="mb-4">
              <Text className="text-lg font-lg">Document Preview</Text>

              <Group gap="xs">
                <ActionIcon variant="light" size="lg" aria-label="Print">
                  <IconPrinter size={20} />
                </ActionIcon>
                <ActionIcon variant="light" size="lg" aria-label="Download">
                  <IconDownload size={20} />
                </ActionIcon>
                <ActionIcon variant="light" size="lg" aria-label="Email">
                  <IconMail size={20} />
                </ActionIcon>
              </Group>
            </Group>

            <Divider className="mb-4" />

            <Box className="flex-grow flex items-center justify-center bg-gray-100 rounded p-4 h-96">
              <div className="text-center text-gray-500">
                <IconFileDescription size={48} className="mx-auto mb-2" />
                <Text>Document preview will appear here</Text>
              </div>
            </Box>

            <Group justify="center" gap="xl" className="mt-6">
              <Button variant="light" leftSection={<IconFileTypePdf size={20} />}>
                Download as PDF
              </Button>
              <Button variant="light" leftSection={<IconFileTypeDocx size={20} />}>
                Download as Word
              </Button>
              <Button variant="light" leftSection={<IconMail size={20} />}>
                Email to Buyer
              </Button>
            </Group>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default DocumentPreview;
