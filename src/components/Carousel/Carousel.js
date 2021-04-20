import React from "react";
import "./style/carousel.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IconButton } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
// style
import { useStyles } from "./style/carousel";

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: false,
  infiniteLoop: false,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: false,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: true,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 3000,
  transitionTime: 150,
  swipeScrollTolerance: 5,
});

const BaseCarousel = (props) => {
  const classes = useStyles();

  return (
    <div className={`carousel-outer ${classes.root}`}>
      <Carousel
        className={classes.carouselContainer}
        {...getConfigurableProps()}
        tatusFormatter={(current, total) =>
          `Current slide: ${current} / Total: ${total}`
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <IconButton
              type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.arrowStyles}
              style={{ left: -20 }}
            >
              <ArrowBackIos color="primary" />
            </IconButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <IconButton
              type="button"
              onClick={onClickHandler}
              title={label}
              className={classes.arrowStyles}
              style={{ right: -20 }}
            >
              <ArrowForwardIos color="primary" />
            </IconButton>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className={classes.indicatorStyles}
                style={{ background: "#none" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className={classes.indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {props.children}
      </Carousel>
    </div>
  );
};

export default BaseCarousel;
