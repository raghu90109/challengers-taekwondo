import { Box, Typography } from "@mui/material";

export default function AnnouncementBar() {
  return (
    <Box
      sx={{
        backgroundColor: "#0B3C91",
        color: "white",
        textAlign: "center",
        py: 1,
      }}
    >
      <Typography variant="body2">
        🥋 Admissions Open | Free Trial Class Available | Contact: +91 90148
        13378
      </Typography>
    </Box>
  );
}
