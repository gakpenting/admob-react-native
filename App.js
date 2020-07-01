import React,{Component} from 'react';
import {SafeAreaView, View,Text} from 'react-native';
import {AdMobBanner} from 'react-native-admob';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { InterstitialAd, RewardedAd,BannerAdSize, BannerAd, TestIds } from '@react-native-firebase/admob';


class App extends Component {
  componentDidMount(){
    admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });
  }
render(){
 
console.log(BannerAdSize.FULL_BANNER)
  return (
    <View>
      
    <Text>example banner</Text>
    <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
    </View>
  );
}
}


export default App;