import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {payingHistory} from '../credit-card/Data';
import Circle from '../../assets/icons/slider.svg';

const HEIGHT = Dimensions.get('window').width / 1.8;
const WIDTH = Dimensions.get('window').width - 48;

export const TransferChart = () => {
  const [thisWeek, setThisWeek] = useState(true);
  const [lastWeek, setLastWeek] = useState(false);

  const toggleWeek = useCallback(
    (week: any) => {
      if (week === 'thisWeek' && thisWeek !== true) {
        setThisWeek(!thisWeek);
        setLastWeek(!lastWeek);
      }
      if (week === 'lastWeek' && lastWeek !== true) {
        setThisWeek(!thisWeek);
        setLastWeek(!lastWeek);
      }
    },
    [lastWeek, thisWeek],
  );
  const data1 = payingHistory.map(a => +a.price);
  const data2 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53];

  const TOP = data1[1];
  const LEFT = data2[1];
  const AVERAGE = data1.reduce((a, b) => a + b, 0) / data1.length;

  return (
    <View style={styles.chartWrapper}>
      <View style={styles.weekContainer}>
        <TouchableOpacity
          onPress={() => toggleWeek('thisWeek')}
          style={styles.option}>
          <Text style={styles.weekText}>This Week</Text>
          <View style={thisWeek ? styles.activeIcon : styles.notActiveIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleWeek('lastWeek')}
          style={styles.option}>
          <Text style={styles.weekText}>Last Week</Text>
          <View style={lastWeek ? styles.activeIcon : styles.notActiveIcon} />
        </TouchableOpacity>
      </View>
      <LineChart
        style={{height: 150}}
        data={thisWeek ? data1 : data2}
        contentInset={{top: 33, bottom: 33}}
        svg={{stroke: '#6D5FFD', strokeWidth: 4}}
        curve={shape.curveNatural}
        // renderDecorator={Decorator}
      >
        <View style={{position: 'absolute', top: 50, left: 50}}>
          <View style={styles.averageBox}>
            <Text style={styles.averageText}>${AVERAGE}</Text>
          </View>
          <View style={styles.averageIcon}>
            <Circle />
          </View>
        </View>
      </LineChart>
      <View style={styles.dayOfWeekContainer}>
        <Text style={styles.dayOfWeekText}>Mon</Text>
        <Text style={styles.dayOfWeekText}>Tue</Text>
        <Text style={styles.dayOfWeekText}>Wed</Text>
        <Text style={styles.dayOfWeekText}>Thu</Text>
        <Text style={styles.dayOfWeekText}>Fri</Text>
        <Text style={styles.dayOfWeekText}>Sat</Text>
        <Text style={styles.dayOfWeekText}>Sun</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    backgroundColor: '#fff',
    height: HEIGHT,
    width: WIDTH,
    borderRadius: 12,
    borderColor: '#6D5FFD',
    borderWidth: 1,
  },
  weekContainer: {
    flexDirection: 'row',
    marginLeft: 14,
    marginTop: 20,
  },
  weekText: {
    color: '#2C3A4B',
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
    marginRight: 12,
  },
  activeIcon: {
    backgroundColor: '#6D5FFD',
    borderRadius: 36,
    width: 22,
    height: 6,
  },
  notActiveIcon: {
    backgroundColor: '#E2DFFF',
    borderRadius: 36,
    width: 22,
    height: 6,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  dayOfWeekText: {
    color: '#6D5FFD',
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  dayOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginBottom: 13,
  },
  averageBox: {
    height: 40,
    width: 64,
    backgroundColor: '#6D5FFD',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  averageText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  averageIcon: {
    marginLeft: 22,
    marginTop: 10,
  },
});
