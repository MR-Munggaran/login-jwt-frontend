import React from 'react'
import {Button, Card, Avatar, Flex, Typography} from 'antd'
import { useAuth } from '../context/AuthContext'
import {UserOutlined} from '@ant-design/icons'

function Dashboard() {
  const {logout, userData} = useAuth()

  const handleLogout = async () => {
    await logout()
  }
  return (
    <Card className='profile-card'>
      <Flex vertical gap='small' align='center'>
        <Avatar size={150} icon={<UserOutlined/>} className='avatar'></Avatar>
        <Typography.Title level={2} strong className='username'>
          {userData.name}
        </Typography.Title>
        <Typography.Text type="secondary" strong>Email : {userData.email}</Typography.Text>
        <Typography.Text type="secondary" strong>Role : {userData.role}</Typography.Text>
      <Button onClick={handleLogout} size='large' type='primary' className='profile-btn'>Logout</Button>
      </Flex>
    </Card>

  )
}

export default Dashboard