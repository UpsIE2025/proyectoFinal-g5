import { styled } from '@mui/material/styles';

const GridItem = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '' : '#FFFFFF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default GridItem;
