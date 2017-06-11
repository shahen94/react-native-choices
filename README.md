# react-native-choices Component
### Getting Started
```sh
npm install react-native-choices --save
```

Usage
```javascript
import Choices from 'react-native-choices';

export default class Example extends Component {
  state = {
    selected: 'Public'
  }
  render() {
    return (
      <View style={styles.container}>
        <Choices
          options={['Private', 'Public', 'Off']}
          onChange={(selected) => this.setState({ selected })}
          selected={this.state.selected}
          label={'Messages'}
          containerStyle={{ width: 350 }}
          labelStyle={{ fontSize: 12 }}
        />
      </View>
    );
  }
}
```

### Licence
MIT
