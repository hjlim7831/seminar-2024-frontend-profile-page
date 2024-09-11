import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { grey } from '@mui/material/colors';

export interface AchievementItemProps {
  title: string;
  description: string;
  color?: string | number;
}

const AchievementItem = ({
  title,
  description,
  color,
}: AchievementItemProps) => {
  const avatarSx = {
    bgcolor: color !== undefined ? color : grey[400],
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={avatarSx}>
          <EmojiEventsIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  );
};

export default AchievementItem;
