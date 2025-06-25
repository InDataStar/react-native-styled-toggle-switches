# React Native Styled Toggle Switches

A customizable, animated slide switch (toggle) component built with **React Native** and **Reanimated v2**.

## ✨ Features

- Smooth animated toggle transition
- Customizable colors, size, and animation duration
- Notifies parent component of toggle state via callback
- Clean, minimal implementation using Reanimated

---

## 📦 Installation

Install required dependency:

```bash
npm install react-native-reanimated
```


## 🚀 Usage 

```
import SlideSwitch,SlideSwitchWithText from './SlideSwitch';

<SlideSwitch
  beforeColor="#ccc"
  afterColor="#4cd137"
  duration={300}
  width={60}
  height={30}
  onToggle={(value) => console.log('Switch is now:', value)}
/>

  <SlideSwitchWithText 
    beforeText='This' 
    afterText='That'  
    beforeColor='pink'
    afterColor='black' 
    duration={400} 
    width={80} 
    height={40} 
    onToggle={(val) => console.log('Switch toggled:', val)}
    />
```

##  🔧 Props
## SlideSwitch
| Prop         | Type                          | Required | Description                                                              |
|--------------|-------------------------------|----------|--------------------------------------------------------------------------|
| `beforeColor`| `string`                      | ✅       | Color of the switch in the off state.                                    |
| `afterColor` | `string`                      | ✅       | Color of the switch in the on state.                                     |
| `duration`   | `number`                      | ✅       | Duration of the toggle animation in milliseconds.                        |
| `width`      | `number`                      | ✅       | Total width of the toggle switch.                                        |
| `height`     | `number`                      | ✅       | Total height of the toggle switch.                                       |
| `onToggle`   | `(value: boolean) => void`    | ❌       | Optional callback invoked with the new state (`true`/`false`) on toggle. |


## SlideSwitchWithText
| Prop         | Type                          | Required | Description                                                              |
|--------------|-------------------------------|----------|--------------------------------------------------------------------------|
| `beforeColor`| `string`                      | ✅       | Color of the switch in the off state.                                    |
| `afterColor` | `string`                      | ✅       | Color of the switch in the on state.                                     |
| `afterText` | `string`                      | ✅       | Word on switch in the on state.                                     |
| `beforeText` | `string`                      | ✅       | Word on the switch in the off state.                                     |
| `duration`   | `number`                      | ✅       | Duration of the toggle animation in milliseconds.                        |
| `width`      | `number`                      | ✅       | Total width of the toggle switch.                                        |
| `height`     | `number`                      | ✅       | Total height of the toggle switch.                                       |
| `onToggle`   | `(value: boolean) => void`    | ❌       | Optional callback invoked with the new state (`true`/`false`) on toggle. |


## 🧠 How It Works
Internal checked state toggles on user interaction.

useAnimatedStyle from react-native-reanimated interpolates:

Background color of the track.

Thumb position and color.

Animations are wrapped in withTiming for smooth transitions.

The component notifies the parent via onToggle (if provided).

## 🧪 Testing
The root TouchableOpacity has a testID="Switchtest" that can be used in unit or e2e tests.

## 📄 License
MIT