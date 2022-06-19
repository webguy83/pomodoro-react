export const ToggleButtonGroupStyles = { bgcolor: 'primary.dark', p: 1, borderRadius: 50 };

export const NavBarButtonStyles = (bgColour: string) => ({
  backgroundColor: bgColour,
  '&.MuiToggleButton-root:hover': {
    backgroundColor: bgColour,
  },
  color: 'primary.dark',
});
