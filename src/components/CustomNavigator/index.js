import AdjustIcon from '@mui/icons-material/Adjust'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import HistoryIcon from '@mui/icons-material/History'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { drawerWidth } from '../../constant'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const CustomNavigator = (props) => {
  const { history } = props

  const navigatorList = [
    {
      text: 'Search',
      icon: <SearchIcon />,
      onClick: () => history.push('/'),
    },
    {
      text: 'Recently matches',
      icon: <HistoryIcon />,
      onClick: () => history.push('/history'),
    },
    {
      text: 'Live Games',
      icon: <AdjustIcon />,
      onClick: () => history.push('/live'),
    },
    {
      text: 'The rules',
      icon: <ArticleOutlinedIcon />,
      onClick: () => history.push('/rules'),
    },
  ]

  return (
    <Box>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor='left'
      >
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List>
          {navigatorList.map((item, index) => (
            <ListItem button key={`text-icon-${index}`} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  )
}
export default withRouter(CustomNavigator)
