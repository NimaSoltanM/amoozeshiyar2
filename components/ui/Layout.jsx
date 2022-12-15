import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
  Avatar,
  Divider,
  Box,
  Menu,
  ActionIcon,
  Modal,
  Center,
  Drawer,
  Stack,
  Paper,
  TextInput,
  PasswordInput,
  Button,
} from '@mantine/core';
import Link from 'next/link';
import { useForm } from '@mantine/form';

import { useRouter } from 'next/router';

import {
  FaHome,
  FaChevronLeft,
  FaMoneyBillAlt,
  FaUserAlt,
  FaSignOutAlt,
  FaShoppingCart,
  FaInfo,
} from 'react-icons/fa';

export default function AppShellDemo({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const [openedModal, setOpenedModal] = useState(false);
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const clickHandler = () => {
    setOpenedModal(true);
  };

  const drawerHandler = () => {
    setOpenedDrawer(true);
  };

  const form = useForm({
    initialValues: {
      code: '',
      password: '',
      igapCode: '',
    },

    validate: {
      code: (value) =>
        value === '1234' ? null : 'فقط مقادیر گفته شده را وارد کنید',
      password: (value) =>
        value === '1234' ? null : 'فقط مقادیر گفته شده را وارد کنید',
      igapCode: (value) =>
        value === 'i1234' ? null : 'فقط مقادیر گفته شده را وارد کنید',
    },
  });

  const submitHandler = (values) => {
    if (form.isValid) {
      alert('مثلا وارد شدی');
    }
  };
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 150, lg: 250 }}
        >
          <Link href='/'>
            <NavLink
              label='خانه'
              icon={<FaHome size={20} stroke={1.5} />}
              rightSection={<FaChevronLeft size={15} stroke={1.5} />}
              variant='light'
              active={router.pathname === '/'}
              mb='sm'
            />
          </Link>
          <Link href='/financial-affairs'>
            <NavLink
              label='امور مالی'
              icon={<FaMoneyBillAlt size={20} stroke={1.5} />}
              rightSection={<FaChevronLeft size={15} stroke={1.5} />}
              variant='light'
              active={router.pathname === '/financial-affairs'}
              mb='sm'
            />
          </Link>
          <Link href='/PU'>
            <NavLink
              label='انتخاب واحد'
              icon={<FaShoppingCart size={20} stroke={1.5} />}
              rightSection={<FaChevronLeft size={15} stroke={1.5} />}
              variant='light'
              active={router.pathname === '/PU'}
              mb='sm'
            />
          </Link>
        </Navbar>
      }
      footer={
        <Footer height={60} p='md'>
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p='md'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>

            <h3>دانشگاه سما</h3>

            <Menu
              transition='rotate-right'
              transitionDuration={150}
              position='right'
              withArrow
            >
              <Menu.Target>
                <ActionIcon variant='outline'>
                  <FaUserAlt size={16} />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item onClick={clickHandler} icon={<FaInfo size={14} />}>
                  مشخصات شما
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  onClick={drawerHandler}
                  icon={<FaSignOutAlt size={14} />}
                  color='red'
                >
                  خروج
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Header>
      }
    >
      {children}

      <Modal
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
        title='مشخصات شما'
      >
        <Box>
          <Center>
            <Avatar src='/images/avatar.jpg' size='xl' />
          </Center>

          <Divider mt='md' />

          <p>نام : رضا</p>
          <p>نام خانوادگی : رضایی</p>
          <p>شماره دانشجویی : 39945541042019</p>
        </Box>
      </Modal>

      <Drawer
        opened={openedDrawer}
        onClose={() => setOpenedDrawer(false)}
        padding='xl'
        size='100%'
        closeOnClickOutside={false}
      >
        <Box w='100%' height='100%'>
          <Center>
            <h1>ورود دوباره</h1>
          </Center>
          <Center>
            <Stack align='center'>
              <Paper shadow='xl' p='xl'>
                <form
                  onSubmit={form.onSubmit((values) => submitHandler(values))}
                >
                  <Stack spacing='lg'>
                    <TextInput
                      placeholder='1234'
                      label='کد دانشجویی'
                      withAsterisk
                      {...form.getInputProps('code')}
                    />
                    <PasswordInput
                      placeholder='1234'
                      label='رمز عبور'
                      withAsterisk
                      {...form.getInputProps('password')}
                    />
                    <TextInput
                      placeholder='i1234'
                      label='کد آی گپ'
                      description='برای اذیت و آزار شما ، کد فرستاده شده به آی گپ را نیز باید وارد کنید.'
                      withAsterisk
                      {...form.getInputProps('igapCode')}
                    />

                    <Button type='submit'>ورود</Button>
                  </Stack>
                </form>
              </Paper>
            </Stack>
          </Center>
        </Box>
      </Drawer>
    </AppShell>
  );
}
