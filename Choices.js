import React, { PropTypes } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Dimensions,
    Text
} from 'react-native';

const { width: WINDOW_WIDTH } = Dimensions.get('window');

const BLUE = 'blue';
const WHITE = 'white';
const HUE_GRAY = 'gray';

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: WHITE,
    borderBottomColor: HUE_GRAY,
    borderBottomWidth: 1 / 4,
  },
  label: {
    flex: 1,
    maxWidth: WINDOW_WIDTH / 2,
    overflow: 'hidden',
    flexWrap: 'nowrap',
    maxHeight: 50,
    fontSize: 14,
  },
  row: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: BLUE,
    borderRadius: 15,
    overflow: 'hidden'
  },
  buttonView: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: BLUE,
  },
  selectedText: {
    color: WHITE
  },
  colBorder: {
    borderLeftWidth: 1,
    borderLeftColor: HUE_GRAY
  },
  leftBorder: {
    ...Platform.select({
      android: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
      }
    }),
  },
  rightBorder: {
    ...Platform.select({
      android: {
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
      }
    })
  }
});

type RenderButtonsProps = {
    options: Array<string>,
    selected: string,
    onChange: (val: string) => void
};

const renderButtons = ({ options, selected, onChange }: RenderButtonsProps) => {
  const roundLeftBorder = (idx, option) => idx === 0 && option === selected;
  const roundRightBorder = (idx, option) => idx === options.length - 1 && option === selected;
  return options.map((option, i) => (
    <TouchableOpacity
      style={[
        styles.buttonView,
        selected === option && styles.selected,
        i !== 0 && styles.colBorder,
        roundLeftBorder(i, option) && styles.leftBorder,
        roundRightBorder(i, option) && styles.rightBorder,
      ]}
      onPress={() => onChange(option)}
      key={i}
    >
      <Text style={[selected === option && styles.selectedText]} >
        {option}
      </Text>
    </TouchableOpacity>
  ));
};

type Props = {
    options: Array<string>,
    label: string,
    onChange: (val: string) => void,
    selected: ?string,
    labelStyle: ?number,
    buttonsContainerStyle: ?number,
    containerStyle: ?number
};

export const Choices = ({
  options,
  label,
  onChange,
  selected,
  labelStyle,
  buttonsContainerStyle,
  containerStyle,
}: Props) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.row}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={[styles.buttons, buttonsContainerStyle]}>
        {renderButtons({ options, selected, onChange })}
      </View>
    </View>
  </View>
);

Choices.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  labelStyle: PropTypes.number,
  buttonsContainerStyle: PropTypes.number,
  containerStyle: PropTypes.number,
};

Choices.defaultProps = {
  options: [],
  onChange: () => void(0)
};
