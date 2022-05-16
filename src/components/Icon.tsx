export {};
// import {
//   Image,
//   ImageSourcePropType,
//   ImageStyle,
//   StyleProp,
// } from 'react-native';
// import React, { useEffect, useState } from 'react';

// interface IconProps {
//   name: keyof typeof icons | undefined;
//   size: number;
//   style?: {};
// }
// const icons = {
//   icoChatting: require('../../assets/icons/ico_chatting.png'),
//   icoImportantFriend: require('../../assets/icons/ico_important_friend.png'),
//   icoMap: require('../../assets/icons/ico_map.png'),
//   icoNotification: require('../../assets/icons/ico_notification.png'),
//   icoX: require('../../assets/icons/ico_x.png'),
// };

// const Icon: React.FC<IconProps> = ({ name, size, style }) => {
//   const [source, setSource] = useState<ImageSourcePropType>(0);
//   const [iconStyle, setIconStyle] = useState<StyleProp<ImageStyle>>({});
//   const [iconSize] = useState(size);
//   useEffect(() => {
//     switch (name) {
//       case 'icoChatting':
//         setSource(icons.icoChatting);
//         break;
//       case 'icoImportantFriend':
//         setSource(icons.icoImportantFriend);
//         break;
//       case 'icoMap':
//         setSource(icons.icoMap);
//         break;
//       case 'icoNotification':
//         setSource(icons.icoNotification);
//         break;
//       default:
//         setSource(icons.icoX);
//         break;
//     }
//   }, [name]);

//   useEffect(() => {
//     if (style) {
//       setIconStyle({ ...style, width: iconSize, height: iconSize });
//     } else {
//       setIconStyle({ width: iconSize, height: iconSize });
//     }
//   }, [iconSize, style]);

//   return <Image source={source} style={iconStyle} />;
// };

// export default Icon;
