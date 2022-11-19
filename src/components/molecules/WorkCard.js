import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const testImage="https://images.unsplash.com/photo-1549388604-817d15aa0110"

const WorkCard = ({image = testImage}) => {
  return (
    <>
      <Box pb={1}>
        <CardActionArea style={{ borderRadius: "8px" }}>
          <CardMedia
            component={"img"}
            image={image}
            alt={"test"}
            style={{ objectFit: "cover", borderRadius: "8px" }}
            height="300px"
          />
        </CardActionArea>
      </Box>

      <Box pl={1} pb={1}>
        <Typography variant="body1">エンガワまくら</Typography>
      </Box>
      <Box pl={1} pb={1}>
        <Typography variant="body2">エンガワって言ったやつ誰だよ</Typography>
      </Box>

      <Box>
        <Button fullWidth style={{ justifyContent: "start" }}>
          <CardHeader
            avatar={<Avatar>DD</Avatar>}
            title={
              <Typography variant="subtitle1" color={"#000000"}>
                test test test
              </Typography>
            }
            subheader={"Jan 9, 2014"}
            style={{ padding: "4px" }}
          />
        </Button>
      </Box>
    </>
  );
};
export default WorkCard;
