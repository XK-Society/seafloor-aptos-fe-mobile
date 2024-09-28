import HomeScreen from "../components/HomeScreen";
import LoginScreen from "../components/LoginScreen";
import SplashScreen from "../components/SplashScreenView";
import { useFonts } from "expo-font";
import React from "react";
import { useEffect, useState } from "react";

export default function Index() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []); 

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'volte': require('../assets/fonts/Fontspring-DEMO-volte-regular.otf'),
  });
  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <>
      {isShowSplash ? <SplashScreen />: <LoginScreen /> }
    </>
  );
}
