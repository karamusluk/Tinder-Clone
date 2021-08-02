import React, { useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from "react-native-reanimated";

import { PanGestureHandler } from "react-native-gesture-handler";

import Like from "../../../assets/images/LIKE.png";
import Nope from "../../../assets/images/nope.png";
const SWIPE_VELOCITY = 800;

export default AnimatedStack = (props) => {
  const { data, renderItem, onSwipeLeft, onSwipeRight } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex];

  const { width: screenWidth } = useWindowDimensions();

  const hiddenTranslateXValue = 2 * screenWidth;

  const translateX = useSharedValue(0);

  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateXValue], [0, 60]) + "deg"
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          rotate: rotate.value,
        },
      ],
    };
  });

  const nextCardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            translateX.value,
            [-hiddenTranslateXValue, 0, hiddenTranslateXValue],
            [1, 0.8, 1]
          ),
        },
      ],
      opacity: interpolate(
        translateX.value,
        [-hiddenTranslateXValue, 0, hiddenTranslateXValue],
        [1, 0.5, 1]
      ),
    };
  });

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [0, hiddenTranslateXValue / 5],
      [0, 1]
    ),
  }));

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [0, -hiddenTranslateXValue / 5],
      [0, 1]
    ),
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e, context) => {
      context.startX = translateX.value;
    },
    onActive: (e, context) => {
      translateX.value = withSpring(context.startX + e.translationX);
    },
    onEnd: (e, context) => {
      if (Math.abs(e.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0);
        return;
      }
      translateX.value = withSpring(
        Math.sign(e.velocityX) * hiddenTranslateXValue,
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1)
      );

      const onSwipe = e.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe && runOnJS(onSwipe)(currentProfile);
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);

  return (
    <View style={styles.container}>
      <View style={styles.nextCardContainer}>
        <Animated.View style={[styles.animatedContainer, nextCardStyle]}>
          {nextProfile && renderItem({ item: nextProfile })}
        </Animated.View>
      </View>
      {currentProfile && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedContainer, cardStyle]}>
            <Animated.Image
              source={Like}
              style={[styles.like, { left: 10 }, likeStyle]}
              resizeMode="contain"
            />
            <Animated.Image
              source={Nope}
              style={[styles.like, { right: 10 }, nopeStyle]}
              resizeMode="contain"
            />
            {renderItem({ item: currentProfile })}
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animatedContainer: {
    width: "90%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  like: {
    width: 150,
    height: 150,
    top: 10,
    position: "absolute",
    zIndex: 1,
  },
});
