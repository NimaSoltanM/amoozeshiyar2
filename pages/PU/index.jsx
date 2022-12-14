import { useState } from 'react';
import {
  TransferList,
  Accordion,
  Container,
  Group,
  Center,
  Button,
} from '@mantine/core';

export default () => {
  const initialValues = [
    [],
    [
      { value: 'ریاضی عمومی', label: 'ریاضی عمومی' },
      { value: 'مهارت های مسئله یابی', label: 'مهارت های مسئله یابی' },
      { value: 'ترتبیت بدنی', label: 'ترتبیت بدنی' },
      { value: 'برنامه نویسی سخت افزار', label: 'برنامه نویسی سخت افزار' },
      { value: 'برنامه نویسی موبایل', label: 'برنامه نویسی موبایل' },
      { value: 'کارآفرینی', label: 'کارآفرینی' },
      { value: 'زبان فنی', label: 'زبان فنی' },
      { value: 'فیزیک پیش نیاز', label: 'فیزیک پیش نیاز' },
    ],
  ];

  const [data, setData] = useState(initialValues);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <TransferList
        value={data}
        onChange={setData}
        searchPlaceholder='جستجو ...'
        nothingFound='لیست خالی است'
        titles={['درس های انتخاب شده', 'درس های موجود']}
        breakpoint='sm'
      />

      <Container>
        <Center>
          <Button onClick={() => setShowDetails(!showDetails)} mt='xl'>
            {showDetails ? 'مخفی کردن جزئیات دروس' : 'نشان دادن جزئیات دروس'}
          </Button>
        </Center>
        {showDetails ? (
          <Accordion variant='separated' mt='xl'>
            {initialValues[1].map((value) => (
              <Accordion.Item value={value.value}>
                <Accordion.Control>{value.label}</Accordion.Control>
                <Accordion.Panel>
                  <Group>
                    <p>استاد : رضا رضایی</p>
                    <p>کد ارائه : 556</p>
                  </Group>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};
