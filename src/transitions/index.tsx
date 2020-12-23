import React from 'react';
import { TransitionProps } from '@material-ui/core/transitions';
import { Collapse, Fade, Grow, Slide, Zoom } from '@material-ui/core';

export const TransitionSlideUp = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const TransitionSlideDown = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const TransitionSlideLeft = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const TransitionSlideRight = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const TransitionGrow = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Grow ref={ref} {...props} />;
});

export const TransitionFade = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});

export const TransitionCollapse = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Collapse ref={ref} {...props} />;
});

export const TransitionZoom = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />;
});
