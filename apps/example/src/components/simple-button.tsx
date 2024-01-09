import React, { useCallback, useEffect, useState } from 'react';
import { router } from 'expo-router';
import { useColorScheme, View, Text, TouchableOpacity } from 'react-native';
import { tv } from 'tailwind-variants';

// /* Button Styles */

const button = tv({
  slots: {
    wrapper: '',
    base: 'border justify-center items-center',
    view: 'bg-transparent',
    iconClass: '',
    text: 'text-xl p-2',
  },
  variants: {
    type: {
      monochrome: {
        wrapper: 'px-8 my-2',
        base: 'bg-gray-900 dark:bg-gray-50',
        text: 'font-bold text-white dark:text-black',
      },
      stroke: {
        wrapper: 'px-8 my-2',
        base: 'flex border-gray-400 dark:border-gray-600 rounded-md',
        text: 'font-bold text-black dark:text-white dark',
      },
    }
  },
  defaultVariants: {
    type: 'monochrome'
  },
});

export const Button: React.FC<TouchableProps> = (props) => {
  const { type, href, onPress, label, children } = props;

  const handlePress = useCallback(() => {
    if(href){
      router.push(href);
    } else if(onPress){
      onPress();
    }
  }, [href,onPress]);

  const { wrapper, base, view, text } = button();

  return (
    <View className={wrapper({ type })}>
      <TouchableOpacity
        onPress={handlePress}
        className={base({ type })}
      >
        {typeof children == 'function' || typeof children == 'object' ? (
          children
        ) : (
          <View className={view({ type })}>
            <Text className={text({ type })}>
              {typeof children === 'string' ? children : label || 'Submit'}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;