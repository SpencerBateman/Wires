# Wires
Wires is a project that explores digital signal processing in the browser.


# Project Architecure
There will be a central ```<Synthesizer />``` component that will govern 
audio playback and connecting to the window, audio context etc.

Should Synthesizer take care of grid? Yes but it imports the manager perhanps.
Synth needs to manage displaying direction of signal flow and order of modules.

## Directory Structure
```
wires/
├── components/
│   ├── Modules/
│   │   ├── Amp
│   │   └── Oscillator
│   ├── Synthesizer/
│   │   ├── Synthesizer
│   │   └── WAVEFORMS
│   └── UI/
│       ├── Fader
│       ├── OnSwitch
│       └── WaveSelector
├── data/
│   └── Lesson1.js
├── pages/
│   ├── index
│   └── _document
├── next.config.js
├── now.json
├── package.json
├── README.md
└── yarn.lock
```
### components/Modules/
#### Amp
The Amp Module controls the volume of the signal that is passing through it. 
The Amp allows attenuation to -infdB and max volume of 0dBs
The Amp component uses the fader UI element

```
┌─────────────────────────┐
│           Amp           │
├─────────────────────────┤
│ active : Boolean        │
│ gain : Integer          │
│                         │
├─────────────────────────┤
│ updateGain(gain : int)  │
│                         │
├─────────────────────────┤
│ <Fader />               │
│                         │
└─────────────────────────┘
```
#### Oscillator
```
┌─────────────────────────┐
│       Oscillator        │
├─────────────────────────┤
│ active : Boolean        │
│ wave : ENUM             │
│ frequency : Integer     │
│                         │
├─────────────────────────┤
│ updateState()           │
│                         │
├─────────────────────────┤
│ <Fader />               │
│ <WaveSelector />        │
│                         │
└─────────────────────────┘
```
### components/Synthesizer/
#### Synthesizer
```
┌─────────────────────────┐
│       Synthesizer       │
├─────────────────────────┤
│ active : Boolean        │
│ wave : ENUM             │
│ frequency : Integer     │
│                         │
├─────────────────────────┤
│ updateState()           │
│                         │
├─────────────────────────┤
│ <Fader />               │
│ <WaveSelector />        │
│                         │
└─────────────────────────┘
```
#### WAVEFORMS

### components/UI/
### data/
#### Lesson Object Format
| Field       | Type         | Description              |
| ----------- | ------------ | -------------------------|
| ```Title``` | ```String``` | The Title of the lessons |
| ```Author```| ```String``` | The Name of the lessons author |
| ```Version```| ```int``` | Version # of Lesson |
| ```Module```| ```Array<int>``` | List of module id's for lesson |

### pages/
### next.config.js
### now.json
### package.json
### README.md
### yarn.lock

# Deployment
Deploy in an instant with Now by running ```now``` in terminal.

