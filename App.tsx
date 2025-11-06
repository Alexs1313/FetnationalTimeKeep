import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { TimeKeepContext } from './TimeKeeper/TimeKeeperStore/timeKeeperContext';
import TimeKeeperLoader from './TimeKeeper/TimeKeeperComponents/TimeKeeperLoader';
import TimeKeeperStack from './TimeKeeper/TimeKeeperNavigation/TimeKeeperStack';
import Toast from 'react-native-toast-message';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 6000);
  }, []);

  return (
    <NavigationContainer>
      <TimeKeepContext>
        {isLoading ? <TimeKeeperStack /> : <TimeKeeperLoader />}
        <Toast position="top" topOffset={55} />
      </TimeKeepContext>
    </NavigationContainer>
  );
};

export default App;
