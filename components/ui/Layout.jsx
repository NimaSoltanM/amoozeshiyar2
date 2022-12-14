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
  Card,
  Group,
  Avatar,
  Divider,
  Box,
  Menu,
  ActionIcon,
  Modal,
  Center,
} from '@mantine/core';
import Link from 'next/link';
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

  const clickHandler = () => {
    setOpenedModal(true);
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

          <Box mt='100%' className='user-button'>
            <Divider mb='md' />
            <Card py='0'>
              <Group position='apart'>
                <Avatar src='/images/avatar.jpg' />
                <p>حسن روحانی</p>
              </Group>
            </Card>
          </Box>
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
                <Menu.Item icon={<FaSignOutAlt size={14} />} color='red'>
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
    </AppShell>
  );
}
