import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useFetchClient } from "@strapi/helper-plugin";
import { Table, Thead, Tbody, Tr, Td, Th, Box, BaseCheckbox, IconButton, Typography, VisuallyHidden, Flex, Avatar, AvatarGroup } from '@strapi/design-system';
import { CarretDown, Pencil, Trash } from '@strapi/icons';

function listArticle() {
    const [articleData, setArticleData] = useState([]);
    const { get } = useFetchClient();


    async function testData() {
        const data = await get('/workflow-review/all-article');
        setArticleData(data.data);
    }

    useEffect(() => {
        testData();
    }, [])

    // @ts-ignore
    console.log(articleData);

    // const ROW_COUNT = 6;
    // const COL_COUNT = 10;
    const entry = {
        cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
        description: 'Chez Léon is a human sized Parisian',
        category: 'French cuisine',
        contact: 'Leon Lafrite'
    };
    const entries = [];
    for (let i = 0; i < 5; i++) {
        entries.push({
            ...entry,
            id: i
        });
    }

    articleData.map((data) => console.log(data));

    const ROW_COUNT = articleData.length;
    const COL_COUNT = 10;


    return (

        <Box style={{ alignSelf: 'stretch' }} background="neutral0" padding="32px" hasRadius={true}>
            <Table colCount={COL_COUNT} rowCount={ROW_COUNT} footer={undefined}>
                <Thead>
                    <Tr>
                        <Th action={undefined}>
                            {/* <BaseCheckbox /> */}
                        </Th>
                        <Th action={<IconButton label="Sort on ID" icon={<CarretDown />} noBorder />}>
                            <Typography variant="sigma">ID</Typography>
                        </Th>
                        <Th action={undefined}>
                            <Typography variant="sigma">Name</Typography>
                        </Th>
                        <Th action={undefined}>
                            <Typography variant="sigma">Content</Typography>
                        </Th>
                        <Th action={undefined}>
                            <VisuallyHidden>Actions</VisuallyHidden>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {articleData.map(entry => <Tr key={entry.id}>
                        <Td>
                                {/* <BaseCheckbox aria-label={`Select ${entry.contact}`} /> */}
                        </Td>
                        <Td>
                            <Typography textColor="neutral800">{entry.id}</Typography>
                        </Td>
                        <Td>
                            <Typography textColor="neutral800">{entry.name}</Typography>
                        </Td>
                        <Td>
                            <Typography textColor="neutral800">{entry.content}</Typography>
                        </Td>
                        <Td>
                            <Flex>
                                <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<Pencil />} />
                                <Box paddingLeft={1}>
                                    <IconButton onClick={() => console.log('delete')} label="Delete" noBorder icon={<Trash />} />
                                </Box>
                            </Flex>
                        </Td>
                    </Tr>)}
                </Tbody>
            </Table>
        </Box>
    )
}

export default listArticle;
