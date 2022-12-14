import { Notification, Stack } from '@mantine/core';

export default function Home() {
  return (
    <Stack
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        height: 300,
      })}
    >
      <Notification
        color='cyan'
        title='دستورالعمل آراستگی و شئون فرهنگی:'
        disallowClose
      >
        دستورالعمل آراستگی و شئون فرهنگی و رفتاری در دانشگاه آزاد اسلامی
      </Notification>

      <Notification
        color='cyan'
        title='اخذ کارت ورود به جلسه امتحان میان ترم'
        disallowClose
      >
        دانشجویان محترم جهت اخذ کارت ورود به جلسه امتحان میان ترم از مسیر زیر
        اقدام نمایید.
        <br />
        <br />
        1- منوی ثبت نام دروس دانشجو
        <br />
        2- زیر منوی مشاهده آخرین وضعیت ثبت نام (ترم جاری )
        <br />
        3- دکمه چاپ کارت ورود به جلسه امتحان بین ترم
        <br />
        <br />
        توجه : شرط اخذ کارت تسویه کامل بدهی می باشد.
      </Notification>
    </Stack>
  );
}
