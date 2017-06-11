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

![jun-11-2017 13-27-54](https://user-images.githubusercontent.com/13334788/27010212-2d0d0d94-4eb0-11e7-98ee-8e928abd714d.gif)

### Licence
MIT
