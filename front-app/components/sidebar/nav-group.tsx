import { ListSubheader, styled, Theme } from '@mui/material';
import React from 'react';

interface NavGroupItem {
  navlabel?: boolean;
  subheader?: string;
}

interface ItemType {
  item: NavGroupItem;
  hideMenu: string | boolean;
}

export default function NavGroup({ item, hideMenu }: ItemType) {
  const ListSubheaderStyle = styled((props: Theme | any) => (
    <ListSubheader disableSticky {...props} />
  ))(({ theme }) => ({
    ...theme.typography.overline,
    fontWeight: '700',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0),
    color: 'text.Primary',
    lineHeight: '26px',
    padding: '3px 12px',
    marginLeft: hideMenu ? '' : '-10px',
  }));

  return (
    <ListSubheaderStyle>{hideMenu ? <></> : item?.subheader}</ListSubheaderStyle>
  );
}
