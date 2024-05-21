import { ImageList, ImageListItem } from "@mui/material";
import { Stack } from "@mui/system";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export function ListingImage() {
  console.log(images);

  return (
    <Stack spacing={4} className="w-full h-[560px] rounded-xl">
      <ImageList
        sx={{ borderRadius: '16px' }}
        variant="quilted"
        cols={4}
        rowHeight={270}
      >
        {images.map((image) => (
          <ImageListItem
            key={image.img}
            cols={image.cols || 1}
            rows={image.rows || 1}
          >
            <img
              {...srcset(image.img, 121, image.rows, image.cols)}
              alt={image.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

const images = [
  {
    img: "https://source.unsplash.com/dsL_tvf1Z-E",
    title: "mountain",
    rows: 2,
    cols: 2
  },
  {
    img: "https://source.unsplash.com/yhbanN00pb8",
    title: "yurt",
  },
  {
    img: "https://source.unsplash.com/42eyOHoYULI",
    title: "monastery",
  },
  {
    img: "https://source.unsplash.com/mdtYgoLsfNk",
    title: "starry night",
  },
  {
    img: "https://source.unsplash.com/fjCihZthrAo",
    title: "dessert",
  },
];