
import { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Link, Stack } from '@material-ui/core';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  cursor: 'pointer',
  color: theme.palette?.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    // opacity: 0.48,
    textDecoration: 'none',
    transform: 'translate3d(0, 2px, 0)'
  }
}));


function MenuDesktopItem({ item, pathname, isHome, isOffset }) {
  const { title, path } = item;
  const isActive = pathname === path;


  return (
    <LinkStyle
      component={RouterLink}
      spy={true}
      smooth={true}
      to={path}
      sx={{
        ...(isHome && { color: 'text.primary' }),
        ...(isOffset && { color: 'text.primary' }),
        ...(isActive && { color: 'primary.main' }),
        color: 'text.secondary'
      }}
    >
      {title}
    </LinkStyle>
  );
}

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          pathname={pathname}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}
