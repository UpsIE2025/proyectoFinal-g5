import React from 'react';
import Link from 'next/link';
import {
  ListItemIcon,
  List,
  styled,
  ListItemText,
  Chip,
  useTheme,
  Typography,
  ListItemButton,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface NavGroup {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  children?: NavGroup[];
  chip?: string;
  chipColor?: any;
  variant?: string | any;
  external?: boolean;
  level?: number;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
}

const NavItem = ({ item, level, pathDirect, hideMenu, onClick }: ItemType) => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();

  const ListItemStyled = styled(ListItemButton)(() => ({
    whiteSpace: 'nowrap',
    marginBottom: '2px',
    padding: '8px 10px',
    borderRadius: `${customizer.borderRadius}px`,
    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
    color:
      level > 1 && pathDirect === item?.href
        ? `${theme.palette.primary.main}!important`
        : theme.palette.text.secondary,
    paddingLeft: hideMenu ? '10px' : level > 2 ? `${level * 15}px` : '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
    '&.Mui-selected': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  }));

  return (
    <List component="li" disablePadding key={item?.id && item.title}>
      <Link href={item.href}>
        <ListItemStyled
          disabled={item?.disabled}
          selected={pathDirect === item?.href}
          onClick={onClick}
        >
          <ListItemIcon
            sx={{
              minWidth: '36px',
              p: '3px 0',
              color:
                level > 1 && pathDirect === item?.href
                  ? `${theme.palette.primary.main}!important`
                  : 'inherit',
            }}
          >
            <FontAwesomeIcon icon={item.icon} fontSize="1rem" />
          </ListItemIcon>
          <ListItemText>
            {hideMenu ? '' : <>{item?.title}</>}
            <br />
            {item?.subtitle ? (
              <Typography variant="caption">
                {hideMenu ? '' : item?.subtitle}
              </Typography>
            ) : (
              ''
            )}
          </ListItemText>

          {!item?.chip || hideMenu ? null : (
            <Chip
              color={item?.chipColor}
              variant={item?.variant ? item?.variant : 'filled'}
              size="small"
              label={item?.chip}
            />
          )}
        </ListItemStyled>
      </Link>
    </List>
  );
};

export default NavItem;
