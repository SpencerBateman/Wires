# Wires 🎛 
Wires is a project that explores digital signal processing in the browser.
Wires uses the Web Audio API to create a digital signal processing environment.
Wires also provies a loose javascript object as Content Management System, allowing for lessons to be contructed abstractly.

# Project Architecure 🏗
In order to support continuous playback, there is a central ```<Synthesizer />``` component that governs 
connecting to the audio API, playing, pausing, and the general state of the synthesizer. 
This object also holds the data model of the web synthesizer. Controls in the web applications forward commands to this object.

Here are usfull documents with more detail on this project.

[Read the Usability Study Here](Markdown/Usability.md)

[Read the Project Summary Here](Markdown/Summary.md)

## Directory Structure 🗃
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

